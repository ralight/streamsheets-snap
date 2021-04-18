"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const id_generator_1 = __importDefault(require("@cedalo/id-generator"));
const logger_1 = require("@cedalo/logger");
const messaging_client_1 = require("@cedalo/messaging-client");
const protocols_1 = require("@cedalo/protocols");
const ws_1 = __importDefault(require("ws"));
const Auth_1 = __importDefault(require("../Auth"));
const utils_1 = require("../utils");
const ServerConnection_1 = __importDefault(require("./ServerConnection"));
const SocketServer_1 = require("./SocketServer");
const StreamWSProxy_1 = require("./StreamWSProxy");
const logger = logger_1.LoggerFactory.createLogger('ProxyConnection', process.env.STREAMSHEETS_LOG_LEVEL || 'info');
const OPEN_CONNECTIONS = new Set();
class ProxyConnection {
    constructor(ws, request, user, socketserver) {
        this.id = id_generator_1.default.generateUUID();
        this.request = request;
        this.user = user;
        this.clientsocket = ws;
        this.socketserver = socketserver;
        this.messagingClient = new messaging_client_1.MessagingClient();
        this.messagingClient.connect(process.env.MESSAGE_BROKER_URL || 'mqtt://localhost:1883');
        this.graphserver = new ServerConnection_1.default('graphserver', 'graphs');
        this.machineserver = new ServerConnection_1.default('machineserver', 'machines');
        this.graphserver.eventHandler = (ev) => this.onServerEvent(ev);
        this.machineserver.eventHandler = (ev) => this.onServerEvent(ev);
        this.messagingClient.subscribe(`${protocols_1.Topics.SERVICES_STREAMS_EVENTS}/#`);
        this.messagingClient.subscribe(`${protocols_1.Topics.SERVICES_AUTH_EVENTS}/#`);
        this.messagingClient.subscribe(`${protocols_1.Topics.SERVICES_PERSISTENCE_EVENTS}/#`);
        this.messagingClient.on('message', (topic, message) => {
            if (topic.startsWith(protocols_1.Topics.SERVICES_STREAMS_EVENTS)) {
                if (topic.endsWith('response') || topic.endsWith('functions')) {
                    return;
                }
                const streamEvent = JSON.parse(message.toString());
                if (streamEvent.type === 'response') {
                    return;
                }
                this.socketserver.globalContext
                    .getRequestContext(this.socketserver.globalContext, this.session)
                    .then((requestContext) => {
                    StreamWSProxy_1.StreamWSProxy.handleEvent(requestContext, this, streamEvent);
                });
                return;
            }
            let msg = message.toString();
            try {
                msg = JSON.parse(msg);
            }
            catch (err) {
                logger.error(msg);
            }
            this.onServerEvent(msg);
        });
        this.interceptor = null;
        ws.on('close', () => {
            logger.info('Closing WebSocket');
            this.close();
        });
        ws.on('error', (error) => {
            logger.error('WebSocket error');
            logger.error(error);
            this.close();
        });
        ws.on('message', async (message) => {
            try {
                const msg = JSON.parse(message.toString());
                if (msg.type === protocols_1.GatewayMessagingProtocol.MESSAGE_TYPES.CONFIRM_PROCESSED_MACHINE_STEP) {
                    this.machineserver.confirmMachineStep(msg.machineId);
                    this.clientsocket.send(JSON.stringify({
                        type: 'response',
                        requestId: msg.requestId || 0,
                        requestType: msg.type
                    }));
                }
                else if (msg.type !== 'ping') {
                    await this.updateConnectionState(ws);
                    msg.session = this.session;
                    if (msg.type === protocols_1.GatewayMessagingProtocol.MESSAGE_TYPES.USER_LOGOUT_MESSAGE_TYPE) {
                        this.socketserver.logoutUser({
                            user: this.user,
                            msg
                        });
                    }
                    else if (msg.topic && msg.topic.indexOf('stream') >= 0) {
                        StreamWSProxy_1.StreamWSProxy.handleRequest(await this.socketserver.globalContext.getRequestContext(this.socketserver.globalContext, this.session), this, msg);
                    }
                    else if (msg.topic && msg.topic.indexOf('persistence') >= 0) {
                        this.messagingClient.publish(msg.topic, msg);
                    }
                    else {
                        const response = await this.sendToServer(msg);
                        this.sendToClient(response);
                    }
                }
            }
            catch (err) {
                logger.warn(err);
            }
        });
        this.sendSessionToClient();
        this.sendServicesStatusToClient();
    }
    static get openConnections() {
        return OPEN_CONNECTIONS;
    }
    static create(ws, request, user, socketserver) {
        const connection = new ProxyConnection(ws, request, user, socketserver);
        ProxyConnection.openConnections.add(connection);
        return connection;
    }
    setUser(user) {
        this.user = user;
    }
    get session() {
        const { id, user } = this;
        return {
            id,
            user: {
                id: user ? user.id : 'anon',
                username: user ? user.username : 'anon',
                displayName: user ? [user.firstName, user.lastName].filter((e) => !!e).join(' ') || user.username : '',
                machineId: this.machineId
            }
        };
    }
    async updateConnectionState(ws) {
        if (ws) {
            try {
                const tokenUser = await utils_1.getUserFromWebsocketRequest(this.request, SocketServer_1.TOKENKEY, Auth_1.default.parseToken.bind(Auth_1.default));
                const user = await this.socketserver.globalContext.getActor(this.socketserver.globalContext, {
                    user: tokenUser
                });
                this.setUser(user);
                this.machineId = tokenUser.machineId;
            }
            catch (err) {
                logger.warn(err.name);
                this.user && this.socketserver.logoutUser({ user: this.user });
                this.clientsocket.close();
            }
        }
    }
    sendSessionToClient() {
        this.sendToClient({
            type: 'event',
            event: {
                type: protocols_1.GatewayMessagingProtocol.EVENTS.SESSION_INIT_EVENT,
                session: this.session
            }
        });
    }
    sendServicesStatusToClient() {
        this.sendToClient(this.socketserver.gatewayService.getServiceStatus('graphs'));
        this.sendToClient(this.socketserver.gatewayService.getServiceStatus('machines'));
    }
    onServerEvent(event) {
        switch (event.type) {
            case 'connect':
            case 'disconnect':
                logger.info(`${event.server}_${event.type}ed`);
                this.sendToClient({
                    type: 'event',
                    event: {
                        type: `${event.server}_${event.type}ed`
                    }
                });
                break;
            case 'event':
                this.sendToClient(event);
                break;
            case 'response':
                this.sendToClient(event);
                break;
            case 'message':
                this.sendToClient(event.data);
                break;
            case 'step':
                this.sendStepToClient(event.data);
                break;
            default:
        }
    }
    connectGraphServer() {
        logger.info('Connecting to graph service');
        return this.graphserver.connect();
    }
    connectMachineServer() {
        logger.info('Connecting to machine service');
        return this.machineserver.connect();
    }
    async createMessageContext(message) {
        message = typeof message === 'string' ? JSON.parse(message) : message;
        return {
            ...(await this.socketserver.globalContext.getRequestContext(this.socketserver.globalContext, this.session)),
            message,
            connection: this
        };
    }
    async sendToServer(message) {
        let context;
        const response = {
            type: 'response',
            requestId: message.requestId || 0,
            requestType: message.type
        };
        try {
            context = await this._beforeSendToServer(await this.createMessageContext(message));
        }
        catch (error) {
            return { ...response, machineserver: { error }, graphserver: { error } };
        }
        try {
            const machineServerResponse = await this._sendToMachineServer(context);
            response.machineserver = machineServerResponse && machineServerResponse.response;
        }
        catch (error) {
            logger.error(error);
            response.machineserver = {
                error: error.error || error
            };
        }
        try {
            const graphServerResponse = await this._sendToGraphServer(context);
            response.graphserver = graphServerResponse && graphServerResponse.response;
        }
        catch (error) {
            logger.error(error);
            response.graphserver = {
                error: error.error
            };
        }
        return response;
    }
    _beforeSendToServer(context) {
        return this.interceptor ? this.interceptor.beforeSendToServer(context) : Promise.resolve(context);
    }
    async _sendToGraphServer(context) {
        if (context.graphserver) {
            const graphServerResponse = await this.graphserver.send(context.message, context.message.requestId);
            if (graphServerResponse && graphServerResponse.requestType === 'command') {
                delete graphServerResponse.response.graph.graphdef;
            }
            return graphServerResponse;
        }
        return null;
    }
    _sendToMachineServer(context) {
        return !context.machineserver
            ? Promise.resolve()
            : this.machineserver.send(context.message, context.message.requestId);
    }
    async sendStepToClient(stepMessage) {
        if (!this.clientsocket || this.clientsocket.readyState !== ws_1.default.OPEN) {
            return;
        }
        this.socketserver.gatewayService.notifySendMessageToClient();
        this.clientsocket.send(stepMessage);
    }
    async sendToClient(message) {
        try {
            const ctxt = await this._beforeSendToClient(await this.createMessageContext(message));
            ctxt.message.session = this.session;
            this.clientsocket.send(JSON.stringify(ctxt.message));
        }
        catch (error) {
            logger.error('Failed to send message to client!', error);
        }
    }
    async _beforeSendToClient(context) {
        return new Promise((resolve) => {
            if (!this.clientsocket || this.clientsocket.readyState !== ws_1.default.OPEN) {
            }
            else {
                resolve(this.interceptor ? this.interceptor.beforeSendToClient(context) : context);
            }
        });
    }
    close() {
        this.socketserver.handleUserLeft(this.session);
        this.graphserver.disconnect();
        this.machineserver.disconnect();
        this.messagingClient.end();
        ProxyConnection.openConnections.delete(this);
        logger.info('closed & removed client connection...');
    }
}
exports.default = ProxyConnection;
//# sourceMappingURL=ProxyConnection.js.map
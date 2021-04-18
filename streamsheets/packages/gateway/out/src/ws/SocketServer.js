"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const protocols_1 = require("@cedalo/protocols");
const ws_1 = __importDefault(require("ws"));
const Auth_1 = __importDefault(require("../Auth"));
const utils_1 = require("../utils");
const logger_1 = __importDefault(require("../utils/logger"));
const GraphServerInterceptor_1 = __importDefault(require("./interceptors/GraphServerInterceptor"));
const InterceptorChain_1 = __importDefault(require("./interceptors/InterceptorChain"));
const MachineServerInterceptor_1 = __importDefault(require("./interceptors/MachineServerInterceptor"));
const ProxyConnection_1 = __importDefault(require("./ProxyConnection"));
const logger = logger_1.default.create({ name: 'SocketServer' });
const PATH = '/machineserver-proxy';
exports.TOKENKEY = 'authToken';
class SocketServer {
    constructor(gatewayService, httpServer) {
        this.wss = null;
        this.wssConfig = {
            clientTracking: true,
            path: PATH
        };
        this._gatewayService = gatewayService;
        this.globalContext = gatewayService.globalContext;
        this.wssConfig.server = httpServer;
        this.interceptorchain = new InterceptorChain_1.default();
        Object.values(this.globalContext.interceptors).forEach((i) => this.interceptorchain.add(i));
        this.interceptorchain.add(new GraphServerInterceptor_1.default());
        this.interceptorchain.add(new MachineServerInterceptor_1.default());
    }
    get gatewayService() {
        return this._gatewayService;
    }
    start() {
        if (!this.wss) {
            this.wss = new ws_1.default.Server(this.wssConfig);
            this.wss.on('error', (error) => {
                logger.error(error);
                this.close();
            });
            this.wss.on('connection', (ws, request) => {
                this.handleConnection(ws, request);
            });
        }
    }
    async handleConnection(ws, request) {
        try {
            let tokenUser = await utils_1.getUserFromWebsocketRequest(request, exports.TOKENKEY, Auth_1.default.parseToken.bind(Auth_1.default));
            try {
                const user = await this.globalContext.getActor(this.globalContext, { user: tokenUser });
                this.connectClient(ProxyConnection_1.default.create(ws, request, user, this));
                this.handleUserJoined(ws, user);
            }
            catch (error) {
                await ws.send(JSON.stringify({ error: 'NOT_AUTHENTICATED' }));
                ws.terminate();
            }
        }
        catch (err) {
            ws.terminate();
            logger.error('unable to connect to server', err);
        }
    }
    handleUserJoined(ws, user) {
        logger.info(`User joined ${user.username}#${user.id}`);
        if (this.shouldBroadcast(user)) {
            const message = {
                type: 'event',
                event: {
                    type: protocols_1.GatewayMessagingProtocol.EVENTS.USER_JOINED_EVENT,
                    user
                }
            };
            this.broadcastExceptForUser(message, user.id);
        }
    }
    logoutUser({ user }) {
        return this.findConnectionsByUser(user).forEach((c) => this.logoutConnection(c));
    }
    logoutConnection(connection) {
        const message = {
            type: 'event',
            event: {
                type: protocols_1.GatewayMessagingProtocol.EVENTS.USER_LEFT_EVENT,
                user: connection.session.user,
                sessionId: connection.session.id,
                logout: true
            }
        };
        connection.sendToClient(message);
        connection.close();
    }
    handleUserLeft(session) {
        logger.info(`User joined ${session.user.username}#${session.user.id}`);
        if (this.shouldBroadcast(session.user)) {
            const message = {
                type: 'event',
                event: {
                    type: protocols_1.GatewayMessagingProtocol.EVENTS.USER_LEFT_EVENT,
                    user: session.user,
                    sessionId: session.id
                }
            };
            this.broadcastExceptForUser(message, session.user.id);
        }
    }
    shouldBroadcast(user) {
        return user && user.id;
    }
    connectClient(client) {
        client.interceptor = this.interceptorchain;
        client.connectGraphServer().catch((error) => {
            logger.error('Graph service not available!');
            logger.error(error);
        });
        client.connectMachineServer().catch((error) => {
            logger.error('Machine service not available!');
            logger.error(error);
        });
    }
    findConnectionBySession(session) {
        return [...ProxyConnection_1.default.openConnections].find((connection) => connection.id === session.id);
    }
    findConnectionsByUser(user) {
        return [...ProxyConnection_1.default.openConnections].filter((connection) => connection.user && connection.user.id === user.id);
    }
    broadcast(message) {
        logger.info(`Broadcasting message '${message.event.type}' to all clients!`);
        ProxyConnection_1.default.openConnections.forEach((connection) => {
            connection.sendToClient(message);
        });
    }
    broadcastExceptForUser(message, userId) {
        logger.info(`Broadcasting message '${message.event.type}' to all clients expect user!`);
        ProxyConnection_1.default.openConnections.forEach((connection) => {
            if (connection.user && connection.user.id !== userId) {
                connection.sendToClient(message);
            }
        });
    }
    close() {
        if (this.wss) {
            this.wss.close();
            this.wss = null;
        }
    }
}
exports.SocketServer = SocketServer;
//# sourceMappingURL=SocketServer.js.map
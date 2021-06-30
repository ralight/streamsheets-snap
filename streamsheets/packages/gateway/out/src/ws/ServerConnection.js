"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const id_generator_1 = __importDefault(require("@cedalo/id-generator"));
const messaging_client_1 = require("@cedalo/messaging-client");
const protocols_1 = require("@cedalo/protocols");
const logger_1 = __importDefault(require("../utils/logger"));
const RedisConnection_1 = __importDefault(require("./RedisConnection"));
const logger = logger_1.default.create({ name: 'ServerConnection' });
const LOG_EV_HANDLER = (event) => logger.info(`${event.type}-event from server ${event.server}: ${event.data}`);
const deletePendingRequest = (requestId, requests) => {
    const request = requests.get(requestId);
    if (request) {
        request.timeoutId && clearTimeout(request.timeoutId);
        requests.delete(requestId);
    }
    return request;
};
const timeoutHandler = (requestId, requests) => {
    const pending = deletePendingRequest(requestId, requests);
    if (pending) {
        pending.reject({
            message: 'ServerConnection: Timeout'
        });
    }
};
class ServerConnection {
    constructor(type, serviceType, context = {}) {
        this.id = id_generator_1.default.generate();
        this.type = type;
        this.serviceType = serviceType;
        this.context = context;
        this.timeout = 500000;
        this._evHandler = null;
        this._pendingRequests = new Map();
        this.messagingClient = new messaging_client_1.MessagingClient();
        if (type === 'machineserver') {
            this._redisConnection = RedisConnection_1.default.connect();
            this.stepEventHandler = this.stepEventHandler.bind(this);
        }
        this.messagingClient.connect(process.env.MESSAGE_BROKER_URL || 'mqtt://localhost:1883');
    }
    set eventHandler(handler) {
        this._evHandler = handler;
    }
    get eventHandler() {
        return this._evHandler || LOG_EV_HANDLER;
    }
    confirmMachineStep(machineId) {
        if (this._redisConnection)
            this._redisConnection.confirmMachineStep(machineId);
    }
    stepEventHandler(stepEvent) {
        this.eventHandler({ type: 'step', server: this.type, data: stepEvent });
    }
    async connect() {
        if (this.type === 'machineserver') {
            this.messagingClient.subscribe(protocols_1.Topics.SERVICES_MACHINES_OUTPUT);
        }
        else if (this.type === 'graphserver') {
            this.messagingClient.subscribe(protocols_1.Topics.SERVICES_GRAPHS_OUTPUT);
        }
        this.messagingClient.on('message', (topic, message) => {
            this.handleMessage(message.toString(), topic);
        });
    }
    disconnect() {
        if (this._redisConnection) {
            const request = (machineId, type) => ({
                machineId,
                type
            });
            this._redisConnection.subscriptions.forEach((subscription) => {
                const { machineId } = subscription;
                this.send(request(machineId, 'machine_unsubscribe'), Math.random());
                this.send(request(machineId, 'graph_unsubscribe'), Math.random());
            });
            this._redisConnection.close();
        }
        this.messagingClient.end();
    }
    _handleTopicUnsubscribe(message) {
        switch (message.type) {
            case 'machine_unsubscribe':
                if (this._redisConnection) {
                    this._redisConnection.unsubscribe(message.machineId);
                }
                if (this.context.machineRouter)
                    this.context.machineRouter.handleMachineServiceInputMessage(message);
                this.messagingClient.unsubscribe(`${protocols_1.Topics.SERVICES_MACHINES_EVENTS}/${message.machineId}/#`);
                break;
            case 'graph_unsubscribe':
                this.messagingClient.unsubscribe(`${protocols_1.Topics.SERVICES_GRAPHS_EVENTS}/${message.machineId}`);
                break;
            default:
                break;
        }
    }
    _handleTopicSubscribe(message) {
        var _a;
        switch (message.requestType) {
            case 'machine_subscribe':
            case 'machine_load_subscribe':
                (_a = this._redisConnection) === null || _a === void 0 ? void 0 : _a.subscribe(message.response.machine.id, this.stepEventHandler);
                this.messagingClient.subscribe(`${protocols_1.Topics.SERVICES_MACHINES_EVENTS}/${message.response.machine.id}/#`);
                break;
            case 'graph_load_subscribe':
            case 'graph_subscribe':
                this.messagingClient.subscribe(`${protocols_1.Topics.SERVICES_GRAPHS_EVENTS}/${message.response.graph.machineId}`);
                break;
            default:
                break;
        }
    }
    async send(message, requestId) {
        message.sender = {
            id: this.id
        };
        this._handleTopicUnsubscribe(message);
        return new Promise((resolve, reject) => {
            if (requestId) {
                this._pendingRequests.set(requestId, { resolve, reject });
                const timeoutId = setTimeout(() => timeoutHandler(requestId, this._pendingRequests), this.timeout);
                this._pendingRequests.set(requestId, {
                    resolve,
                    reject,
                    timeoutId
                });
            }
            else {
                resolve();
            }
            logger.info(`Send message to ${this.type}: ${message.type}`);
            this.messagingClient.publish(`${protocols_1.Topics.BASE_TOPIC}/services/${this.serviceType}/input`, message);
        });
    }
    handleMessage(message, topic) {
        try {
            const parsedMessage = JSON.parse(message);
            const request = deletePendingRequest(parsedMessage.requestId, this._pendingRequests);
            if (request) {
                if (parsedMessage.type === 'response') {
                    this._handleTopicSubscribe(parsedMessage);
                    return request.resolve(parsedMessage);
                }
                return request.reject(parsedMessage);
            }
            if (parsedMessage.type === 'event') {
                const { event } = parsedMessage;
                if (event.type === 'streamsheet_step' || event.type === 'named_cells') {
                }
                else if (event.type === 'command') {
                    if (!this._requestTriggeredFromThisConnection(event.options)) {
                        return this.eventHandler({
                            type: 'message',
                            server: this.type,
                            data: message
                        });
                    }
                }
                else {
                    return this.eventHandler({
                        type: 'message',
                        server: this.type,
                        data: message
                    });
                }
            }
            else {
                return this.eventHandler({
                    type: 'message',
                    server: this.type,
                    data: message
                });
            }
        }
        catch (error) {
            console.error(error);
            console.log(message);
        }
    }
    _requestTriggeredFromThisConnection(options) {
        if (options && options.originalSender) {
            return options.originalSender.id === this.id;
        }
        return false;
    }
}
exports.default = ServerConnection;
//# sourceMappingURL=ServerConnection.js.map
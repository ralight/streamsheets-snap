"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const messaging_client_1 = require("@cedalo/messaging-client");
const protocols_1 = require("@cedalo/protocols");
const service_core_1 = require("@cedalo/service-core");
const { SERVICES_STREAMS_INPUT, SERVICES_STREAMS_EVENTS } = protocols_1.Topics;
const { STREAM_COMMAND_MESSAGE_TYPE, STREAM_CONFIG_SAVE, STREAMS_CONFIG_LOAD_ALL, STREAM_CONFIG_DELETE, STREAM_RELOAD, STREAM_CONFIG_LOAD, STREAM_CONFIG_LOAD_BY_NAME, STREAM_GET_PROVIDERS, STREAM_CONFIG_VALIDATE } = protocols_1.StreamsMessagingProtocol.MESSAGE_TYPES;
class StreamRepositoryProxy {
    constructor() {
        this.messagingClient = new messaging_client_1.MessagingClient();
        this.messagingClient.connect(process.env.MESSAGE_BROKER_URL || 'mqtt://localhost:1883');
        this.messagingClient.subscribe(`${SERVICES_STREAMS_EVENTS}/#`);
        this.requestHelper = new service_core_1.MessagingRequestHelper(this.messagingClient);
    }
    async findById(id) {
        const message = {
            type: STREAM_CONFIG_LOAD,
            requestId: Math.random(),
            configId: id
        };
        const { result } = await this.requestHelper.doRequestMessage({ message, topic: SERVICES_STREAMS_INPUT });
        return result;
    }
    async findByName(name) {
        const message = {
            type: STREAM_CONFIG_LOAD_BY_NAME,
            requestId: Math.random(),
            name
        };
        const { result } = await this.requestHelper.doRequestMessage({ message, topic: SERVICES_STREAMS_INPUT });
        return result;
    }
    async providers() {
        const message = {
            type: STREAM_GET_PROVIDERS,
            requestId: Math.random()
        };
        const { result } = await this.requestHelper.doRequestMessage({ message, topic: SERVICES_STREAMS_INPUT });
        return result;
    }
    async findAllStreams() {
        const message = {
            type: STREAMS_CONFIG_LOAD_ALL,
            requestId: Math.random()
        };
        const result = await this.requestHelper.doRequestMessage({ message, topic: SERVICES_STREAMS_INPUT });
        return Array.isArray(result.streams) ? result.streams : [];
    }
    async executeStreamCommand(cmd) {
        const message = {
            type: STREAM_COMMAND_MESSAGE_TYPE,
            requestId: Math.random(),
            cmd
        };
        const result = await this.requestHelper.doRequestMessage({ message, topic: SERVICES_STREAMS_INPUT });
        return result;
    }
    async deleteStream(id) {
        const message = {
            type: STREAM_CONFIG_DELETE,
            requestId: Math.random(),
            configId: id
        };
        const result = await this.requestHelper.doRequestMessage({ message, topic: SERVICES_STREAMS_INPUT });
        return result;
    }
    async saveStream(stream) {
        const message = {
            type: STREAM_CONFIG_SAVE,
            requestId: Math.random(),
            configuration: stream
        };
        const result = await this.requestHelper.doRequestMessage({ message, topic: SERVICES_STREAMS_INPUT });
        return result;
    }
    async validateStream(provider, streamType, config) {
        const message = {
            type: STREAM_CONFIG_VALIDATE,
            requestId: Math.random(),
            provider,
            streamType,
            configuration: config
        };
        const result = await this.requestHelper.doRequestMessage({ message, topic: SERVICES_STREAMS_INPUT });
        return result;
    }
    async reloadStreams(sources) {
        const message = {
            type: STREAM_RELOAD,
            requestId: Math.random(),
            sources
        };
        await this.requestHelper.doRequestMessage({ message, topic: SERVICES_STREAMS_INPUT });
    }
}
exports.StreamRepositoryProxy = StreamRepositoryProxy;
//# sourceMappingURL=StreamRepositoryProxy.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocols_1 = require("@cedalo/protocols");
const buildResponse = (request, response) => ({
    type: 'response',
    requestId: request.requestId,
    requestType: request.type,
    response
});
const buildErrorResponse = (request, error) => ({
    type: 'error',
    requestId: request.requestId,
    requestType: request.type,
    error
});
exports.StreamWSProxy = {
    handleEvent: async ({ api }, proxyConnection, event) => {
        try {
            const handledEvent = await api.stream.handleStreamEvent(event);
            if (handledEvent) {
                proxyConnection.onServerEvent(event);
            }
        }
        catch (e) {
        }
    },
    handleRequest: async (context, proxyConnection, message) => {
        switch (message.type) {
            case protocols_1.StreamsMessagingProtocol.MESSAGE_TYPES.STREAMS_CONFIG_LOAD_ALL: {
                try {
                    const streams = await context.api.stream.findAllStreams(message.scope);
                    proxyConnection.onServerEvent(buildResponse(message, { streams }));
                }
                catch (error) {
                    proxyConnection.onServerEvent(buildErrorResponse(message, error));
                }
                break;
            }
            case protocols_1.StreamsMessagingProtocol.MESSAGE_TYPES.STREAM_CONFIG_SAVE: {
                try {
                    const result = await context.api.stream.saveStream(message.scope, message.configuration);
                    proxyConnection.onServerEvent(buildResponse(message, result));
                }
                catch (error) {
                    proxyConnection.onServerEvent(buildErrorResponse(message, error));
                }
                break;
            }
            case protocols_1.StreamsMessagingProtocol.MESSAGE_TYPES.STREAM_RELOAD: {
                try {
                    await context.api.stream.reloadStreams(message.scope, message.sources || []);
                    proxyConnection.onServerEvent(buildResponse(message, {}));
                }
                catch (error) {
                    proxyConnection.onServerEvent(buildErrorResponse(message, error));
                }
                break;
            }
            case protocols_1.StreamsMessagingProtocol.MESSAGE_TYPES.STREAM_CONFIG_DELETE: {
                try {
                    const result = await context.api.stream.deleteStream(message.scope, message.configId);
                    proxyConnection.onServerEvent(buildResponse(message, result));
                }
                catch (error) {
                    proxyConnection.onServerEvent(buildErrorResponse(message, error));
                }
                break;
            }
            case protocols_1.StreamsMessagingProtocol.MESSAGE_TYPES.STREAM_COMMAND_MESSAGE_TYPE: {
                try {
                    const result = await context.api.stream.executeStreamCommand(message.scope, message.cmd);
                    proxyConnection.onServerEvent(buildResponse(message, result));
                }
                catch (error) {
                    proxyConnection.onServerEvent(buildErrorResponse(message, error));
                }
                break;
            }
            default: {
                console.log('UNVERIFIED STREAM MESSAGE', message.type);
            }
        }
    }
};
//# sourceMappingURL=StreamWSProxy.js.map
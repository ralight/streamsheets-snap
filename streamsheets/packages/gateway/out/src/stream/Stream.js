"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isConnector = (stream) => stream.className === 'ConnectorConfiguration';
exports.isProducer = (stream) => stream.className === 'ProducerConfiguration';
exports.isConsumer = (stream) => stream.className === 'ConsumerConfiguration';
exports.isSameType = (stream1, stream2) => stream1.className === stream2.className;
exports.setConnector = (stream, connectorId) => ({
    ...stream,
    connector: { ...stream.connector, id: connectorId, _id: connectorId }
});
//# sourceMappingURL=Stream.js.map
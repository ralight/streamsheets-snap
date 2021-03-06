"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const messaging_client_1 = require("@cedalo/messaging-client");
const protocols_1 = require("@cedalo/protocols");
const service_core_1 = require("@cedalo/service-core");
const { SERVICES_MACHINES_INPUT, SERVICES_MACHINES_OUTPUT } = protocols_1.Topics;
class MachineServiceProxy {
    constructor() {
        this.messagingClient = new messaging_client_1.MessagingClient();
        this.messagingClient.connect(process.env.MESSAGE_BROKER_URL || 'mqtt://localhost:1883');
        this.messagingClient.subscribe(`${SERVICES_MACHINES_OUTPUT}/#`);
        this.requestHelper = new service_core_1.MessagingRequestHelper(this.messagingClient);
    }
    async load(id) {
        const message = {
            type: 'machine_load',
            requestId: Math.random(),
            machineId: id
        };
        const result = await this.requestHelper.doRequestMessage({ message, topic: SERVICES_MACHINES_INPUT });
        return result;
    }
    async unload(id) {
        const message = {
            type: 'machine_unload',
            requestId: Math.random(),
            machineId: id
        };
        const result = await this.requestHelper.doRequestMessage({ message, topic: SERVICES_MACHINES_INPUT });
        return { unloaded: result.machine.unloaded };
    }
    async delete(id) {
        const message = {
            type: 'machine_delete',
            requestId: Math.random(),
            machineId: id
        };
        const result = await this.requestHelper.doRequestMessage({ message, topic: SERVICES_MACHINES_INPUT });
        return { deleted: result.machine.deleted };
    }
    async start(id) {
        const message = {
            type: 'machine_start',
            requestId: Math.random(),
            machineId: id
        };
        const result = await this.requestHelper.doRequestMessage({ message, topic: SERVICES_MACHINES_INPUT });
        return result;
    }
    async pause(id) {
        const message = {
            type: 'machine_pause',
            requestId: Math.random(),
            machineId: id
        };
        const result = await this.requestHelper.doRequestMessage({ message, topic: SERVICES_MACHINES_INPUT });
        return result;
    }
    async addInboxMessage(id, streamsheetId, inboxMessage, metadata) {
        const message = {
            type: 'add_inbox_message',
            requestId: Math.random(),
            machineId: id,
            streamsheetId,
            message: inboxMessage,
            metadata
        };
        const result = await this.requestHelper.doRequestMessage({ message, topic: SERVICES_MACHINES_INPUT });
        return result;
    }
    async updateExtensionSettings(id, extensionId, settings) {
        const message = {
            type: 'machine_update_extension_settings',
            requestId: Math.random(),
            machineId: id,
            extensionId,
            settings
        };
        const result = await this.requestHelper.doRequestMessage({ message, topic: SERVICES_MACHINES_INPUT });
        return result;
    }
}
exports.MachineServiceProxy = MachineServiceProxy;
//# sourceMappingURL=MachineServiceProxy.js.map
"use strict";
const { MessagingClient } = require('@cedalo/messaging-client');
const { Topics } = require('@cedalo/protocols');
const RoundRobinMap = require('./RoundRobinMap');
const { LoggerFactory } = require('@cedalo/logger');
const logger = LoggerFactory.createLogger('Machine Service - MessageRouter');
module.exports = class MachineServiceMessageRouter {
    constructor(gatewayService) {
        this._gatewayService = gatewayService;
        this._messagingClient = new MessagingClient();
        this._machineServices = new RoundRobinMap();
        this._machineServiceIterator = this._machineServices.iterator();
        this._machinesToMachineServices = new Map();
        this.messagingClient.connect(process.env.MESSAGE_BROKER_URL || 'mqtt://localhost:1883');
        this.messagingClient.subscribe(Topics.SERVICES_MACHINES_INPUT);
        this.messagingClient.subscribe(`${Topics.SERVICES_STATUS}/#`);
        this.messagingClient.on('message', (topic, message) => {
            this.handleMessage(topic, JSON.parse(message.toString()));
        });
    }
    handleMessage(topic, message) {
        if (topic.startsWith(`${Topics.SERVICES_STATUS}/`)) {
            if (topic.startsWith(`${Topics.SERVICES_STATUS}/machines`)) {
                this.handleMachineServiceUpdate(message);
            }
        }
        else {
            this.handleMachineServiceInputMessage(message);
        }
    }
    getMachineServiceIdForMachineId(machineId) {
        let machineServiceId = null;
        if (this._machinesToMachineServices.has(machineId)) {
            machineServiceId = this._machinesToMachineServices.get(machineId);
        }
        else {
            machineServiceId = this.getNextMachineService(machineId);
            if (machineServiceId) {
                this._machinesToMachineServices.set(machineId, machineServiceId);
            }
        }
        return machineServiceId;
    }
    getNextMachineService() {
        return this._machineServiceIterator.next().value;
    }
    handleMachineServiceUpdate(serviceInformation) {
        if (serviceInformation.status !== 'running') {
            this._machineServices.delete(serviceInformation.id);
            this._machineServiceIterator = this._machineServices.iterator();
            this._removeMachinesForMachineService(serviceInformation.id);
        }
        else {
            this._machineServices.set(serviceInformation.id, serviceInformation);
            this._machineServiceIterator = this._machineServices.iterator();
        }
    }
    _removeMachinesForMachineService(machineServiceIdToDelete) {
        for (const [machineId, machineServiceId] of this._machinesToMachineServices) {
            if (machineServiceId === machineServiceIdToDelete) {
                this._machinesToMachineServices.delete(machineId);
            }
        }
    }
    handleMachineServiceInputMessage(message) {
        if (message.machineId || message.machine) {
            const machineId = message.machineId || message.machine.id;
            if (machineId) {
                const machineServiceId = this.getMachineServiceIdForMachineId(machineId);
                this.messagingClient.publish(`${Topics.SERVICES_MACHINES_INPUT}/${machineServiceId}`, message);
            }
        }
        else {
            const machineServiceId = this.getNextMachineService();
            this.messagingClient.publish(`${Topics.SERVICES_MACHINES_INPUT}/${machineServiceId}`, message);
        }
        logger.debug(message);
    }
    get messagingClient() {
        return this._messagingClient;
    }
    get gatewayService() {
        return this._gatewayService;
    }
};
//# sourceMappingURL=MachineServiceMessageRouter.js.map
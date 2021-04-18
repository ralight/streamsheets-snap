"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("@cedalo/logger");
const logger = logger_1.LoggerFactory.createLogger('MachineApi', process.env.STREAMSHEETS_LOG_LEVEL || 'info');
exports.BaseMachineApi = {
    findMachine: async ({ machineRepo, auth }, scope, machineId) => {
        const validScope = auth.isValidScope(scope);
        if (!validScope) {
            return null;
        }
        try {
            const query = scope ? { 'scope.id': scope.id } : null;
            const machine = await machineRepo.findMachine(machineId, query);
            return machine;
        }
        catch (error) {
            if (error.code === 'MACHINE_NOT_FOUND') {
                return null;
            }
            throw error;
        }
    },
    findMachines: async ({ machineRepo, auth }, scope) => {
        const validScope = auth.isValidScope(scope);
        if (!validScope) {
            return [];
        }
        const query = scope ? { 'scope.id': scope.id } : null;
        const machines = await machineRepo.findMachines(query);
        return machines;
    },
    findMachinesByName: async ({ machineRepo, auth }, scope, name) => {
        const validScope = auth.isValidScope(scope);
        if (!validScope) {
            return [];
        }
        const query = scope ? { 'scope.id': scope.id, name } : null;
        const machines = await machineRepo.findMachines(query);
        return machines;
    },
    saveOrUpdate: async ({ machineRepo, repositories }, scope, machine, graph) => {
        await machineRepo.saveOrUpdateMachine(machine.id, { ...machine, scope });
        if (graph) {
            await repositories.graphRepository.saveOrUpdateGraph(graph.id, graph);
        }
    },
    delete: async ({ api, machineRepo, repositories }, scope, id) => {
        const machine = await api.machine.findMachine(scope, id);
        if (machine) {
            return Promise.all([machineRepo.deleteMachine(id), repositories.graphRepository.deleteGraphByMachineId(id)]);
        }
    },
    unload: async ({ machineServiceProxy, api }, scope, machineId) => {
        const machine = await api.machine.findMachine(scope, machineId);
        if (!machine) {
            return { unloaded: true };
        }
        const result = await machineServiceProxy.unload(machineId);
        return { unloaded: result.unloaded, state: machine.state };
    },
    load: async ({ machineServiceProxy, api }, scope, machineId) => {
        const machine = await api.machine.findMachine(scope, machineId);
        if (machine) {
            const result = await machineServiceProxy.load(machineId);
            return result;
        }
    },
    start: async ({ machineServiceProxy, api }, scope, machineId) => {
        const machine = await api.machine.findMachine(scope, machineId);
        if (machine) {
            const result = await machineServiceProxy.start(machineId);
            return result;
        }
    },
    pause: async ({ machineServiceProxy, api }, scope, machineId) => {
        const machine = await api.machine.findMachine(scope, machineId);
        if (machine) {
            const result = await machineServiceProxy.pause(machineId);
            return result;
        }
    }
};
//# sourceMappingURL=MachineApi.js.map
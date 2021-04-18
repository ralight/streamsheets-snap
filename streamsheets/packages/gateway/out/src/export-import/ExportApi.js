"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const filterRejected = (promises) => promises.reduce(async (pResults, p) => {
    const results = await pResults;
    try {
        const result = await p;
        return [...results, result];
    }
    catch (e) {
        return results;
    }
}, Promise.resolve([]));
const findMissingConnectors = (streamIds, streamsToExport) => Array.from(new Set(streamsToExport
    .map((stream) => stream.connector && stream.connector.id)
    .filter((id) => id && !streamIds.includes(id))));
const doExport = async ({ repositories, api }, scope, machines, streams) => {
    const { graphRepository } = repositories;
    const exportData = {
        version: 2,
        machines: [],
        streams: []
    };
    if (Array.isArray(machines) && machines.length > 0) {
        const pendingMachines = machines.map(async (machineId) => {
            const result = await Promise.all([
                api.machine.findMachine(scope, machineId),
                graphRepository.findGraphByMachineId(machineId)
            ]);
            if (!result[0]) {
                throw 'Missing machine';
            }
            return {
                machine: { ...result[0], state: 'stopped' },
                graph: result[1]
            };
        });
        exportData.machines = await filterRejected(pendingMachines);
    }
    if (Array.isArray(streams) && streams.length > 0) {
        const allStreams = await api.stream.findAllStreams(scope);
        const streamsToExport = allStreams.filter((s) => streams.includes(s.id));
        const missingConnectorIds = findMissingConnectors(streams, streamsToExport);
        const allStreamsToExport = [...streams, ...missingConnectorIds];
        exportData.streams = allStreams.filter((s) => allStreamsToExport.includes(s.id));
        exportData.streams.forEach((stream) => {
            delete stream.status;
        });
    }
    return exportData;
};
exports.ExportApi = {
    doExport
};
//# sourceMappingURL=ExportApi.js.map
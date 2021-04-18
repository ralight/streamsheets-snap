import { ID } from '../streamsheets';
import { Stream } from '../stream';
import { Machine } from '../machine';
export declare type MachineWithGraph = {
    machine: Machine;
    graph: {
        id: ID;
        machineId: ID;
        graphdef: any;
    };
};
export declare type ExportImportData = {
    version: 2;
    machines: Array<MachineWithGraph>;
    streams: Array<Stream>;
};

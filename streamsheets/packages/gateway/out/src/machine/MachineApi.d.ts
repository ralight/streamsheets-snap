import { RequestContext, Scope, ID } from '../streamsheets';
import { Machine, Graph } from './types';
export interface MachineApi {
    findMachine(scope: Scope, machineId: ID): Promise<Machine | null>;
    findMachines(scope: Scope): Promise<Machine[]>;
    findMachinesByName(scope: Scope, name: string): Promise<Machine[]>;
    delete(scope: Scope, id: ID): Promise<any>;
    load(scope: Scope, id: ID): Promise<any>;
    unload(scope: Scope, id: ID): Promise<any>;
    start(scope: Scope, id: ID): Promise<any>;
    pause(scope: Scope, id: ID): Promise<any>;
    saveOrUpdate(scope: Scope, machine: Machine, graph?: Graph): Promise<any>;
}
export declare const BaseMachineApi: {
    findMachine: ({ machineRepo, auth }: RequestContext, scope: Scope, machineId: string) => Promise<Machine | null>;
    findMachines: ({ machineRepo, auth }: RequestContext, scope: Scope) => Promise<Machine[]>;
    findMachinesByName: ({ machineRepo, auth }: RequestContext, scope: Scope, name: string) => Promise<Machine[]>;
    saveOrUpdate: ({ machineRepo, repositories }: RequestContext, scope: Scope, machine: Machine, graph?: Graph | undefined) => Promise<void>;
    delete: ({ api, machineRepo, repositories }: RequestContext, scope: Scope, id: string) => Promise<[any, any] | undefined>;
    unload: ({ machineServiceProxy, api }: RequestContext, scope: Scope, machineId: string) => Promise<{
        unloaded: boolean;
        state?: undefined;
    } | {
        unloaded: any;
        state: "running" | "stopped" | "paused";
    }>;
    load: ({ machineServiceProxy, api }: RequestContext, scope: Scope, machineId: string) => Promise<any>;
    start: ({ machineServiceProxy, api }: RequestContext, scope: Scope, machineId: string) => Promise<any>;
    pause: ({ machineServiceProxy, api }: RequestContext, scope: Scope, machineId: string) => Promise<any>;
};

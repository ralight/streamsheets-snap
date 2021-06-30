import { FunctionObject, FunctionObjectObject, PartialApply1All } from './common';
import { ExportApi, ImportApi } from './export-import';
import { BaseMachineApi, MachineApi } from './machine';
import { BaseStreamApi, StreamApi } from './stream';
import { GenericGlobalContext, GenericRequestContext } from './streamsheets';
import { BaseUserApi, UserApi } from './user';
export declare const createApi: <APIS extends FunctionObjectObject, AUTH extends FunctionObject, API extends FunctionObject>(context: GenericRequestContext<APIS, AUTH>, rawApi: API) => PartialApply1All<API>;
export interface Api {
    user: UserApi;
    machine: MachineApi;
    stream: StreamApi;
    export: PartialApply1All<typeof ExportApi>;
    import: PartialApply1All<typeof ImportApi>;
}
export interface RawAPI extends FunctionObjectObject {
    user: BaseUserApi;
    machine: typeof BaseMachineApi;
    stream: BaseStreamApi;
    export: typeof ExportApi;
    import: typeof ImportApi;
}
export declare const RawAPI: {
    user: {
        findUserBySession: ({ userRepo }: import("./streamsheets").RequestContext, session: import("./streamsheets").Session) => Promise<import("./user/UserRepository").UserFromRepo | null>;
        findUser: ({ userRepo }: import("./streamsheets").RequestContext, id: string) => Promise<import("./user/UserRepository").UserFromRepo | null>;
        findAllUsers: ({ userRepo }: import("./streamsheets").RequestContext) => Promise<import("./user/UserRepository").UserFromRepo[]>;
        createUser: ({ userRepo }: import("./streamsheets").RequestContext, user: import("./user").User & {
            password: string;
        }) => Promise<import("./user/UserRepository").UserFromRepo>;
        updateSettings: ({ userRepo }: import("./streamsheets").RequestContext, id: string, settingsUpdate: Partial<import("./user").UserSettings>) => Promise<import("./user/UserRepository").UserFromRepo>;
        updatePassword: ({ userRepo }: import("./streamsheets").RequestContext, id: string, password: string) => Promise<boolean>;
        deleteUser: ({ userRepo }: import("./streamsheets").RequestContext, id: string) => Promise<void>;
    };
    machine: {
        findMachine: ({ machineRepo, auth }: import("./streamsheets").RequestContext, scope: import("./streamsheets").Scope, machineId: string) => Promise<import("./machine").Machine | null>;
        findMachines: ({ machineRepo, auth }: import("./streamsheets").RequestContext, scope: import("./streamsheets").Scope) => Promise<import("./machine").Machine[]>;
        findMachinesByName: ({ machineRepo, auth }: import("./streamsheets").RequestContext, scope: import("./streamsheets").Scope, name: string) => Promise<import("./machine").Machine[]>;
        saveOrUpdate: ({ machineRepo, repositories }: import("./streamsheets").RequestContext, scope: import("./streamsheets").Scope, machine: import("./machine").Machine, graph?: import("./machine").Graph | undefined) => Promise<void>;
        delete: ({ machineServiceProxy, api }: import("./streamsheets").RequestContext, scope: import("./streamsheets").Scope, machineId: string) => Promise<{
            deleted: any;
        }>;
        unload: ({ machineServiceProxy, api }: import("./streamsheets").RequestContext, scope: import("./streamsheets").Scope, machineId: string) => Promise<{
            unloaded: boolean;
            state?: undefined;
        } | {
            unloaded: any;
            state: "running" | "stopped" | "paused";
        }>;
        load: ({ machineServiceProxy, api }: import("./streamsheets").RequestContext, scope: import("./streamsheets").Scope, machineId: string) => Promise<any>;
        start: ({ machineServiceProxy, api }: import("./streamsheets").RequestContext, scope: import("./streamsheets").Scope, machineId: string) => Promise<any>;
        pause: ({ machineServiceProxy, api }: import("./streamsheets").RequestContext, scope: import("./streamsheets").Scope, machineId: string) => Promise<any>;
    };
    stream: BaseStreamApi;
    export: {
        doExport: ({ repositories, api }: import("./streamsheets").RequestContext, scope: import("./streamsheets").Scope, machines: string[], streams: string[]) => Promise<import("./export-import/types").ExportImportData>;
    };
    import: {
        getImportInfo: ({ repositories }: import("./streamsheets").RequestContext, scope: import("./streamsheets").Scope, importInfo: import("./export-import").ImportInfo) => Promise<{
            machines: {
                id: string;
                nameInUse: boolean;
                proposedName: string;
            }[];
            streams: {
                id: string;
                nameInUse: boolean;
                proposedName: string;
            }[];
        }>;
        doImport: ({ repositories, api }: import("./streamsheets").RequestContext, scope: import("./streamsheets").Scope, importData: import("./export-import/types").ExportImportData, machineSelection?: import("./export-import").ImportSelection[], streamSelection?: import("./export-import").ImportSelection[]) => Promise<{
            machines: string[];
            streams: string[];
        }>;
    };
};
export declare const glue: <AUTH extends FunctionObject, APIS extends FunctionObjectObject, T extends GenericGlobalContext<APIS, AUTH>>(globalContext: T, actor: import("./user").User) => GenericRequestContext<APIS, AUTH>;

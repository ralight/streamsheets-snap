export namespace resolvers {
    export const ScopedQuery: {
        machine: (obj: any, args: any, { api }: {
            api: any;
        }) => Promise<any>;
        machines: (obj: any, args: any, { api }: {
            api: any;
        }) => Promise<any>;
        streamsLegacy: (obj: any, args: any, { api }: {
            api: any;
        }) => Promise<any>;
        streams: (obj: any, args: any, { api }: {
            api: any;
        }) => Promise<any>;
        connectors: (obj: any, args: any, { api }: {
            api: any;
        }) => Promise<any>;
        export: (obj: any, args: any, { api }: {
            api: any;
        }) => Promise<{
            data: any;
            success: boolean;
            code: string;
            message: string;
        }>;
        getImportInfo: ({ scope }: {
            scope: any;
        }, { input }: {
            input: any;
        }, { api }: {
            api: any;
        }) => Promise<any>;
        providers: ({ scope }: {
            scope: any;
        }, args: any, { api }: {
            api: any;
        }) => Promise<any>;
    };
    export namespace Query {
        export function me(obj: any, args: any, { actor }: {
            actor: any;
        }): Promise<any>;
        export function user(obj: any, { id }: {
            id: any;
        }, { api }: {
            api: any;
        }): Promise<any>;
        export function users(obj: any, args: any, { api }: {
            api: any;
        }): Promise<any>;
        export function scoped(obj: any, args: any, { auth }: {
            auth: any;
        }): Promise<{
            scope: any;
        }>;
        export function scopedByMachine(obj: any, args: any, { machineRepo, auth }: {
            machineRepo: any;
            auth: any;
        }): Promise<{
            scope: any;
        }>;
        export function validateStream(obj: any, args: any, { api }: {
            api: any;
        }): Promise<any>;
    }
    export namespace Mutation {
        export function createUser(obj: any, { user }: {
            user: any;
        }, { api, encryption }: {
            api: any;
            encryption: any;
        }): Promise<any>;
        export function updateUserPassword(obj: any, { id, newPassword }: {
            id: any;
            newPassword: any;
        }, { api, encryption }: {
            api: any;
            encryption: any;
        }): Promise<any>;
        export function updateUserSettings(obj: any, { id, settings }: {
            id: any;
            settings: any;
        }, { api }: {
            api: any;
        }): Promise<any>;
        export function deleteUser(obj: any, { id }: {
            id: any;
        }, { api }: {
            api: any;
        }): Promise<any>;
        export function scoped_1(obj: any, args: any, { auth }: {
            auth: any;
        }): Promise<{
            scope: any;
        }>;
        export { scoped_1 as scoped };
        export function scopedByMachine_1(obj: any, args: any, { machineRepo, auth }: {
            machineRepo: any;
            auth: any;
        }): Promise<{
            scope: any;
        }>;
        export { scopedByMachine_1 as scopedByMachine };
        export function renameMachineFile(obj: any, args: any, { machineRepo, auth }: {
            machineRepo: any;
            auth: any;
        }): Promise<any>;
        export function deleteMachineFile(obj: any, args: any, { machineRepo, auth }: {
            machineRepo: any;
            auth: any;
        }): Promise<any>;
        export function deleteMachineFiles(obj: any, args: any, { machineRepo, auth }: {
            machineRepo: any;
            auth: any;
        }): Promise<any>;
    }
    export const ScopedMutation: {
        import: ({ scope }: {
            scope: any;
        }, { input, file }: {
            input: any;
            file: any;
        }, { api }: {
            api: any;
        }) => Promise<any>;
        cloneMachine: ({ scope }: {
            scope: any;
        }, { machineId, newName }: {
            machineId: any;
            newName: any;
        }, { api }: {
            api: any;
        }) => Promise<any>;
        deleteMachine: ({ scope }: {
            scope: any;
        }, { machineId }: {
            machineId: any;
        }, { api }: {
            api: any;
        }) => Promise<any>;
    };
    export namespace Inbox {
        export function stream(obj: any, args: any, context: any, info: any): Promise<{
            id: any;
            name: any;
            disabled: any;
            lastModified: any;
            owner: any;
            className: any;
        } | null>;
    }
    export namespace User {
        export function scope(): {
            id: string;
            name: string;
            rights: string[];
        };
        export function scopes(): {
            id: string;
            name: string;
            rights: string[];
        }[];
        export function rights(): string[];
        export function displayName(user: any): any;
        export function admin(): boolean;
        export function canDelete(user: any): boolean;
    }
    export namespace Machine {
        export function file(obj: any, args: any): Promise<string | null>;
        export function files(obj: any): Promise<{
            name: string;
            lastModified: string;
            path: string;
        }[]>;
        export function referencedStreams(obj: any): Promise<any>;
        export function canEdit(): Promise<boolean>;
    }
    export namespace MachineMetadata {
        export function lastModified(obj: any): number;
    }
    export { GraphQLJSONObject as ImportExportData };
    export { GraphQLJSONObject as JSON };
}
declare const GraphQLJSONObject: any;
export {};

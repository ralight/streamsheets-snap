export class GraphQLServer {
    static init(app: any, path: any, getContext: any, extension?: {}): import("apollo-server-express").ApolloServer;
}
export const typeDefs: import("graphql").DocumentNode;
export const resolvers: {
    ScopedQuery: {
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
    Query: {
        me: (obj: any, args: any, { actor }: {
            actor: any;
        }) => Promise<any>;
        user: (obj: any, { id }: {
            id: any;
        }, { api }: {
            api: any;
        }) => Promise<any>;
        users: (obj: any, args: any, { api }: {
            api: any;
        }) => Promise<any>;
        scoped: (obj: any, args: any, { auth }: {
            auth: any;
        }) => Promise<{
            scope: any;
        }>;
        scopedByMachine: (obj: any, args: any, { machineRepo, auth }: {
            machineRepo: any;
            auth: any;
        }) => Promise<{
            scope: any;
        }>;
        validateStream: (obj: any, args: any, { api }: {
            api: any;
        }) => Promise<any>;
    };
    Mutation: {
        createUser: (obj: any, { user }: {
            user: any;
        }, { api, encryption }: {
            api: any;
            encryption: any;
        }) => Promise<any>;
        updateUserPassword: (obj: any, { id, newPassword }: {
            id: any;
            newPassword: any;
        }, { api, encryption }: {
            api: any;
            encryption: any;
        }) => Promise<any>;
        updateUserSettings: (obj: any, { id, settings }: {
            id: any;
            settings: any;
        }, { api }: {
            api: any;
        }) => Promise<any>;
        deleteUser: (obj: any, { id }: {
            id: any;
        }, { api }: {
            api: any;
        }) => Promise<any>;
        scoped: (obj: any, args: any, { auth }: {
            auth: any;
        }) => Promise<{
            scope: any;
        }>;
        scopedByMachine: (obj: any, args: any, { machineRepo, auth }: {
            machineRepo: any;
            auth: any;
        }) => Promise<{
            scope: any;
        }>;
        renameMachineFile: (obj: any, args: any, { machineRepo, auth }: {
            machineRepo: any;
            auth: any;
        }) => Promise<any>;
        deleteMachineFile: (obj: any, args: any, { machineRepo, auth }: {
            machineRepo: any;
            auth: any;
        }) => Promise<any>;
        deleteMachineFiles: (obj: any, args: any, { machineRepo, auth }: {
            machineRepo: any;
            auth: any;
        }) => Promise<any>;
    };
    ScopedMutation: {
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
    Inbox: {
        stream: (obj: any, args: any, context: any, info: any) => Promise<{
            id: any;
            name: any;
            disabled: any;
            lastModified: any;
            owner: any;
            className: any;
        } | null>;
    };
    User: {
        scope: () => {
            id: string;
            name: string;
            rights: string[];
        };
        scopes: () => {
            id: string;
            name: string;
            rights: string[];
        }[];
        rights: () => string[];
        displayName: (user: any) => any;
        admin: () => boolean;
        canDelete: (user: any) => boolean;
    };
    Machine: {
        file: (obj: any, args: any) => Promise<string | null>;
        files: (obj: any) => Promise<{
            name: string;
            lastModified: string;
            path: string;
        }[]>;
        referencedStreams: (obj: any) => Promise<any>;
        canEdit: () => Promise<boolean>;
    };
    MachineMetadata: {
        lastModified: (obj: any) => number;
    };
    ImportExportData: any;
    JSON: any;
};

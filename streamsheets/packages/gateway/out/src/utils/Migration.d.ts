export = Migration;
declare class Migration {
    constructor(db: any);
    db: any;
    migrateCollections(): Promise<void>;
    migrateStreams(): Promise<void>;
    migrateMachines(): Promise<[any, any, any, any, any, any, any, any, any, any]>;
    migrateUsers(): Promise<void>;
    migrateUser(user: any): {
        _id: string;
        username: any;
        email: any;
        firstName: any;
        lastName: any;
        password: any;
        lastModified: any;
        settings: {
            locale: any;
        };
    };
    migrateConnectorsAndStreams(configs: any): any[];
    migrateMachine(m: any): any;
    updateDocument(collection: any, docId: any, update: any): any;
    getDocuments(collection: any, filter?: {}, projection?: {}, sortCriteria?: {}): any;
    getExistingCollections(): Promise<any>;
}

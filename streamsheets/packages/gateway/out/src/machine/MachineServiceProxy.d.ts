import { ID } from '../streamsheets';
export declare class MachineServiceProxy {
    private messagingClient;
    private requestHelper;
    constructor();
    load(id: ID): Promise<any>;
    unload(id: ID): Promise<{
        unloaded: any;
    }>;
    delete(id: ID): Promise<{
        deleted: any;
    }>;
    start(id: ID): Promise<any>;
    pause(id: ID): Promise<any>;
    addInboxMessage(id: ID, streamsheetId: ID, inboxMessage: any, metadata: object): Promise<any>;
    updateExtensionSettings(id: ID, extensionId: string, settings: object): Promise<any>;
}

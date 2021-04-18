import { ID } from '../streamsheets';
export declare class MachineServiceProxy {
    private messagingClient;
    private requestHelper;
    constructor();
    load(id: ID): Promise<any>;
    unload(id: ID): Promise<{
        unloaded: any;
    }>;
    start(id: ID): Promise<any>;
    pause(id: ID): Promise<any>;
}

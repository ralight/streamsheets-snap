import { Stream, StreamCommandRequest } from './types';
import { ID } from '../streamsheets';
export interface StreamValidationResult {
    valid: boolean;
    fieldErrors: {
        [key: string]: string;
    };
    fieldUpdates: {
        [key: string]: string;
    };
}
export declare class StreamRepositoryProxy {
    private messagingClient;
    private requestHelper;
    constructor();
    findById(id: ID): Promise<any>;
    findByName(name: string): Promise<any>;
    providers(): Promise<any>;
    findAllStreams(): Promise<any>;
    executeStreamCommand(cmd: StreamCommandRequest['cmd']): Promise<any>;
    deleteStream(id: ID): Promise<any>;
    saveStream(stream: Stream): Promise<any>;
    validateStream(provider: string, streamType: string, config: object): Promise<StreamValidationResult>;
    reloadStreams(sources: Array<ID>): Promise<void>;
}

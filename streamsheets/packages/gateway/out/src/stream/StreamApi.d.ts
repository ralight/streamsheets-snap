import { FunctionObject, PartialApply1All } from '../common';
import { ID, RequestContext, Scope } from '../streamsheets';
import { Stream, StreamCommandRequest } from './types';
import { StreamValidationResult } from './StreamRepositoryProxy';
export interface StreamApi extends FunctionObject {
    findById(context: RequestContext, scope: Scope, id: ID): Promise<Stream | null>;
    findByName(context: RequestContext, scope: Scope, name: string): Promise<Stream | null>;
    findAllStreams(context: RequestContext, scope: Scope): Promise<Array<Stream>>;
    executeStreamCommand(context: RequestContext, scope: Scope, command: StreamCommandRequest['cmd']): Promise<any>;
    saveStream(context: RequestContext, scope: Scope, stream: Stream): Promise<any>;
    deleteStream(context: RequestContext, scope: Scope, id: ID): Promise<any>;
    reloadStreams(context: RequestContext, scope: Scope, streams: ID[]): Promise<any>;
    handleStreamEvent(context: RequestContext, event: any): Promise<any | null>;
    validateStream(context: RequestContext, provider: string, type: string, config: object): Promise<StreamValidationResult>;
}
export declare type StreamApiApplied = PartialApply1All<StreamApi>;
export declare const StreamApi: StreamApi;

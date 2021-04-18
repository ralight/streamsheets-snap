import { StreamWSRequest } from '../stream/types';
import { RequestContext } from '../streamsheets';
import ProxyConnection from './ProxyConnection';
export declare const StreamWSProxy: {
    handleEvent: ({ api }: RequestContext, proxyConnection: ProxyConnection, event: any) => Promise<void>;
    handleRequest: (context: RequestContext, proxyConnection: ProxyConnection, message: StreamWSRequest) => Promise<void>;
};

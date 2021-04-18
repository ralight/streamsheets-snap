import { Stream } from './types';
export declare const isConnector: (stream: Stream) => boolean;
export declare const isProducer: (stream: Stream) => boolean;
export declare const isConsumer: (stream: Stream) => boolean;
export declare const isSameType: (stream1: Stream, stream2: Stream) => boolean;
export declare const setConnector: (stream: Stream, connectorId: string) => {
    connector: {
        id: string;
        _id: string;
    } | {
        id: string;
        _id: string;
    };
    id: string;
    name: string;
    className: string;
    scope?: import("../streamsheets").Scope | undefined;
    status?: string | undefined;
    providerId?: string | undefined;
    provider?: {
        id: string;
    } | undefined;
};

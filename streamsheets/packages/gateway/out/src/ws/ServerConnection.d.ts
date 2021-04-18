import { ServiceResponse, WSRequest } from '../streamsheets';
export default class ServerConnection {
    private id;
    private type;
    private serviceType;
    private timeout;
    private _pendingRequests;
    private messagingClient;
    private _redisConnection?;
    private _evHandler;
    constructor(type: string, serviceType: string);
    set eventHandler(handler: (event: import("../streamsheets").EventData) => any);
    get eventHandler(): (event: import("../streamsheets").EventData) => any;
    confirmMachineStep(machineId: string): void;
    stepEventHandler(stepEvent: string | object): void;
    connect(): Promise<void>;
    disconnect(): void;
    _handleTopicUnsubscribe(message: WSRequest): void;
    _handleTopicSubscribe(message: ServiceResponse): void;
    send(message: WSRequest, requestId?: number): Promise<ServiceResponse>;
    handleMessage(message: string, topic: string): any;
    _requestTriggeredFromThisConnection(options: any): boolean;
}

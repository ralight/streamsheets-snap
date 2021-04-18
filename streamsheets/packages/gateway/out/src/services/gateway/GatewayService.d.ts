/// <reference types="node" />
export = GatewayService;
declare class GatewayService {
    constructor(metadata: any, globalContext: any);
    globalContext: any;
    machineRouter: import("./MachineServiceMessageRouter");
    _services: Map<any, any>;
    _licenseInfo: {};
    configRepo: any;
    prepareJWT(): Promise<void>;
    _preStart(): Promise<void>;
    _doStart(): Promise<void>;
    restServer: import("http").Server | undefined;
    socketServer: import("../../ws/SocketServer").SocketServer | undefined;
    _postStart(): Promise<void>;
    notifySendMessageToClient(): void;
    _updateServices(serviceName: any, serviceInformation: any): void;
    get services(): {};
    getMetaInfo(): {
        services: {};
        licenseInfo: {};
    };
    getServiceStatus(service: any): {};
    getServicesByType(type: any): any;
    convertToEvent(service: any, message: any): {
        type: string;
        event: {
            type: string;
            service: any;
        };
    };
    broadcastEvent(service: any, message: any): void;
    _getKeepAliveTopic(): any;
    _getKeepAliveMessage(): {
        type: string;
        server: string;
    };
}

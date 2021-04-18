export = GraphServerInterceptor;
declare const GraphServerInterceptor_base: {
    new (): import("./Interceptor");
};
declare class GraphServerInterceptor extends GraphServerInterceptor_base {
    beforeSendToClient(context: any): any;
    _handleServerEvent(context: any): any;
    _handleMachineServerResponse(context: any): Promise<any>;
    interceptBeforeSendToServer(message: any): boolean;
    beforeSendToServer(context: any): Promise<any>;
    preloadGraph(context: any): Promise<any>;
}

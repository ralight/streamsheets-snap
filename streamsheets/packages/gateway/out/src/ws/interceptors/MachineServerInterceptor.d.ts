export = MachineServerInterceptor;
declare const MachineServerInterceptor_base: {
    new (): import("./Interceptor");
};
declare class MachineServerInterceptor extends MachineServerInterceptor_base {
    beforeSendToClient(context: any): Promise<any>;
    beforeSendToServer(context: any): Promise<any>;
    interceptBeforeSendToServer(message: any): boolean;
    _handleServerResponse(context: any): Promise<any>;
}

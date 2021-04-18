export = InterceptorChain;
declare const InterceptorChain_base: {
    new (): import("./Interceptor");
};
declare class InterceptorChain extends InterceptorChain_base {
    interceptors: any[];
    add(interceptor: any): void;
    start(interceptors: any, context: any): Promise<any>;
    beforeSendToClient(context: any): any;
    beforeSendToServer(context: any): any;
}

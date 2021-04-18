export = DefaultApp;
declare class DefaultApp {
    constructor(pkg: any, config: any, globalContext: any);
    app: any;
    config: any;
    globalContext: any;
    db: any;
    installMiddlewares(): Promise<void>;
    start(): Promise<any>;
}

export = AuthRoutes;
declare class AuthRoutes {
    static logout(request: any): Promise<void>;
    static login(request: any, response: any, next: any): Promise<void>;
    static pathLogin(request: any, response: any, next: any): Promise<void>;
}

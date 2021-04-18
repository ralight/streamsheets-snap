export = UserPersistence;
declare class UserPersistence {
    constructor(userRepo: any);
    _userRepo: any;
    handleRequest(message: any, context: any): Promise<any>;
    handleServerResponse(response: any, context: any): Promise<any>;
    hasInterestOn(message: any): boolean;
}

export = Error;
declare class Error {
    static logger(error: any, request: any, response: any, next: any): void;
    static renderer(error: any, request: any, response: any, next: any): void;
}

export = APIRouter;
declare class APIRouter {
    static noopOptions(request: any, response: any): void;
    static defaultOptions(): {
        caseSensitive: boolean;
        strict: boolean;
    };
    constructor(opts?: {
        caseSensitive: boolean;
        strict: boolean;
    });
}

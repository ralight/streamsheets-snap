export function conflict(message: any, fieldErrors: any): {
    message: any;
    code: string;
    fieldErrors: any;
    own: boolean;
};
export function notFound(message: any, code: any): {
    message: any;
    code: any;
    own: boolean;
};
export function invalid(message: any, fieldErrors: any): {
    message: any;
    code: string;
    fieldErrors: any;
    own: boolean;
};

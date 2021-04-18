export const AuthError: {
    notAllowed: (message: any) => {
        message: any;
        code: string;
        own: boolean;
    };
};
export const ErrorCodes: {
    USERNAME_IN_USE: string;
    EMAIL_IN_USE: string;
    USER_NOT_FOUND: string;
    USERNAME_INVALID: string;
    EMAIL_INVALID: string;
    PASSWORD_INVALID: string;
    LOCALE_INVALID: string;
    NOT_ALLOWED: string;
    CONFLICT: string;
    INVALID: string;
};
export const InputError: {
    conflict: (message: any, fieldErrors: any) => {
        message: any;
        code: string;
        fieldErrors: any;
        own: boolean;
    };
    notFound: (message: any, code: any) => {
        message: any;
        code: any;
        own: boolean;
    };
    invalid: (message: any, fieldErrors: any) => {
        message: any;
        code: string;
        fieldErrors: any;
        own: boolean;
    };
};
export const InternalError: {
    unexpected: (error: any) => any;
    isInternal: (error: any) => boolean;
    catchUnexpected: (func: any) => (...args: any[]) => Promise<any>;
};
export const MongoError: {
    isConflict: (error: any) => boolean;
};

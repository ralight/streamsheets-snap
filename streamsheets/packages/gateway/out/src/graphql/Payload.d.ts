export interface Payload {
    code: string;
    success: boolean;
    message: string;
    [key: string]: any;
}
export declare const Payload: {
    createFailure: (error: any) => any;
    createSuccess: (payload: Partial<Payload>) => {
        success: boolean;
        code?: string | undefined;
        message?: string | undefined;
    };
};

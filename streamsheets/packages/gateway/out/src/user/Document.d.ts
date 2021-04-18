export declare const touch: <T extends object>(document: T) => T & {
    lastModified: string;
};
export declare const customGenerateId: <T extends any>(document: T, idGenerator: () => string) => T & {
    _id: string;
};
export declare const makeGenerateId: <T extends any>(idGenerator: () => string) => (document: T) => T & {
    _id: string;
};
export declare const generateId: <T extends any>(document: T) => T & {
    _id: string;
};
export declare const applyUpdate: (document: object, partial: object) => any;

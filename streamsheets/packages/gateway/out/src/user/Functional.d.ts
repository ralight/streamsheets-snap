import { PartialApply1, MergeParams, PartialApply1All, ParamTypeAt, PartialApply2, PartialApply3 } from "../common";
export declare function partialApply1<F extends (arg1: any, ...args: any) => any>(f: F, arg1: Parameters<F>[0]): PartialApply1<F>;
export declare function partialApply1All<T extends {
    [key: string]: (...args: any) => any;
}>(object: T, arg1: MergeParams<ParamTypeAt<T, 0>>): PartialApply1All<T>;
export declare function partialApply2<F extends (arg1: any, arg2: any, ...args: any) => any>(f: F, arg1: Parameters<F>[0], arg2: Parameters<F>[1]): PartialApply2<F>;
export declare function partialApply3<F extends (arg1: any, arg2: any, arg3: any, ...args: any) => any>(f: F, arg1: Parameters<F>[0], arg2: Parameters<F>[1], arg3: Parameters<F>[2]): PartialApply3<F>;

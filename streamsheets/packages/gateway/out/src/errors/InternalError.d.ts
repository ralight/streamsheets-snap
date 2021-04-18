export function unexpected(error: any): any;
export function isInternal(error: any): boolean;
export function catchUnexpected(func: any): (...args: any[]) => Promise<any>;

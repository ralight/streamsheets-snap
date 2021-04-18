import { User } from './user';
import express from 'express';
import { GlobalContext } from '..';
declare class Auth {
    private jwtOptions;
    set jwtSecret(secret: string);
    initialize(context: GlobalContext): express.Handler;
    getToken(payload: object): string;
    parseToken(token: string): Promise<User>;
}
declare const _default: Auth;
export default _default;

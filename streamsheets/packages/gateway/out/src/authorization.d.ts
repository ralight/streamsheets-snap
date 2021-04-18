import { FunctionObject, PartialApply1All, FunctionObjectObject } from './common';
import { GenericRequestContext, RequestContext, Scope } from './streamsheets';
import { User } from './user';
export interface BaseAuth extends FunctionObject, UserAuth {
}
export interface Authorization {
    isAdmin(user: User): boolean;
    isValidScope(scope: Scope): boolean;
    isInScope(scope: Scope, withScope: {
        scope?: Scope;
    }): boolean;
}
export declare const createAuthorization: <APIS extends FunctionObjectObject, AUTH extends FunctionObject>(rawAuth: AUTH, context: GenericRequestContext<APIS, AUTH>) => PartialApply1All<AUTH>;
export declare const UserAuth: {
    isAdmin: (context: RequestContext, user: User) => boolean;
    isValidScope: ({ actor, auth }: RequestContext, scope: Scope) => boolean;
    isInScope: (context: RequestContext, scope: Scope, withScope: {
        scope?: Scope | undefined;
    }) => boolean;
};
export declare const baseAuth: BaseAuth;
export declare type UserAuth = typeof UserAuth;

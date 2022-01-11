import { PartialApply1All } from '../common';
import { RequestContext, Session } from '../streamsheets';
import { User, UserSettings } from './types';
export declare type UserApiApplied = PartialApply1All<UserApi>;
export declare type UserApi = typeof UserApi;
export declare const UserApi: {
    findUserBySession: ({ userRepo }: RequestContext, session: Session) => Promise<import("./UserRepository").UserFromRepo | null>;
    findUser: ({ userRepo }: RequestContext, id: string) => Promise<import("./UserRepository").UserFromRepo | null>;
    findAllUsers: ({ userRepo }: RequestContext) => Promise<import("./UserRepository").UserFromRepo[]>;
    createUser: ({ userRepo }: RequestContext, user: User & {
        password: string;
    }) => Promise<import("./UserRepository").UserFromRepo>;
    updateSettings: ({ userRepo }: RequestContext, id: string, settingsUpdate: Partial<UserSettings>) => Promise<import("./UserRepository").UserFromRepo>;
    updatePassword: ({ userRepo }: RequestContext, id: string, password: string) => Promise<boolean>;
    setHadAppTour: ({ userRepo }: RequestContext, id: string) => Promise<import("./UserRepository").UserFromRepo>;
    deleteUser: ({ userRepo }: RequestContext, id: string) => Promise<void>;
};

import { ID, PropType, User, UserSettings } from '@cedalo/gateway';
import { Collection } from 'mongodb';
export interface NewUser extends User {
    password: string;
}
export declare type UserFromRepo = Required<Pick<User, 'settings' | 'lastModified'>> & User;
export interface UserRepository {
    findUser(id: ID): Promise<UserFromRepo | null>;
    findUserByUsername(username: string): Promise<UserFromRepo | null>;
    findAllUsers(): Promise<Array<UserFromRepo>>;
    createUser(user: User & {
        password: string;
    }): Promise<UserFromRepo>;
    deleteUser(id: ID): Promise<boolean>;
    getPassword(username: string): Promise<string>;
    updatePassword(id: ID, password: string): Promise<boolean>;
    updateSettings(id: ID, settingsUpdate: Partial<UserSettings>): Promise<UserFromRepo>;
}
declare type InternalUser = Omit<UserFromRepo, 'id' | 'settings'> & {
    _id: PropType<UserFromRepo, 'id'>;
    password: string;
    settings: InternalSettings;
};
declare type InternalSettings = UserSettings;
declare type UserCollection = Collection<InternalUser>;
export declare const createUserRepository: (collection: UserCollection) => UserRepository;
export {};

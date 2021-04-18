"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gateway_1 = require("@cedalo/gateway");
function toExternal(user) {
    if (!user) {
        return null;
    }
    const { _id, password, ...copy } = { ...user, id: user._id };
    return copy;
}
const toInternalSettings = (settings) => {
    const internal = {};
    if (settings.locale !== undefined) {
        internal.locale = settings.locale;
    }
    return internal;
};
const toInternal = (user) => {
    const internal = {};
    if (user.id !== undefined) {
        internal._id = user.id;
    }
    if (user.username !== undefined) {
        internal.username = user.username;
    }
    if (user.password !== undefined) {
        internal.password = user.password;
    }
    if (user.settings !== undefined) {
        internal.settings = toInternalSettings(user.settings);
    }
    return internal;
};
const validateSettings_ = (settings) => {
    const { locale } = settings;
    const errors = {
        locale: !['en', 'de'].includes(locale) ? gateway_1.ErrorCodes.LOCALE_INVALID : undefined
    };
    return Object.values(errors).filter((error) => !!error).length > 0 ? errors : undefined;
};
const validateSettings = (settings) => {
    const errors = validateSettings_(settings);
    if (errors) {
        throw gateway_1.InputError.invalid('Invalid settings', errors);
    }
    return settings;
};
const validate = (user) => {
    const { username, password } = user;
    const errors = {
        username: !username ? gateway_1.ErrorCodes.USERNAME_INVALID : undefined,
        password: !password ? gateway_1.ErrorCodes.PASSWORD_INVALID : undefined,
        settings: validateSettings_(user.settings)
    };
    if (Object.values(errors).filter((error) => !!error).length > 0) {
        throw gateway_1.InputError.invalid('Invalid user', errors);
    }
    return user;
};
const hidePassword = (options = {}) => ({
    ...options,
    projection: { ...options.projection, password: false }
});
const beforeWrite = (user) => validate(gateway_1.touch(user));
const defaults = (user) => {
    const copy = { ...user };
    if (!copy.settings) {
        copy.settings = {};
    }
    if (!copy.settings.locale) {
        copy.settings.locale = 'en';
    }
    return copy;
};
const noop = () => { };
const UserRepository = {
    findUser: async (collection, id) => {
        const result = await collection.findOne({ _id: id }, hidePassword());
        return toExternal(result);
    },
    findMinimalUser: async (collection, id) => {
        const result = await collection.findOne({ _id: id }, hidePassword({ projection: { _id: 1 } }));
        return toExternal(result);
    },
    findUserByUsername: async (collection, username) => {
        const result = await collection.findOne({ username }, hidePassword());
        return toExternal(result);
    },
    findAllUsers: async (collection) => {
        const result = await collection.find({}, hidePassword()).toArray();
        return result.map(toExternal);
    },
    createUser: async (collection, user, auth = noop) => {
        try {
            await auth(user);
        }
        catch (error) {
            throw error;
        }
        const userDocument = beforeWrite(defaults(gateway_1.generateId(toInternal(user))));
        try {
            await collection.insertOne(userDocument);
            return toExternal(userDocument);
        }
        catch (error) {
            if (gateway_1.MongoError.isConflict(error)) {
                const fieldErrors = {
                    username: gateway_1.ErrorCodes.USERNAME_IN_USE
                };
                throw gateway_1.InputError.conflict('Username already in use', fieldErrors);
            }
            throw error;
        }
    },
    updateSettings: async (collection, id, settingsUpdate, auth = noop) => {
        try {
            const dbUser = await collection.findOne({ _id: id });
            if (!dbUser) {
                throw gateway_1.InputError.notFound('User does not exist', gateway_1.ErrorCodes.USER_NOT_FOUND);
            }
            await auth(toExternal(dbUser));
            const updatedSettings = validateSettings({
                ...dbUser.settings,
                ...toInternalSettings(settingsUpdate)
            });
            const update = { $set: gateway_1.touch({ settings: updatedSettings }) };
            const result = await collection.findOneAndUpdate({ _id: id }, update, hidePassword({ returnOriginal: false }));
            return toExternal(result.value);
        }
        catch (error) {
            throw error;
        }
    },
    deleteUser: async (collection, id, auth = noop) => {
        const dbUser = await collection.findOne({ _id: id });
        if (!dbUser) {
            throw gateway_1.InputError.notFound('User does not exist', gateway_1.ErrorCodes.USER_NOT_FOUND);
        }
        await auth(toExternal(dbUser));
        const { result } = await collection.deleteOne({ _id: id });
        if (result.n === 1) {
            return true;
        }
        throw gateway_1.InputError.notFound('User does not exist', gateway_1.ErrorCodes.USER_NOT_FOUND);
    },
    getPassword: async (collection, username) => {
        const result = await collection.findOne({ username }, { projection: { password: true } });
        if (!result) {
            throw gateway_1.InputError.notFound('User does not exist', gateway_1.ErrorCodes.USER_NOT_FOUND);
        }
        return result.password;
    },
    updatePassword: async (collection, id, password, auth = noop) => {
        const dbUser = await collection.findOne({ _id: id });
        if (!dbUser) {
            throw gateway_1.InputError.notFound('User does not exist', gateway_1.ErrorCodes.USER_NOT_FOUND);
        }
        await auth(toExternal(dbUser));
        const userDocument = beforeWrite(gateway_1.applyUpdate(dbUser, { password }));
        const { result } = await collection.replaceOne({ _id: id }, userDocument, hidePassword());
        return result.nModified === 1;
    }
};
exports.createUserRepository = (collection) => {
    collection.createIndexes([
        {
            key: {
                username: 1
            },
            name: 'username',
            unique: true
        }
    ]);
    collection.dropIndex('email').catch(() => { });
    collection.updateMany({ scopes: { $exists: false } }, { $set: { scopes: [{ id: 'root', role: 'developer' }] } });
    return Object.entries(UserRepository).reduce((obj, [name, func]) => ({
        ...obj,
        [name]: gateway_1.InternalError.catchUnexpected((...args) => func(collection, args[0], args[1], args[2]))
    }), {});
};
//# sourceMappingURL=UserRepository.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../..");
exports.UserApi = {
    findUserBySession: async ({ userRepo }, session) => {
        return userRepo.findUser(session.user.id);
    },
    findUser: async ({ userRepo }, id) => {
        return userRepo.findUser(id);
    },
    findAllUsers: async ({ userRepo }) => {
        return userRepo.findAllUsers();
    },
    createUser: async ({ userRepo }, user) => userRepo.createUser(user),
    updateSettings: async ({ userRepo }, id, settingsUpdate) => userRepo.updateSettings(id, settingsUpdate),
    updatePassword: async ({ userRepo }, id, password) => userRepo.updatePassword(id, password),
    deleteUser: async ({ userRepo }, id) => {
        if (id === '00000000000000') {
            throw __1.AuthError.notAllowed('Cannot delete admin!');
        }
        userRepo.deleteUser(id);
    }
};
//# sourceMappingURL=UserApi.js.map
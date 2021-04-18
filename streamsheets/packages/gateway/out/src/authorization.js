"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAuthorization = (rawAuth, context) => Object.entries(rawAuth).reduce((obj, [name, func]) => ({
    ...obj,
    [name]: (...args) => func(context, ...args)
}), {});
const isAdmin = (context, user) => true;
const isValidScope = ({ actor, auth }, scope) => {
    if (!scope) {
        throw new Error('MISSING_SCOPE');
    }
    return true;
};
const isInScope = (context, scope, withScope) => { var _a; return scope.id === ((_a = withScope.scope) === null || _a === void 0 ? void 0 : _a.id); };
exports.UserAuth = {
    isAdmin,
    isValidScope,
    isInScope,
};
exports.baseAuth = Object.assign({}, exports.UserAuth);
//# sourceMappingURL=authorization.js.map
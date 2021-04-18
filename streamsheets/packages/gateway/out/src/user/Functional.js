"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function partialApply1(f, arg1) {
    return (...args) => f(arg1, ...args);
}
exports.partialApply1 = partialApply1;
function partialApply1All(object, arg1) {
    return (Object.entries(object).reduce((acc, [key, func]) => ({ ...acc, [key]: partialApply1(func, arg1) }), {}));
}
exports.partialApply1All = partialApply1All;
function partialApply2(f, arg1, arg2) {
    return (...args) => f(arg1, arg2, ...args);
}
exports.partialApply2 = partialApply2;
function partialApply3(f, arg1, arg2, arg3) {
    return (...args) => f(arg1, arg2, arg3, ...args);
}
exports.partialApply3 = partialApply3;
//# sourceMappingURL=Functional.js.map
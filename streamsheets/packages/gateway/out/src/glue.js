"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authorization_1 = require("./authorization");
const errors_1 = require("./errors");
const export_import_1 = require("./export-import");
const machine_1 = require("./machine");
const stream_1 = require("./stream");
const user_1 = require("./user");
exports.createApi = (context, rawApi) => Object.entries(rawApi).reduce((obj, [name, func]) => ({
    ...obj,
    [name]: errors_1.InternalError.catchUnexpected((...args) => func(context, ...args))
}), {});
const createApis = (rawApi, context) => Object.entries(rawApi).reduce((acc, [key, value]) => ({ ...acc, [key]: exports.createApi(context, value) }), {});
exports.RawAPI = {
    user: user_1.BaseUserApi,
    machine: machine_1.BaseMachineApi,
    stream: stream_1.BaseStreamApi,
    export: export_import_1.ExportApi,
    import: export_import_1.ImportApi
};
exports.glue = (globalContext, actor) => {
    const rawApi = globalContext.rawApi;
    const rawAuth = globalContext.rawAuth;
    const context = {
        ...globalContext,
        actor
    };
    context.api = createApis(rawApi, context);
    context.auth = authorization_1.createAuthorization(rawAuth, context);
    return context;
};
//# sourceMappingURL=glue.js.map
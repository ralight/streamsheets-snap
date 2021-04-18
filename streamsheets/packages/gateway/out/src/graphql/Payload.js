"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../errors");
const INTERNAL_ERROR_PAYLOAD = {
    success: false,
    code: 'INTERNAL_ERROR',
    message: 'An internal server error occured'
};
exports.Payload = {
    createFailure: (error) => {
        if (errors_1.InternalError.isInternal(error)) {
            return INTERNAL_ERROR_PAYLOAD;
        }
        return { ...error, success: false };
    },
    createSuccess: (payload) => ({ ...payload, success: true })
};
//# sourceMappingURL=Payload.js.map
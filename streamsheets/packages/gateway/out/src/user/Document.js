"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const id_generator_1 = __importDefault(require("@cedalo/id-generator"));
exports.touch = (document) => ({
    ...document,
    lastModified: new Date().toISOString()
});
exports.customGenerateId = (document, idGenerator) => ({
    _id: idGenerator(),
    ...document
});
exports.makeGenerateId = (idGenerator) => (document) => exports.customGenerateId(document, idGenerator);
exports.generateId = exports.makeGenerateId(() => id_generator_1.default.generate());
const sanitizeUpdate = (update) => {
    const copy = { ...update };
    delete copy.id;
    delete copy._id;
    return copy;
};
exports.applyUpdate = (document, partial) => ({ ...document, ...sanitizeUpdate(partial) });
//# sourceMappingURL=Document.js.map
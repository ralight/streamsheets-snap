"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const config = __importStar(require("../config"));
const DefaultApp_1 = __importDefault(require("./DefaultApp"));
const pkg = require('../../../package.json');
process.title = pkg.name;
config.basedir = __dirname;
http_1.default.globalAgent.maxSockets = 16384;
async function start(globalContext) {
    const app = new DefaultApp_1.default(pkg, config, globalContext);
    await app.installMiddlewares();
    return app.start();
}
exports.start = start;
//# sourceMappingURL=start.js.map
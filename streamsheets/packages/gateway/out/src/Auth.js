"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const passport_jwt_1 = __importDefault(require("passport-jwt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const logger_1 = require("@cedalo/logger");
const logger = logger_1.LoggerFactory.createLogger('gateway - Auth', process.env.STREAMSHEETS_LOG_LEVEL || 'info');
const ExtractJwt = passport_jwt_1.default.ExtractJwt;
const JwtStrategy = passport_jwt_1.default.Strategy;
class Auth {
    constructor() {
        this.jwtOptions = {
            jwtFromRequest: () => '',
            secretOrKey: ''
        };
    }
    set jwtSecret(secret) {
        this.jwtOptions = {
            jwtFromRequest: ExtractJwt.fromAuthHeader(),
            secretOrKey: secret
        };
    }
    initialize(context) {
        passport_1.default.use('jwt', new JwtStrategy(this.jwtOptions, (jwtPayload, next) => {
            if (jwtPayload) {
                next(null, jwtPayload);
            }
            else {
                next(null, false);
            }
        }));
        Object.entries(context.authStrategies).forEach(([name, strategy]) => passport_1.default.use(name, strategy));
        passport_1.default.serializeUser((user, done) => {
            done(null, user);
        });
        passport_1.default.deserializeUser((user, done) => {
            done(null, user);
        });
        return passport_1.default.initialize();
    }
    getToken(payload) {
        return jsonwebtoken_1.default.sign(payload, this.jwtOptions.secretOrKey, {
            expiresIn: process.env.JWT_TOKEN_TTL || '365 days'
        });
    }
    async parseToken(token) {
        return new Promise((resolve, reject) => {
            jsonwebtoken_1.default.verify(token, this.jwtOptions.secretOrKey, (err, decoded) => {
                if (err) {
                    return reject(err);
                }
                return resolve(decoded);
            });
        });
    }
}
exports.default = new Auth();
//# sourceMappingURL=Auth.js.map
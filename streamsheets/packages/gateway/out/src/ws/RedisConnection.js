"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ioredis_1 = __importDefault(require("ioredis"));
const logger_1 = __importDefault(require("../utils/logger"));
const logger = logger_1.default.create({ name: 'ServerConnection' });
const REDIS_HOST = process.env.REDIS_HOST || 'internal-redis';
const REDIS_PORT = parseInt(process.env.REDIS_PORT || '', 10) || 6379;
const STEP_CONFIRMATION_TIMEOUT = 5000;
const logError = (error) => logger.warn(error);
const getMachineStepKey = (machineId) => `machines.${machineId}.step`;
const getMachineStepKeySpaceEvent = (machineId) => `__keyspace@0__:${getMachineStepKey(machineId)}`;
const getMachineIdFromKeySpaceEvent = (msgstr) => {
    const last = msgstr.indexOf('.step');
    return last > 0 ? msgstr.substring(24, last) : undefined;
};
class Subscription {
    constructor(machineId, stepHandler) {
        this.isNewStepAvailable = false;
        this._confirmationTimoutId = null;
        this.machineId = machineId;
        this.stepHandler = stepHandler;
    }
    static of(machineId, stepHandler) {
        return new Subscription(machineId, stepHandler);
    }
    get isConfirmationPending() {
        return this._confirmationTimoutId != null;
    }
    onTimeout(cb) {
        this._confirmationTimoutId = setTimeout(cb, STEP_CONFIRMATION_TIMEOUT);
    }
    clearOnTimeout() {
        this._confirmationTimoutId && clearTimeout(this._confirmationTimoutId);
        this._confirmationTimoutId = null;
    }
}
class RedisConnection {
    constructor(redis, eventRedis) {
        this.redis = redis;
        this.eventRedis = eventRedis;
        this.redis.on('error', logError);
        this.eventRedis.on('error', logError);
        this.eventRedis.on('message', this.onRedisMessage.bind(this));
        this.confirmMachineStep = this.confirmMachineStep.bind(this);
        this.subscriptions = new Map();
    }
    static connect() {
        const redis = new ioredis_1.default(REDIS_PORT, REDIS_HOST);
        return new RedisConnection(redis, redis.duplicate());
    }
    close() {
        this.clearTimeouts();
        if (this.redis.status !== 'end') {
            this.redis.quit();
            this.eventRedis.quit();
        }
    }
    clearTimeouts() {
        this.subscriptions.forEach((subscription) => subscription.clearOnTimeout());
    }
    confirmMachineStep(machineId) {
        const subscription = this.subscriptions.get(machineId);
        if (subscription) {
            subscription.clearOnTimeout();
            if (subscription.isNewStepAvailable) {
                subscription.isNewStepAvailable = false;
                this.fetchStep(subscription);
            }
        }
    }
    async fetchStep(subscription) {
        if (!subscription.isConfirmationPending) {
            subscription.onTimeout(() => {
                this.confirmMachineStep(subscription.machineId);
            });
            const latestStep = await this.getLatestStep(subscription);
            subscription.stepHandler(latestStep);
        }
    }
    async getLatestStep(subscription) {
        return this.redis.get(getMachineStepKey(subscription.machineId));
    }
    onRedisMessage(message) {
        const machineId = getMachineIdFromKeySpaceEvent(message);
        if (machineId) {
            const subscription = this.subscriptions.get(machineId);
            if (subscription)
                this.handleStepMessage(subscription);
        }
    }
    handleStepMessage(subscription) {
        if (subscription.isConfirmationPending) {
            subscription.isNewStepAvailable = true;
        }
        else {
            this.fetchStep(subscription);
        }
    }
    subscribe(machineId, stepHandler) {
        this.eventRedis.subscribe(getMachineStepKeySpaceEvent(machineId));
        this.subscriptions.set(machineId, Subscription.of(machineId, stepHandler));
    }
    unsubscribe(machineId) {
        this.eventRedis.unsubscribe(getMachineStepKeySpaceEvent(machineId));
        this.subscriptions.delete(machineId);
    }
}
exports.default = RedisConnection;
//# sourceMappingURL=RedisConnection.js.map
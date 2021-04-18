import Redis from 'ioredis';
declare type StepHandler = (stepEvent: string | object) => void;
declare class Subscription {
    static of(machineId: string, stepHandler: StepHandler): Subscription;
    machineId: string;
    isNewStepAvailable: boolean;
    stepHandler: any;
    private _confirmationTimoutId;
    constructor(machineId: string, stepHandler: StepHandler);
    get isConfirmationPending(): boolean;
    onTimeout(cb: () => void): void;
    clearOnTimeout(): void;
}
export default class RedisConnection {
    static connect(): RedisConnection;
    subscriptions: Map<string, Subscription>;
    private redis;
    private eventRedis;
    constructor(redis: Redis.Redis, eventRedis: Redis.Redis);
    close(): void;
    clearTimeouts(): void;
    confirmMachineStep(machineId: string): void;
    fetchStep(subscription: Subscription): Promise<void>;
    getLatestStep(subscription: Subscription): Promise<string | null>;
    onRedisMessage(message: string): void;
    handleStepMessage(subscription: Subscription): void;
    subscribe(machineId: string, stepHandler: StepHandler): void;
    unsubscribe(machineId: string): void;
}
export {};

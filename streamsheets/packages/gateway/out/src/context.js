"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("@cedalo/logger");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const authorization_1 = require("./authorization");
const glue_1 = require("./glue");
const machine_1 = require("./machine");
const stream_1 = require("./stream");
const user_1 = require("./user");
const { RepositoryManager, MongoDBGraphRepository, MongoDBMachineRepository, MongoDBBackupRestoreManager, MongoDBConfigurationRepository, MongoDBConnection } = require('@cedalo/repository');
const { MongoDBStreamsRepository } = require('@cedalo/service-streams');
const logger = logger_1.LoggerFactory.createLogger('gateway - context', process.env.STREAMSHEETS_LOG_LEVEL || 'info');
const encryptionContext = {
    hash: async (string) => {
        const salt = await bcryptjs_1.default.genSalt(10);
        const hash = await bcryptjs_1.default.hash(string, salt);
        return hash;
    },
    verify: async (hash, string) => {
        const match = await bcryptjs_1.default.compare(string, hash);
        return match;
    }
};
const getActor = async (context, session) => {
    const actor = await context.rawApi.user.findUserBySession(context, session);
    if (!actor) {
        throw new Error('User not found!');
    }
    return actor;
};
const getRequestContext = async (globalContext, session) => {
    const actor = await globalContext.getActor(globalContext, session);
    return glue_1.glue(globalContext, actor);
};
const applyPlugins = async (context, pluginModules) => {
    return pluginModules.reduce(async (prev, mod) => {
        const currentConfig = await prev;
        try {
            logger.info(`Loading plugin: ${mod}`);
            const pluginMod = require(mod);
            const appliedPlugin = await pluginMod.apply(currentConfig);
            logger.info(`Successfully loaded plugin: ${mod}`);
            return appliedPlugin;
        }
        catch (error) {
            logger.error(`Failed load plugin: ${mod}`, error.message);
        }
        return currentConfig;
    }, Promise.resolve(context));
};
exports.init = async (config, plugins) => {
    const mongoClient = await MongoDBConnection.create();
    const graphRepository = new MongoDBGraphRepository(config.mongodb);
    const machineRepository = new MongoDBMachineRepository(config.mongodb);
    const streamRepositoryLegacy = new MongoDBStreamsRepository(config.mongodb);
    const backupRestoreManager = new MongoDBBackupRestoreManager(config.mongodb);
    const configurationRepository = new MongoDBConfigurationRepository(config.mongodb);
    RepositoryManager.init({
        graphRepository,
        machineRepository,
        streamRepositoryLegacy,
        backupRestoreManager,
        configurationRepository
    });
    RepositoryManager.streamRepository = new stream_1.StreamRepositoryProxy();
    RepositoryManager.userRepository = user_1.createUserRepository(mongoClient.db().collection('users'));
    await RepositoryManager.connectAll(mongoClient);
    await RepositoryManager.setupAllIndicies();
    const machineServiceProxy = new machine_1.MachineServiceProxy();
    const users = await RepositoryManager.userRepository.findAllUsers();
    if (users.length === 0) {
        const pwhash = await encryptionContext.hash('1234');
        await RepositoryManager.userRepository.createUser({
            id: '00000000000000',
            username: 'admin',
            password: pwhash,
            settings: { locale: 'en' },
            admin: true
        });
    }
    const context = await applyPlugins({
        mongoClient,
        interceptors: {},
        repositories: RepositoryManager,
        encryption: encryptionContext,
        machineRepo: RepositoryManager.machineRepository,
        userRepo: RepositoryManager.userRepository,
        streamRepo: RepositoryManager.streamRepository,
        rawAuth: authorization_1.baseAuth,
        authStrategies: {},
        middleware: {},
        rawApi: glue_1.RawAPI,
        machineServiceProxy,
        getActor,
        getRequestContext,
        login: async (context, username, password) => {
            try {
                const hash = await context.userRepo.getPassword(username);
                const valid = await context.encryption.verify(hash, password);
                if (!valid) {
                    throw new Error('INVALID_CREDENTIALS');
                }
                const user = await context.userRepo.findUserByUsername(username);
                if (!user) {
                    throw new Error('INVALID_CREDENTIALS');
                }
                return user;
            }
            catch (e) {
                if (e.code === 'USER_NOT_FOUND') {
                    throw new Error('INVALID_CREDENTIALS');
                }
                throw e;
            }
        }
    }, plugins);
    return context;
};
//# sourceMappingURL=context.js.map
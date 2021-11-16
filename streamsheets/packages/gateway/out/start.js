"use strict";
const { proc, moduleResolver: { resolve } } = require('@cedalo/commons');
const { LoggerFactory } = require('@cedalo/logger');
const GatewayService = require('./src/services/gateway/GatewayService');
const metadata = require('../meta.json');
const packageJSON = require('../package.json');
const initContext = require('./src/context').init;
const config = require('./src/config');
const path = require('path');
const process = require('process');
const logger = LoggerFactory.createLogger('Gateway Service', process.env.GATEWAY_SERVICE_LOG_LEVEL);
metadata.version = packageJSON.version;
process.on('unhandledRejection', error => {
    console.log('unhandledRejection', error.message);
});
proc.setProcessTitle(`Gateway_${metadata.version}`);
const resolvePlugins = async () => {
    const moduleDir = path.resolve(process.env.PLUGINS_MODULE_DIR || 'plugins');
    logger.info(`Looking for plugins in ${moduleDir}`);
    const modules = await resolve(moduleDir);
    return modules;
};
const run = async () => {
    const plugins = await resolvePlugins();
    const globalContext = await initContext(config, plugins);
    const service = new GatewayService(metadata, globalContext);
    globalContext.service = service;
    await service.start();
    globalContext.runHook(globalContext, 'afterServiceStart');
    logger.info('Gateway service started');
    process.on('SIGTERM', () => {
        logger.warn('SIGTERM signal received.');
        service.stop().then(() => {
            logger.warn('Service stopped. Exiting ...');
            process.exit(0);
        });
    });
};
run();
//# sourceMappingURL=start.js.map
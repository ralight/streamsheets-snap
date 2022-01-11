"use strict";
const fs = require('fs');
const os = require('os');
const http = require('http');
const https = require('https');
const mkdirp = require('mkdirp');
const path = require('path');
const util = require('util');
const compress = require('compression');
const Express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const cors = require('cors');
const { GraphQLServer } = require('../graphql/GraphQLServer');
const logger = require('../utils/logger').create({ name: 'DefaultApp' });
const APIRouter = require('./APIRouter');
const APIRouterRepositoryServer = require('./APIRouterRepositoryServer');
const Error = require('./error/Error');
const Auth = require('../Auth').default;
const MACHINE_DATA_DIR = process.env.MACHINE_DATA_DIR || './machinedata';
module.exports = class DefaultApp {
    constructor(pkg, config, globalContext) {
        const debug = util.debuglog(pkg.name);
        const app = new Express();
        app.locals = {
            basedir: config.basedir,
            pkg,
            logger: debug,
            config
        };
        app.locals.gatewayService = globalContext.gatewayService;
        app.locals.RepositoryManager = globalContext.repositories;
        app.locals.encryption = globalContext.encryption;
        app.locals.globalContext = globalContext;
        this.app = app;
        this.config = config;
        this.globalContext = globalContext;
        this.db = null;
    }
    async installMiddlewares() {
        const app = this.app;
        const debug = app.locals.logger;
        const logdir = path.join(os.homedir(), '.logs');
        try {
            fs.accessSync(logdir);
        }
        catch (error) {
            debug(error.message);
            debug(`Creating new directory: ${logdir}`);
            mkdirp.sync(logdir);
        }
        const access = fs.createWriteStream(path.join(logdir, 'access.log'), { flags: 'a' });
        app.use(morgan('combined', { stream: access }));
        if (!process.env.NODE_ENV === 'PRODUCTION' || !process.env.NODE_ENV === 'PROD') {
            app.use((request, response, next) => {
                setTimeout(next, 200);
            });
        }
        app.use((request, response, next) => {
            response.header('Access-Control-Allow-Origin', '*');
            response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            next();
        });
        app.use(compress({ threshold: 32, chunkSize: 16 * 1024 }));
        app.use(session({
            secret: 'keyboard cat',
            resave: false,
            saveUninitialized: true
        }));
        app.use(Auth.initialize(this.globalContext));
        app.use(passport.session());
        app.use(cors());
        const router = new APIRouter();
        app.use('/api/v1.0/auth', router);
        app.use('/api/v1.0/newsletter', router);
        app.use('/api/v1.0/services', router);
        app.use('/api/v1.0/meta', router);
        app.use('/api/v1.0/config', router);
        Object.values(this.globalContext.middleware).forEach((mw) => app.use(...mw));
        const authenticate = (req, res, next) => {
            passport.authenticate('jwt', { session: false }, async (err, user) => {
                if (user) {
                    try {
                        const actor = await app.locals.globalContext.getActor(app.locals.globalContext, { user });
                        if (!actor) {
                            res.status(403).json({ error: 'Not authenticated' });
                        }
                        req.user = actor;
                        next();
                    }
                    catch (e) {
                        res.status(403).json({ error: 'Not authenticated' });
                    }
                }
                else {
                    res.status(403).json({ error: 'Not authenticated' });
                }
            })(req, res, next);
        };
        app.use('/api/v1.0/graphql', authenticate);
        const getSession = (req) => ({ user: req.user });
        GraphQLServer.init(app, '/api/v1.0/graphql', (req) => this.globalContext.getRequestContext(this.globalContext, getSession(req)), this.globalContext.graphql);
        app.get('/api/v1.0/machines/:machineId/files/:fileName', authenticate, async (req, res) => {
            try {
                const requestContext = await app.locals.globalContext.getRequestContext(app.locals.globalContext, getSession(req));
                const { scope } = await requestContext.machineRepo.findMachine(req.params.machineId);
                if (!requestContext.auth.isValidScope(scope)) {
                    res.status(403).json({ error: 'Not allowed' });
                }
                const machineFile = path.join(MACHINE_DATA_DIR, req.params.machineId, path.basename(req.params.fileName));
                const absoluteMachineFile = path.isAbsolute(machineFile)
                    ? machineFile
                    : path.join(process.cwd(), machineFile);
                res.sendFile(absoluteMachineFile);
            }
            catch (e) {
                logger.error(`Failed to resolve Machine#${req.params.machineId} file  ${req.params.fileName}`, e);
            }
        });
        const routerRepository = new APIRouterRepositoryServer();
        app.use('/api/v1.0', routerRepository);
        app.use(bodyParser.urlencoded({
            limit: 50000000,
            extended: true
        }));
        app.use(bodyParser.json({
            limit: 50000000,
            type: 'application/json'
        }));
        app.use(Error.logger);
        app.use(Error.renderer);
        const publicPath = path.join(__dirname, '..', '..', '..', 'public');
        app.use(Express.static(publicPath));
        const indexHtmlPath = path.join(publicPath, 'index.html');
        app.use((req, res) => res.sendFile(indexHtmlPath));
    }
    async start() {
        this.app.locals.db = this.db;
        const { secure, port, ipaddress } = this.config.get('http');
        let server;
        if (secure) {
            server = https.createServer({
                key: fs.readFileSync('./config/server.key'),
                cert: fs.readFileSync('./config/server.cert')
            }, this.app);
        }
        else {
            server = http.createServer(this.app);
        }
        server.timeout = 10000;
        return new Promise((resolve) => {
            server.listen(port, ipaddress, () => {
                const name = this.app.locals.pkg.name;
                logger.info(`${name} started at ${new Date()}. IP address: ${ipaddress}, port: ${port}`);
                resolve(server);
            });
        });
    }
};
//# sourceMappingURL=DefaultApp.js.map
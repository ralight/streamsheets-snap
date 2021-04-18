# Streamsheets snap package

To build:

```
snapcraft  --enable-experimental-package-repositories --provider lxd
```

Assumes that there is a directory `streamsheets` in the root of the repository,
which contains the deployed streamsheets installation as from the streamsheets
docker image, for example.

Also assumes that the streamsheets network components and MQTT.js have been
modified to use unix sockets for their communication.

## TODO

* Update nginx to use https://snapcraft.io/docs/snap-layouts with distro
  package instead of manually compiling.

## Modifications

See: https://github.com/mqttjs/MQTT.js/pull/1094 for MQTT.js

packages/rest-server-core/src/server/RESTServer.js:
```
     _initializeConfiguration(config) {
         let configuration = Object.assign({}, DEFAULT_CONFIG, config);
         configuration.http.port = process.env.RESTSERVER_PORT || configuration.http.port;
+        configuration.http.ipaddress = process.env.RESTSERVER_HOST || configuration.http.ipaddress;
         configuration = this._postConfig(configuration);
         return configuration;
     }
```

packages/rest-server-core/src/DefaultApp.js:
```
    start() {
        return new Promise((resolve, reject) => {
            const ipaddress = this.config.http.ipaddress;
            const port = this.config.http.port;

            if (this.config.http.secure) {
                const keyFile = path.join(this.config.basedir, 'config', 'certs', this.config.http.key);
                const certFile = path.join(this.config.basedir, 'config', 'certs', this.config.http.cert);
                if (!fs.existsSync(keyFile) || !fs.existsSync(certFile)) {
                    reject(new Error('HTTP certificate file not found.'));
                }
                const options = {
                    key: fs.readFileSync(keyFile),
                    cert: fs.readFileSync(certFile)
                };
                this._server = https.createServer(options, this.app);
            } else {
                this._server = http.createServer(this.app);
            }
            this._server.timeout = 10000;
-           this._server.listen(port, ipaddress, () => {
-               // eslint-disable-next-line
-               logger.info(`${this.app.locals.pkg.name} started at ${new Date()}. IP address: ${ipaddress}, port: ${port}`);
-               resolve();
-           });
+           if(port == 0){
+               this._server.listen(ipaddress, () => {
+                   // eslint-disable-next-line
+                   logger.info(`${this.app.locals.pkg.name} started at ${new Date()}. IP address: ${ipaddress}, port: ${port}`);
+                   resolve();
+               });
+           }else{
+               this._server.listen(port, ipaddress, () => {
+                   // eslint-disable-next-line
+                   logger.info(`${this.app.locals.pkg.name} started at ${new Date()}. IP address: ${ipaddress}, port: ${port}`);
+                   resolve();
+               });
+           }
        });
```

packages/gateway/out/src/rest/DefaultApp.js:
```
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
-       return new Promise((resolve) => {
-           server.listen(port, ipaddress, () => {
-               const name = this.app.locals.pkg.name;
-               logger.info(`${name} started at ${new Date()}. IP address: ${ipaddress}, port: ${port}`);
-               resolve(server);
-           });
-       });
+       if (port == 0) {
+           return new Promise((resolve) => {
+               server.listen(ipaddress, () => {
+                   const name = this.app.locals.pkg.name;
+                   logger.info(`${name} started at ${new Date()}. IP address: ${ipaddress}, port: ${port}`);
+                   resolve(server);
+               });
+           });
+       }else{
+           return new Promise((resolve) => {
+               server.listen(port, ipaddress, () => {
+                   const name = this.app.locals.pkg.name;
+                   logger.info(`${name} started at ${new Date()}. IP address: ${ipaddress}, port: ${port}`);
+                   resolve(server);
+               });
+           });
+       }
    }
```

I just hard coded the path to the socket here. Testing on `port == 0` would be sensible.

packages/repository/src/mongoDB/MongoDBConnection.js:
```
const buildUrl = ({ host, port, database }, auth) =>
    auth
        ? `mongodb://${auth}@%2Fvar%2Fsnap%2Fstreamsheets%2Fcommon%2Fmongodb.sock/${database}?${authMechanism}`
        : `mongodb://%2Fvar%2Fsnap%2Fstreamsheets%2Fcommon%2Fmongodb.sock/${database}`;

```

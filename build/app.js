"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

const fs = require("fs");
/* HTTP Imports */


const http = require("http");

const https = require("https");

const app_config_1 = require("./app.config");
/* Express Imports */


const express = require("express");

const express_middleware_1 = require("./express.middleware");

const _util_1 = require("./util");

const Routes = require("./routes");

class App extends app_config_1.AppConfig {
  constructor(options) {
    super();

    this.onError = error => {
      if (error.syscall !== 'listen') {
        throw error;
      }

      const bind = typeof this.port === 'string' ? 'Pipe ' + this.port : 'Port ' + this.port; // handle specific listen errors with friendly messages

      switch (error.code) {
        case 'EACCES':
          console.error(bind + ' requires elevated privileges');
          process.exit(1);
          break;

        case 'EADDRINUSE':
          console.error(bind + ' is already in use');
          process.exit(1);
          break;

        default:
          throw error;
      }
    };

    this.onListening = () => {
      const addr = this.server.address();
      const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
      console.log('Listening on ' + bind);
    };

    for (const K in options) {
      this[K] = options[K];
    }
  }

  initialize() {
    this.app = express();
    this.port = _util_1.normalizePort(this.port);
    this.app.set('port', this.port);
    this.initializeMiddleware();
    this.initializeCors();
    this.initializeRoutes();
    this.initializeServer();
  }

  initializeMiddleware() {
    /* Initialize Middleware */
    this.app.use(express_middleware_1.cookieParser());
    this.app.use(express_middleware_1.bodyParser.json());
    this.app.use(express_middleware_1.bodyParser.urlencoded({
      extended: true
    }));
    this.app.use(express_middleware_1.expressValidator());
  }

  initializeRoutes() {
    this.app.use('/', Routes.index);
  }

  initializeCors() {
    /* Allow CORS */
    this.app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', this.cors ? this.cors.origin : '*');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      next();
    });
  }

  initializeServer() {
    this.server = this.createServer();
    this.server.listen(this.port);
    this.server.on('error', this.onError);
    this.server.on('listening', this.onListening);
  }

  createServer() {
    if (this.useHttps) {
      const _key = fs.readFileSync(this.key);

      const _cert = fs.readFileSync(this.cert);

      return https.createServer({
        key: _key,
        cert: _cert
      }, this.app);
    }

    return http.createServer(this.app);
  }

}

exports.default = App;
//# sourceMappingURL=app.js.map

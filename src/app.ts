import * as fs from 'fs';


/* HTTP Imports */
import * as http from 'http';
import * as https from 'https';

import {AppConfig} from './app.config';

/* Express Imports */
import * as express from 'express';
import {cookieParser, bodyParser, expressValidator} from './express.middleware';


import {Partial, Nullable, normalizePort} from './util';

import * as Routes from './routes';

export default class App extends AppConfig {

    server: http.Server | https.Server;
    app: express.Application;
    
    constructor(options: AppConfig) {
        super();
        
        for (const K in options) {
            this[K] = options[K];
        }

        this.initialize();
    }

    initialize() {
        this.app = express();
        this.port = normalizePort(this.port);
        this.app.set('port', this.port);

        this.initializeMiddleware();
        this.initializeCors();
        this.initializeRoutes();
    }

    initializeMiddleware() {
        /* Initialize Middleware */
        this.app.use(cookieParser());
    
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: true}));
    
        this.app.use(expressValidator());
    }
        
    initializeRoutes() {
        this.app.use('/', Routes.index);
    }

    initializeCors() {
        /* Allow CORS */
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', this.cors.origin);
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
            return https.createServer({key: _key, cert: _cert}, this.app);
        }
        return http.createServer(this.app);
    }

    onError(error: any) {
        if (error.syscall !== 'listen') {
            throw error;
        }
    
        const bind = typeof this.port === 'string'
            ? 'Pipe ' + this.port
            : 'Port ' + this.port;
    
        // handle specific listen errors with friendly messages
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
    }

    onListening() {
        const addr = this.server.address();
        const bind = typeof addr === 'string'
            ? 'pipe ' + addr
            : 'port ' + addr.port;
        console.log('Listening on ' + bind);
    }

}
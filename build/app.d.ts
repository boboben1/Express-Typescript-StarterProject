/// <reference types="node" />
import * as http from 'http';
import * as https from 'https';
import { AppConfig } from './app.config';
import * as express from 'express';
export default class App extends AppConfig {
    server: http.Server | https.Server;
    app: express.Application;
    constructor(options: AppConfig);
    initialize(): void;
    initializeMiddleware(): void;
    initializeRoutes(): void;
    initializeCors(): void;
    initializeServer(): void;
    createServer(): http.Server | https.Server;
    onError: (error: any) => void;
    onListening: () => void;
}
//# sourceMappingURL=app.d.ts.map
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import * as expressValidator from 'express-validator';
import * as express from 'express';

export {cookieParser, bodyParser, expressValidator};

export const InitializeAll = (app: express.Application) => {
    app.use(cookieParser());
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use(expressValidator());
};
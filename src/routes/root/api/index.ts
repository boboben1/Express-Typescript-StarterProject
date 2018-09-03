import * as express from 'express';


import * as apifunc from './apifunc';

const router = express.Router();

apifunc.use(router);

export {router as api};
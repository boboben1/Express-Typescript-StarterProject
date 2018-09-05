import * as express from 'express';

import {api} from './api';


import * as login from './login';

const router = express.Router();

login.use(router);


router.use('/api', api);


export {router as index};
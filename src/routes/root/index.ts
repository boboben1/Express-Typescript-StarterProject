import * as express from 'express';

import {api} from './api';


import * as login from './login';

const router = express.Router();

login.use(router);


router.use('/api', api);


router.all('*', (req, res, next) => {
    res.status(404).send('<h1>Error 404: Not found</h1>');
});


export {router as index};
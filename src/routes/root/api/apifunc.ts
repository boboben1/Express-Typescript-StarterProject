import * as express from 'express';

export const use = (route: express.Router) => {
    route.get("/apifunc", (req, res, next) => {
        res.send({hello: "world"});
    });
}
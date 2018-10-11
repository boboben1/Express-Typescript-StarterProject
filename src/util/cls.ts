import cls = require('continuation-local-storage');
import cls_bluebird = require('cls-bluebird');
import 'any-promise/register/bluebird';

export const createNamespace = (name: string) => {
    const ns = cls.createNamespace(name);
    cls_bluebird(ns);

    return ns;
};

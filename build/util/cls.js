"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

const cls = require("continuation-local-storage");

const cls_bluebird = require("cls-bluebird");

require("any-promise/register/bluebird");

exports.createNamespace = name => {
  const ns = cls.createNamespace(name);
  cls_bluebird(ns);
  return ns;
};
//# sourceMappingURL=cls.js.map

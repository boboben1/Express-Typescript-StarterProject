"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cls = require("continuation-local-storage");

var cls_bluebird = require("cls-bluebird");

require("any-promise/register/bluebird");

exports.createNamespace = function (name) {
  var ns = cls.createNamespace(name);
  cls_bluebird(ns);
  return ns;
};
//# sourceMappingURL=cls.js.map

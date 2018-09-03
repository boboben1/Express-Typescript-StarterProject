"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _root = require("./root");

Object.keys(_root).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _root[key];
    }
  });
});
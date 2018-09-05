"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var express = require("express");

var apifunc = require("./apifunc");

var router = express.Router();
exports.api = router;
apifunc.use(router);
//# sourceMappingURL=index.js.map

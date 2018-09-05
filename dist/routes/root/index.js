"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var express = require("express");

var api_1 = require("./api");

var login = require("./login");

var router = express.Router();
exports.index = router;
login.use(router);
router.use('/api', api_1.api);
//# sourceMappingURL=index.js.map

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

const express = require("express");

const api_1 = require("./api");

const login = require("./login");

const router = express.Router();
exports.index = router;
login.use(router);
router.use('/api', api_1.api);
//# sourceMappingURL=index.js.map

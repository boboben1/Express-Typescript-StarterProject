"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

const express = require("express");

const apifunc = require("./apifunc");

const router = express.Router();
exports.api = router;
apifunc.use(router);
//# sourceMappingURL=index.js.map

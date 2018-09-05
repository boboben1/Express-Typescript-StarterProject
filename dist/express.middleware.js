"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cookieParser = require("cookie-parser");

exports.cookieParser = cookieParser;

var bodyParser = require("body-parser");

exports.bodyParser = bodyParser;

var expressValidator = require("express-validator");

exports.expressValidator = expressValidator;

exports.InitializeAll = function (app) {
  app.use(cookieParser());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(expressValidator());
};
//# sourceMappingURL=express.middleware.js.map

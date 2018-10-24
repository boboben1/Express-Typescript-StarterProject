"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

const cookieParser = require("cookie-parser");

exports.cookieParser = cookieParser;

const bodyParser = require("body-parser");

exports.bodyParser = bodyParser;

const expressValidator = require("express-validator");

exports.expressValidator = expressValidator;

exports.InitializeAll = app => {
  app.use(cookieParser());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(expressValidator());
};
//# sourceMappingURL=express.middleware.js.map

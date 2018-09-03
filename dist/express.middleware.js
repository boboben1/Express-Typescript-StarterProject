"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.expressValidator = exports.bodyParser = exports.cookieParser = exports.InitializeAll = void 0;

var cookieParser = _interopRequireWildcard(require("cookie-parser"));

exports.cookieParser = cookieParser;

var bodyParser = _interopRequireWildcard(require("body-parser"));

exports.bodyParser = bodyParser;

var expressValidator = _interopRequireWildcard(require("express-validator"));

exports.expressValidator = expressValidator;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var InitializeAll = function InitializeAll(app) {
  app.use(cookieParser());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(expressValidator());
};

exports.InitializeAll = InitializeAll;
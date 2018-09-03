"use strict";

require("@babel/polyfill");

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Babel Polyfill. MUST BE FIRST
var app = new _app.default({
  port: '80'
});
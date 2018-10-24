"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
}); // Babel Polyfill. MUST BE FIRST

require("@babel/polyfill");

require("module-alias/register");

require("./util/cls");

const app_1 = require("./app");

const app = new app_1.default({
  port: '80'
}).initialize();
//# sourceMappingURL=index.js.map

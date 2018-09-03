"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CorsSettings = exports.AppConfig = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AppConfig = function AppConfig() {
  _classCallCheck(this, AppConfig);
};

exports.AppConfig = AppConfig;

var CorsSettings = function CorsSettings() {
  _classCallCheck(this, CorsSettings);

  this.origin = "http://*";
};

exports.CorsSettings = CorsSettings;
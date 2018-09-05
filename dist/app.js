"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var fs = require("fs");
/* HTTP Imports */


var http = require("http");

var https = require("https");

var app_config_1 = require("./app.config");
/* Express Imports */


var express = require("express");

var express_middleware_1 = require("./express.middleware");

var _util_1 = require("@util");

var Routes = require("./routes");

var App =
/*#__PURE__*/
function (_app_config_1$AppConf) {
  _inherits(App, _app_config_1$AppConf);

  function App(options) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this));

    _this.onError = function (error) {
      if (error.syscall !== 'listen') {
        throw error;
      }

      var bind = typeof _this.port === 'string' ? 'Pipe ' + _this.port : 'Port ' + _this.port; // handle specific listen errors with friendly messages

      switch (error.code) {
        case 'EACCES':
          console.error(bind + ' requires elevated privileges');
          process.exit(1);
          break;

        case 'EADDRINUSE':
          console.error(bind + ' is already in use');
          process.exit(1);
          break;

        default:
          throw error;
      }
    };

    _this.onListening = function () {
      var addr = _this.server.address();

      var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
      console.log('Listening on ' + bind);
    };

    for (var K in options) {
      _this[K] = options[K];
    }

    return _this;
  }

  _createClass(App, [{
    key: "initialize",
    value: function initialize() {
      this.app = express();
      this.port = _util_1.normalizePort(this.port);
      this.app.set('port', this.port);
      this.initializeMiddleware();
      this.initializeCors();
      this.initializeRoutes();
      this.initializeServer();
    }
  }, {
    key: "initializeMiddleware",
    value: function initializeMiddleware() {
      /* Initialize Middleware */
      this.app.use(express_middleware_1.cookieParser());
      this.app.use(express_middleware_1.bodyParser.json());
      this.app.use(express_middleware_1.bodyParser.urlencoded({
        extended: true
      }));
      this.app.use(express_middleware_1.expressValidator());
    }
  }, {
    key: "initializeRoutes",
    value: function initializeRoutes() {
      this.app.use('/', Routes.index);
    }
  }, {
    key: "initializeCors",
    value: function initializeCors() {
      var _this2 = this;

      /* Allow CORS */
      this.app.use(function (req, res, next) {
        res.header('Access-Control-Allow-Origin', _this2.cors.origin);
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        next();
      });
    }
  }, {
    key: "initializeServer",
    value: function initializeServer() {
      this.server = this.createServer();
      this.server.listen(this.port);
      this.server.on('error', this.onError);
      this.server.on('listening', this.onListening);
    }
  }, {
    key: "createServer",
    value: function createServer() {
      if (this.useHttps) {
        var _key = fs.readFileSync(this.key);

        var _cert = fs.readFileSync(this.cert);

        return https.createServer({
          key: _key,
          cert: _cert
        }, this.app);
      }

      return http.createServer(this.app);
    }
  }]);

  return App;
}(app_config_1.AppConfig);

exports.default = App;
//# sourceMappingURL=app.js.map

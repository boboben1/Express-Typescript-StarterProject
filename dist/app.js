"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var fs = _interopRequireWildcard(require("fs"));

var http = _interopRequireWildcard(require("http"));

var https = _interopRequireWildcard(require("https"));

var _app = require("./app.config");

var express = _interopRequireWildcard(require("express"));

var _express2 = require("./express.middleware");

var _util = require("./util");

var Routes = _interopRequireWildcard(require("./routes"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var App =
/*#__PURE__*/
function (_AppConfig) {
  _inherits(App, _AppConfig);

  function App(options) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this));

    for (var K in options) {
      _this[K] = options[K];
    }

    _this.initialize();

    return _this;
  }

  _createClass(App, [{
    key: "initialize",
    value: function initialize() {
      this.app = express();
      this.port = (0, _util.normalizePort)(this.port);
      this.app.set('port', this.port);
      this.initializeMiddleware();
      this.initializeCors();
      this.initializeRoutes();
    }
  }, {
    key: "initializeMiddleware",
    value: function initializeMiddleware() {
      /* Initialize Middleware */
      this.app.use((0, _express2.cookieParser)());
      this.app.use(_express2.bodyParser.json());
      this.app.use(_express2.bodyParser.urlencoded({
        extended: true
      }));
      this.app.use((0, _express2.expressValidator)());
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
  }, {
    key: "onError",
    value: function onError(error) {
      if (error.syscall !== 'listen') {
        throw error;
      }

      var bind = typeof this.port === 'string' ? 'Pipe ' + this.port : 'Port ' + this.port; // handle specific listen errors with friendly messages

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
    }
  }, {
    key: "onListening",
    value: function onListening() {
      var addr = this.server.address();
      var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
      console.log('Listening on ' + bind);
    }
  }]);

  return App;
}(_app.AppConfig);

exports.default = App;
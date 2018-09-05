"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.normalizePort = function (val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};
//# sourceMappingURL=app.js.map

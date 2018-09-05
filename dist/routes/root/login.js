"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.use = function (route) {
  route.get("/login", function (req, res, next) {
    res.send({
      hello: "world"
    });
  });
};
//# sourceMappingURL=login.js.map

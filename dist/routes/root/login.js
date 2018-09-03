"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.use = void 0;

var use = function use(route) {
  route.get("/login", function (req, res, next) {
    res.send({
      hello: "world"
    });
  });
};

exports.use = use;
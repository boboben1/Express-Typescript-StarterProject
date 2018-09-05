"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.use = function (route) {
  route.get("/apifunc", function (req, res, next) {
    res.send({
      hello: "world"
    });
  });
};
//# sourceMappingURL=apifunc.js.map

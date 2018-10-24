"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.use = route => {
  route.get("/apifunc", (req, res, next) => {
    res.send({
      hello: "world"
    });
  });
};
//# sourceMappingURL=apifunc.js.map

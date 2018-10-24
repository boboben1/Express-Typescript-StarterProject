"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.use = route => {
  route.get("/login", (req, res, next) => {
    res.send({
      hello: "world"
    });
  });
};
//# sourceMappingURL=login.js.map

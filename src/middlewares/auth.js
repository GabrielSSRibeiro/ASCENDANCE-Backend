const jwt = require("jsonwebtoken");
const User = require("../models/User");

module.exports = (req, res, next) => {
  if (req.path === "/users") {
    return next();
  }

  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).send({ error: "No token provided" });
  }

  const parts = authHeader.split(" ");

  if (!parts.length === 2) {
    return res.status(401).send({ error: "Token error" });
  }

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).send({ error: "Token malformated" });
  }

  jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
    if (err) {
      return res.status(401).send({ error: "Token invalid" });
    }

    req.userId = decoded.id;
    req.user = decoded.user;
    return next();
  });
};

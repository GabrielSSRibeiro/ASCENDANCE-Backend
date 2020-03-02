const { Router } = require("express");
const routes = Router();
const UserController = require("../controllers/UserController");
const GameController = require("../controllers/GameController");

routes.get("/", (req, res) => {
  landingPage = "Hello World";
  return res.json(landingPage);
});

routes.get("/users", UserController.index);
routes.post("/users", UserController.store);

routes.get("/gm-games", GameController.index);
routes.post("/gm-games", GameController.store);

routes.get("/gm-panel", GameController.show);

routes.put("/gm-management", GameController.update);

module.exports = routes;

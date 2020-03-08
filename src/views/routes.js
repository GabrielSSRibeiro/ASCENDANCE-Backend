const { Router } = require("express");
const routes = Router();
const UserController = require("../controllers/UserController");
const GameController = require("../controllers/GameController");

routes.get("/", (req, res) => {
  landingPage = "Hello World";
  return res.json(landingPage);
});

routes.get("/users", UserController.index);
routes.get("/user", UserController.show);
routes.post("/users", UserController.store);

routes.get("/player-games", GameController.indexPlayer);
routes.get("/gm-games", GameController.indexGM);
routes.post("/gm-games", GameController.store);
routes.delete("/player-games", GameController.deletePlayer);
routes.delete("/gm-games", GameController.deleteGM);

routes.get("/gm-panel", GameController.show);

routes.put("/gm-management", GameController.update);

module.exports = routes;

const { Router } = require("express");
const routes = Router();
const multer = require("multer");
const multerConfig = require("../../config/multer");
const upload = multer(multerConfig);
const AuthMiddleware = require("../middlewares/auth");

const UserController = require("../controllers/UserController");
const GameController = require("../controllers/GameController");
const CharacterController = require("../controllers/CharacterController");

routes.use(AuthMiddleware);

routes.get("/users", UserController.index);
routes.post("/users", UserController.store);

routes.get("/player-games", GameController.indexPlayer);
routes.get("/gm-games", GameController.indexGM);
routes.post("/gm-games", GameController.store);
routes.delete("/player-games", GameController.deletePlayer);
routes.delete("/gm-games", GameController.deleteGM);

//CharCreation
routes.put("/char-creation", upload.single("avatar"), CharacterController.update);

// GM
routes.get("/gm-panel", GameController.show);
routes.put("/gm-management", GameController.update);

//player
routes.get("/player-character", CharacterController.show);

module.exports = routes;

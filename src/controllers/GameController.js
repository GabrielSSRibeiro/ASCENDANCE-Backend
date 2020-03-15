const Game = require("../models/Game");
const User = require("../models/User");

module.exports = {
  //lista de jogos GM
  async indexGM(req, res) {
    const { user } = req.query;

    const games = await Game.find({
      user
    });

    return res.json(games);
  },
  //lista de jogos que o jogador está na party
  async indexPlayer(req, res) {
    const { user } = req.query;

    const games = await Game.find({
      "party.user": user
    });

    return res.json(games);
  },

  // party de um jogo especifico
  async show(req, res) {
    const { user, name } = req.query;

    const game = await Game.findOne({
      user,
      name
    });

    return res.json(game);
  },

  //criando novo jogo
  async store(req, res) {
    const { user, name } = req.body;

    let newGame = await Game.findOne({ user, name });

    if (!newGame) {
      newGame = await Game.create({
        user,
        name
      });
    } else {
      newGame = "";
    }

    return res.json(newGame);
  },

  //adicionando membros a party
  async update(req, res) {
    const { user, name, playerUser } = req.body;

    const foundPlayer = await User.findOne({ nickName: playerUser });

    let game;
    if (foundPlayer) {
      // add to existing party
      game = await Game.findOneAndUpdate(
        { user, name },
        { $push: { party: { user: playerUser } } },
        { new: true }
      );
    } else {
      game = "";
    }

    return res.json(game);
  },

  // deletar um jogo do jogador
  async deletePlayer(req, res) {
    let { name, playerUser } = req.query;

    const game = await Game.findOneAndUpdate(
      { name },
      { $pull: { party: { user: playerUser } } },
      { new: true }
    );

    return res.json(game);
  },

  // deletar um jogo do GM
  async deleteGM(req, res) {
    const { user, name } = req.query;

    await Game.deleteOne({
      user,
      name
    });

    const games = await Game.find({
      user
    });

    return res.json(games);
  }
};

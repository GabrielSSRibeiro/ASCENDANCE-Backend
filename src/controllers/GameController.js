const Game = require("../models/Game");

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
    const { party } = req.query;

    const games = await Game.find({
      party
    });

    return res.json(games);
  },

  // party de um jogo especifico
  async show(req, res) {
    const { user, name } = req.query;

    const games = await Game.findOne({
      user,
      name
    });

    return res.json(games);
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
      newGame = { message: "Jogo já existe." };
    }

    return res.json(newGame);
  },

  //adicionando membros a party
  async update(req, res) {
    const { user, name, newParty } = req.body;

    let game = await Game.findOne({ user, name });

    const party = game.party.concat(newParty);

    await Game.updateOne({ user, name }, { party });

    return res.json(party);
  }
};

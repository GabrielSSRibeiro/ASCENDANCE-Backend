const Game = require("../models/Game");
const User = require("../models/User");
const { sendMessage } = require("../views/websocket");
const { cloudinary } = require("../../config/cloudinary");

module.exports = {
  //lista de jogos GM
  async indexGM(req, res) {
    const GM = req.user;

    const games = await Game.find({
      GM,
    });

    return res.json(games);
  },
  //lista de jogos que o jogador está na party
  async indexPlayer(req, res) {
    const user = req.user;

    const games = await Game.find({
      "party.user": user,
    });

    return res.json(games);
  },

  // party de um jogo especifico
  async show(req, res) {
    const { title } = req.query;
    const GM = req.user;

    const game = await Game.findOne({
      GM,
      title,
    });

    return res.json(game);
  },

  //criando novo jogo
  async store(req, res) {
    const { title } = req.body;
    const GM = req.user;

    let newGame = await Game.findOne({ GM, title });

    if (!newGame) {
      newGame = await Game.create({
        GM,
        title,
      });
    } else {
      newGame = "";
    }

    return res.json(newGame);
  },

  //adicionando membros a party
  async update(req, res) {
    const { title, playerUser } = req.body;
    const GM = req.user;

    const foundPlayer = await User.findOne({ nickName: playerUser });
    const partyMember = await Game.findOne({ GM, title, "party.user": playerUser });

    let game;
    if (foundPlayer) {
      if (!partyMember) {
        // add to existing party
        game = await Game.findOneAndUpdate(
          { GM, title },
          { $push: { party: { user: playerUser } } },
          { new: true }
        );

        //socket message to the members of the game
        sendMessage(game.party, "newMember");
      } else {
        game = "member";
      }
    } else {
      game = "";
    }

    return res.json(game);
  },

  // deletar um jogo do jogador
  async deletePlayer(req, res) {
    let { title, GM, playerUser } = req.query;

    //defining the user
    if (!playerUser) {
      playerUser = req.user;
    } else {
      GM = req.user;
    }

    const game = await Game.findOneAndUpdate(
      { title, GM },
      { $pull: { party: { user: playerUser } } },
      { new: true }
    );

    //     delete avatar
    const fileId = [title, GM, playerUser].join("-");
    await cloudinary.v2.uploader.destroy(`ESSENCIA_avatars/${fileId}`, {
      invalidate: true,
    });

    return res.json(game);
  },

  // deletar um jogo do GM
  async deleteGM(req, res) {
    const { title } = req.query;
    const GM = req.user;

    const deletedGame = await Game.findOneAndDelete({
      GM,
      title,
    });

    const games = await Game.find({
      GM,
    });

    //     delete avatars
    await Promise.all(
      deletedGame.party.map(async (player) => {
        const fileId = [title, GM, player.user].join("-");
        await cloudinary.v2.uploader.destroy(`ESSENCIA_avatars/${fileId}`, {
          invalidate: true,
        });
      })
    );

    return res.json(games);
  },
};

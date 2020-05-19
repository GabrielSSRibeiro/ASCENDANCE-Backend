const Game = require("../models/Game");

module.exports = {
  //atualizar personagem
  async update(req, res) {
    const { title, GM, user, ...args } = req.body;
    let game;

    await Promise.all(
      Object.entries(args).map(async (arg) => {
        let field = "party.$." + arg[0];

        game = await Game.findOneAndUpdate(
          { title, GM, party: { $elemMatch: { user } } },
          {
            $set: { [field]: arg[1] },
          },
          { new: true }
        );
      })
    );

    return res.json(game);
  },
};

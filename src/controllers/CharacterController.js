const fs = require("fs");
const { cloudinary } = require("../../config/cloudinary");
const Game = require("../models/Game");

module.exports = {
  //atualizar personagem
  async update(req, res) {
    const { title, GM, user, ...args } = req.body;

    // add avatar url to agrs
    // if (req.file) {
    //   const filePath = req.file.path;
    //   const fileId = [title, GM, user].join("-");

    //   const uploadedResponse = await cloudinary.v2.uploader.upload(filePath, {
    //     upload_preset: "essencia_avatars",
    //     public_id: fileId,
    //   });

    //   fs.unlinkSync(filePath);

    //   const avatar = uploadedResponse.secure_url;
    //   args.avatar = avatar;
    // }

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

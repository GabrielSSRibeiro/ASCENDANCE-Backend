const User = require("../models/User");

module.exports = {
  async index(req, res) {
    //fazer login
    const { nickName, password } = req.query;
    let user = await User.findOne({ nickName });

    return res.json(user);
  },

  async show(req, res) {
    //
    const { nickName } = req.query;
    let user = await User.findOne({ nickName });

    return res.json(user);
  },

  //add novo usuario
  async store(req, res) {
    const { nickName, email, password } = req.body;

    let newUser = await User.findOne({ nickName });

    if (!newUser) {
      newUser = await User.create({
        nickName,
        email,
        password
      });
    } else {
      newUser = "";
    }

    return res.json(newUser);
  }
};

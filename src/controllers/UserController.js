const User = require("../models/User");
const bcrypt = require("bcryptjs");
const sendMail = require("../views/mailer");

module.exports = {
  async index(req, res) {
    //fazer login
    const { nickName, password } = req.query;
    let user = await User.findOne({ nickName });

    if (user) {
      //check encrypt
      if (await bcrypt.compare(password, user.password)) {
        user = nickName;
      } else {
        user = "incorrect";
      }
    }

    return res.json(user);
  },

  async show(req, res) {
    //pegar usuario logado
    const { nickName } = req.query;
    let user = await User.findOne({ nickName });

    return res.json(user);
  },

  //add novo usuario
  async store(req, res) {
    const { nickName, email, password } = req.body;

    let newUser = await User.findOne({ nickName });

    if (!newUser) {
      const encryptPassword = await bcrypt.hash(password, 5);

      newUser = await User.create({
        nickName,
        email,
        password: encryptPassword,
      });

      // sendMail({
      //   from: "Gabriel Ribeiro <gabriel210292@gmail.com>",
      //   to: email,
      //   subject: "Welcome!",
      //   template: "auth/signUp",
      // });
      // add convert to text
    } else {
      newUser = "";
    }

    return res.json(newUser);
  },
};

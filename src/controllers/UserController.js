const User = require("../models/User");
const bcrypt = require("bcryptjs");
const sendMail = require("../views/mailer");
const jwt = require("jsonwebtoken");

function generateToken(params) {
  return jwt.sign(params, process.env.JWT_SECRET, { expiresIn: 86400 });
}

module.exports = {
  async index(req, res) {
    //fazer login
    const { nickName, password } = req.query;

    let user = await User.findOne({ nickName });

    if (!user) {
      return res.json(user);
    }

    //check encrypt
    if (password && (await bcrypt.compare(password, user.password))) {
      return res.json({ user: nickName, token: generateToken({ id: user._id, user: nickName }) });
    } else {
      return res.json("incorrect");
    }
  },

  //add novo usuario
  async store(req, res) {
    const { nickName, email, password } = req.body;

    let newUser = await User.findOne({ nickName });

    if (newUser) {
      return res.json("");
    }

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

    return res.json({ user: newUser, token: generateToken({ id: newUser._id }) });
  },
};

const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema({
  user: { String },
  name: { String },
  party: [String]
});

module.exports = mongoose.model("Game", GameSchema);

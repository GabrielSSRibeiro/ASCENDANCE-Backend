const mongoose = require("mongoose");
const CharacterSchema = require("./Character");

const GameSchema = new mongoose.Schema({
  user: String,
  name: String,

  party: [CharacterSchema],
  encounter: [String],

  taticalMap: Boolean,

  d4: Number,
  d6: Number,
  d8: Number,
  d10: Number,
  d12: Number,
  d20: Number
});

module.exports = mongoose.model("Game", GameSchema);

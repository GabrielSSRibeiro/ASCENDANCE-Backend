const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema({
  user: String,
  name: String,
  party: [String],
  taticalMap: Boolean,
  d4: Number,
  d6: Number,
  d8: Number,
  d10: Number,
  d12: Number,
  d20: Number
});

module.exports = mongoose.model("Game", GameSchema);

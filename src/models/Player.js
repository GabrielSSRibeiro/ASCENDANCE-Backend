const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
  name: String
});

module.exports = mongoose.model("Player", PlayerSchema);

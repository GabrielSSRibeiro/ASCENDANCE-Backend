const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  name: String,
  specialty: Boolean,

  attack: Number,
  damage: Number,
  dodge: Number,
  defense: Number,
  intelligence: Number,
  strength: Number,
  charisma: Number,
  constitution: Number,
  dexterity: Number,
  wisdom: Number,

  unique: String,
  unidentitied: Boolean
});

module.exports = ItemSchema;

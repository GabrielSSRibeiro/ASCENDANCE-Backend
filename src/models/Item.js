const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  name: { type: String, default: "" },
  specialty: { type: Boolean, default: false },

  attack: { type: Number, default: 0 },
  damage: { type: Number, default: 0 },
  evade: { type: Number, default: 0 },
  defense: { type: Number, default: 0 },
  intelligence: { type: Number, default: 0 },
  strength: { type: Number, default: 0 },
  charisma: { type: Number, default: 0 },
  constitution: { type: Number, default: 0 },
  dexterity: { type: Number, default: 0 },
  wisdom: { type: Number, default: 0 },

  unique: { type: String, default: "" },
  unidentitied: { type: Boolean, default: false },
});

module.exports = ItemSchema;

const mongoose = require("mongoose");

const WeaponSchema = new mongoose.Schema({
  name: { type: String, default: "" },
  specialty: { type: Boolean, default: false },
  rarity: { type: Number, default: 0 },

  afix1: { name: { type: String, default: null }, value: { type: Number, default: 0 } },
  afix2: { name: { type: String, default: null }, value: { type: Number, default: 0 } },
  afix3: { name: { type: String, default: null }, value: { type: Number, default: 0 } },

  uniqueFeat: { name: { type: String, default: null }, value: { type: Number, default: 0 } },
  unique: { type: String, default: "" },
});

const protectionSchema = new mongoose.Schema({
  name: { type: String, default: "" },
  specialty: { type: Boolean, default: false },
  rarity: { type: Number, default: 0 },

  afix1: { name: { type: String, default: null }, value: { type: Number, default: 0 } },
  afix2: { name: { type: String, default: null }, value: { type: Number, default: 0 } },
  afix3: { name: { type: String, default: null }, value: { type: Number, default: 0 } },

  uniqueFeat: { name: { type: String, default: null }, value: { type: Number, default: 0 } },
  unique: { type: String, default: "" },
});

const accesorySchema = new mongoose.Schema({
  name: { type: String, default: "" },
  rarity: { type: Number, default: 0 },

  afix1: { name: { type: String, default: null }, value: { type: Number, default: 0 } },

  unique: { type: String, default: "" },
});

const potionSchema = new mongoose.Schema({
  name: { type: String, default: "" },
  rarity: { type: Number, default: 0 },

  afix1: { name: { type: String, default: null }, value: { type: Number, default: 0 } },

  unique: { type: String, default: "" },
});

const scrollSchema = new mongoose.Schema({
  name: { type: String, default: "" },
  rarity: { type: Number, default: 0 },

  afix1: { name: { type: String, default: null }, value: { type: Number, default: 0 } },

  unique: { type: String, default: "" },
});

module.exports = { WeaponSchema, protectionSchema, accesorySchema, potionSchema, scrollSchema };

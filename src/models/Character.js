const mongoose = require("mongoose");
const ItemSchema = require("./Item");

const CharacterSchema = new mongoose.Schema({
  user: String,
  name: String,
  avatar: String,
  notesGM: { type: String, default: "" },

  level: { type: Number, default: 1 },
  totalLife: Number,
  currentLife: Number,
  totalEssence: { type: Number, default: 10 },
  currentEssence: Number,
  exaustion: { type: Number, default: 0 },
  inspiration: { type: Number, default: 0 },

  prestige: { type: Number, default: 1 },
  feats: [String], //propria schema com stats pq alterar valores?
  enhancingAscension: Number,
  modifingAscension: Number,

  race: { type: String, default: "" },
  lifeDie: { type: Number, default: 0 },
  class: { type: String, default: "" },
  defensiveSpecialty: { type: String, default: "" },
  ofensiveSpecialty: { type: String, default: "" },

  past: { type: String, default: "" },
  gameModifier: { type: Number, default: 10 },
  personality: { type: String, default: "" },
  occupation: { type: String, default: "" },
  goal: { type: String, default: "" },
  flaws: { type: String, default: "" },

  firstAlignment: { type: String, default: "" },
  secondAlignment: { type: String, default: "" },
  intelligence: { type: Number, default: 0 },
  strength: { type: Number, default: 0 },
  charisma: { type: Number, default: 0 },
  constitution: { type: Number, default: 0 },
  dexterity: { type: Number, default: 0 },
  wisdom: { type: Number, default: 0 },

  dsciplines: { type: Number, default: 0 },
  maximumPower: { type: Number, default: 50 },
  feel: { type: Number, default: 0 },
  create: { type: Number, default: 0 },
  change: { type: Number, default: 0 },
  control: { type: Number, default: 0 },

  ofensiveItems: [ItemSchema],
  movementSpeed: String,
  attack: { type: Number, default: 0 },
  damage: { type: Number, default: 0 },
  defensiveItems: [ItemSchema],
  initiative: String,
  dodge: { type: Number, default: 0 },
  defense: { type: Number, default: 0 },
  otherItems: [ItemSchema],

  equipWeapon1: { type: ItemSchema, default: null },
  equipWeapon2: { type: ItemSchema, default: null },
  equipArmor1: { type: ItemSchema, default: null },
  equipArmor2: { type: ItemSchema, default: null },
  equipOther: { type: ItemSchema, default: null },

  money1: { type: Number, default: 0 },
  money2: { type: Number, default: 0 },
  money3: { type: Number, default: 0 },
  money4: { type: Number, default: 0 },
  money5: { type: Number, default: 0 },
  moneyX: { type: Number, default: 0 }
});

module.exports = CharacterSchema;

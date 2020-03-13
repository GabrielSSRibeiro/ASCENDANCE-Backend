const mongoose = require("mongoose");
const ItemSchema = require("./Item");

const CharacterSchema = new mongoose.Schema({
  user: String,
  name: String,
  avatar: String,
  notesGM: String,

  level: Number,
  totalLife: Number,
  currentLife: Number,
  totalEssence: Number,
  currentEssence: Number,
  exaustion: Number,
  inspiration: Number,

  prestige: Number,
  feats: [String], //propria schema com stats pq alterar valores?
  enhancingAscension: Number,
  modifingAscension: Number,

  race: String,
  lifeDie: Number,
  class: String,
  defensiveSpecialty: String,
  ofensiveSpecialty: String,

  past: String,
  gameModifier: Number,
  firstAlignment: String,
  secondAlignment: String,
  intelligence: Number,
  strength: Number,
  charisma: Number,
  constitution: Number,
  dexterity: Number,
  wisdom: Number,

  dsciplines: Number,
  minimumPower: Number,
  maximumPower: Number,
  feel: Number,
  create: Number,
  change: Number,
  control: Number,

  ofensiveItems: [ItemSchema],
  movementSpeed: String,
  attack: Number,
  damage: Number,
  defensiveItems: [ItemSchema],
  initiative: String,
  dodge: Number,
  defense: Number,
  otherItems: [ItemSchema],

  equipWeapon1: ItemSchema,
  equipWeapon2: ItemSchema,
  equipArmor1: ItemSchema,
  equipArmor2: ItemSchema,
  equipOther: ItemSchema,

  money1: Number,
  money2: Number,
  money3: Number,
  money4: Number,
  money5: Number,
  moneyX: Number
});

module.exports = CharacterSchema;

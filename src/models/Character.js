const mongoose = require("mongoose");
const Item = require("./Item");

const CharacterSchema = new mongoose.Schema({
  user: String,
  game: String,
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

  ofensiveItems: [Item],
  movementSpeed: String,
  attack: Number,
  damage: Number,
  defensiveItems: [Item],
  initiative: String,
  dodge: Number,
  defense: Number,
  otherItems: [Item],

  equipWeapon1: Item,
  equipWeapon2: Item,
  equipArmor1: Item,
  equipArmor2: Item,
  equipOther: Item,

  money1: Number,
  money2: Number,
  money3: Number,
  money4: Number,
  money5: Number,
  moneyX: Number
});

module.exports = mongoose.model("Character", CharacterSchema);

const mongoose = require("mongoose");

const CharacterSchema = new mongoose.Schema({
  user: String,
  game: String,
  name: String,
  avatar: String,

  level: Number,
  totalLife: Number,
  currentLife: Number,
  totalEssence: Number,
  currentEssence: Number,
  exaustion: Number,
  inspiration: Number,

  size: String,
  behavior: String,
  lifeDie: Number,
  gameModifier: Number,
  singularEssence: String,

  passive1: String,
  passive2: String,
  passive3: String,
  passive4: String,

  active1: String,
  active2: String,
  active3: String,
  active4: String,

  intelligence: Number,
  strength: Number,
  charisma: Number,
  constitution: Number,
  dexterity: Number,
  wisdom: Number,

  movementSpeed: String,
  attack: Number,
  damage: Number,
  initiative: String,
  evade: Number,
  defense: Number,

  currentAction1: String,
  currentAction2: String,
});

module.exports = mongoose.model("Creature", CreatureSchema);

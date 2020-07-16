module.exports = {
  totalLife: Number,
  currentLife: Number,
  totalEssence: { type: Number, default: 10 },
  currentEssence: Number,
  exaustion: { type: Number, default: 0 },
  inspiration: { type: Number, default: 0 },
  movementSpeed: String,
  attack: { type: Number, default: 0 },
  damage: { type: Number, default: 0 },
  initiative: String,
  dodge: { type: Number, default: 0 },
  defense: { type: Number, default: 0 },
};

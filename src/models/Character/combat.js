module.exports = {
  totalLife: { type: Number, default: 1 },
  currentLife: { type: Number, default: 1 },
  totalEssence: { type: Number, default: 10 },
  currentEssence: { type: Number, default: 10 },
  currentFitness: { type: Number, default: 11 },
  fitness: { type: Number, default: 11 },

  currentMmovement: String,
  movement: String,
  currentAttack: { type: Number, default: 0 },
  attack: { type: Number, default: 0 },
  currentDamage: { type: Number, default: 0 },
  damage: { type: Number, default: 0 },

  currentInitiative: String,
  initiative: String,
  currentDodge: { type: Number, default: 0 },
  dodge: { type: Number, default: 0 },
  currentDefense: { type: Number, default: 0 },
  defense: { type: Number, default: 0 },
};

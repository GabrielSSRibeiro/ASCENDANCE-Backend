const {
  WeaponSchema,
  protectionSchema,
  accesorySchema,
  potionSchema,
  scrollSchema,
} = require("../Item");

module.exports = {
  weapons: [WeaponSchema],
  protections: [protectionSchema],
  accessories: [accesorySchema],
  potions: [potionSchema],
  scrolls: [scrollSchema],
  // materials: [ItemSchema],
};

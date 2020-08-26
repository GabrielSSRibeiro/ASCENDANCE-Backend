const {
  WeaponSchema,
  protectionSchema,
  accesorySchema,
  potionSchema,
  scrollSchema,
} = require("../Item");

module.exports = {
  equipWeapon1: { type: WeaponSchema, default: null },
  equipWeapon2: { type: WeaponSchema, default: null },
  equipArmor1: { type: protectionSchema, default: null },
  equipArmor2: { type: protectionSchema, default: null },
  equipAccessory1: { type: accesorySchema, default: null },
  equipAccessory2: { type: accesorySchema, default: null },
  equipAccessory3: { type: accesorySchema, default: null },
  equipAccessory4: { type: accesorySchema, default: null },
  equipPotion: { type: potionSchema, default: null },
  equipScroll: { type: scrollSchema, default: null },
};

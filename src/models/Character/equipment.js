const ItemSchema = require("../Item");

module.exports = {
  equipWeapon1: { type: ItemSchema, default: null },
  equipWeapon2: { type: ItemSchema, default: null },
  equipArmor1: { type: ItemSchema, default: null },
  equipArmor2: { type: ItemSchema, default: null },
  equipAccessory1: { type: ItemSchema, default: null },
  equipAccessory2: { type: ItemSchema, default: null },
  equipAccessory3: { type: ItemSchema, default: null },
  equipAccessory4: { type: ItemSchema, default: null },
  equipPotion: String,
  equipScroll: String,
};

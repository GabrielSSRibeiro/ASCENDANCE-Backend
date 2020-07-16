const mongoose = require("mongoose");

const general = require("./general");
const skills = require("./skills");
const combat = require("./combat");
const disciplines = require("./disciplines");
const equipment = require("./equipment");
const money = require("./money");
const inventory = require("./inventory");
const materials = require("./materials");
const atributes = require("./atributes");
const traits = require("./traits");

const CharacterSchema = new mongoose.Schema({
  ...general,

  ...skills,
  ...combat,
  ...disciplines,

  ...equipment,
  ...money,
  ...inventory,
  ...materials,

  ...atributes,
  ...traits,
});

module.exports = CharacterSchema;

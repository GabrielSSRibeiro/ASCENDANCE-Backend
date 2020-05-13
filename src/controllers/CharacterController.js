const Game = require("../models/Game");

module.exports = {
  //atualizar personagem
  async update(req, res) {
    const {
      user,
      title,
      GM,
      race,
      lifeDie,
      disciplines,
      selectedClass,
      feel,
      create,
      change,
      control,
      defensiveSpecialty,
      ofensiveSpecialty,
      past,
      gameModifier,
      personality,
      occupation,
      goal,
      flaws,
      firstAlignment,
      secondAlignment,
      intelligence,
      strength,
      charisma,
      constitution,
      dexterity,
      wisdom,
      avatar,
      name,
      level,
    } = req.body;
    let game = "";

    // race
    if (race) {
      game = await Game.findOneAndUpdate(
        { title, GM, party: { $elemMatch: { user } } },
        {
          $set: { "party.$.race": race },
        },
        { new: true }
      );
    }
    // lifeDie
    if (lifeDie) {
      game = await Game.findOneAndUpdate(
        { title, party: { $elemMatch: { user } } },
        {
          $set: { "party.$.lifeDie": lifeDie },
        },
        { new: true }
      );
    }
    // disciplines
    if (disciplines) {
      game = await Game.findOneAndUpdate(
        { title, party: { $elemMatch: { user } } },
        {
          $set: { "party.$.disciplines": disciplines },
        },
        { new: true }
      );
    }
    // class
    if (selectedClass) {
      game = await Game.findOneAndUpdate(
        { title, party: { $elemMatch: { user } } },
        {
          $set: { "party.$.class": selectedClass },
        },
        { new: true }
      );
    }
    // feel
    if (feel) {
      game = await Game.findOneAndUpdate(
        { title, party: { $elemMatch: { user } } },
        {
          $set: { "party.$.feel": feel },
        },
        { new: true }
      );
    }
    // create
    if (create) {
      game = await Game.findOneAndUpdate(
        { title, party: { $elemMatch: { user } } },
        {
          $set: { "party.$.create": create },
        },
        { new: true }
      );
    }
    // change
    if (change) {
      game = await Game.findOneAndUpdate(
        { title, party: { $elemMatch: { user } } },
        {
          $set: { "party.$.change": change },
        },
        { new: true }
      );
    }
    // control
    if (control) {
      game = await Game.findOneAndUpdate(
        { title, party: { $elemMatch: { user } } },
        {
          $set: { "party.$.control": control },
        },
        { new: true }
      );
    }
    // defensiveSpecialty
    if (defensiveSpecialty) {
      game = await Game.findOneAndUpdate(
        { title, party: { $elemMatch: { user } } },
        {
          $set: { "party.$.defensiveSpecialty": defensiveSpecialty },
        },
        { new: true }
      );
    }
    // ofensiveSpecialty
    if (ofensiveSpecialty) {
      game = await Game.findOneAndUpdate(
        { title, party: { $elemMatch: { user } } },
        {
          $set: { "party.$.ofensiveSpecialty": ofensiveSpecialty },
        },
        { new: true }
      );
    }
    // past
    if (past) {
      game = await Game.findOneAndUpdate(
        { title, party: { $elemMatch: { user } } },
        {
          $set: { "party.$.past": past },
        },
        { new: true }
      );
    }
    // gameModifier
    if (gameModifier) {
      game = await Game.findOneAndUpdate(
        { title, party: { $elemMatch: { user } } },
        {
          $set: { "party.$.gameModifier": gameModifier },
        },
        { new: true }
      );
    }
    // personality
    if (personality) {
      game = await Game.findOneAndUpdate(
        { title, party: { $elemMatch: { user } } },
        {
          $set: { "party.$.personality": personality },
        },
        { new: true }
      );
    }
    // occupation
    if (occupation) {
      game = await Game.findOneAndUpdate(
        { title, party: { $elemMatch: { user } } },
        {
          $set: { "party.$.occupation": occupation },
        },
        { new: true }
      );
    }
    // goal
    if (goal) {
      game = await Game.findOneAndUpdate(
        { title, party: { $elemMatch: { user } } },
        {
          $set: { "party.$.goal": goal },
        },
        { new: true }
      );
    }
    // flaws
    if (flaws) {
      game = await Game.findOneAndUpdate(
        { title, party: { $elemMatch: { user } } },
        {
          $set: { "party.$.flaws": flaws },
        },
        { new: true }
      );
    }
    // firstAlignment
    if (firstAlignment) {
      game = await Game.findOneAndUpdate(
        { title, party: { $elemMatch: { user } } },
        {
          $set: { "party.$.firstAlignment": firstAlignment },
        },
        { new: true }
      );
    }
    // secondAlignment
    if (secondAlignment) {
      game = await Game.findOneAndUpdate(
        { title, party: { $elemMatch: { user } } },
        {
          $set: { "party.$.secondAlignment": secondAlignment },
        },
        { new: true }
      );
    }
    // intelligence
    if (intelligence) {
      game = await Game.findOneAndUpdate(
        { title, party: { $elemMatch: { user } } },
        {
          $set: { "party.$.intelligence": intelligence },
        },
        { new: true }
      );
    }
    // strength
    if (strength) {
      game = await Game.findOneAndUpdate(
        { title, party: { $elemMatch: { user } } },
        {
          $set: { "party.$.strength": strength },
        },
        { new: true }
      );
    }
    // charisma
    if (charisma) {
      game = await Game.findOneAndUpdate(
        { title, party: { $elemMatch: { user } } },
        {
          $set: { "party.$.charisma": charisma },
        },
        { new: true }
      );
    }
    // constitution
    if (constitution) {
      game = await Game.findOneAndUpdate(
        { title, party: { $elemMatch: { user } } },
        {
          $set: { "party.$.constitution": constitution },
        },
        { new: true }
      );
    }
    // dexterity
    if (dexterity) {
      game = await Game.findOneAndUpdate(
        { title, party: { $elemMatch: { user } } },
        {
          $set: { "party.$.dexterity": dexterity },
        },
        { new: true }
      );
    }
    // wisdom
    if (wisdom) {
      game = await Game.findOneAndUpdate(
        { title, party: { $elemMatch: { user } } },
        {
          $set: { "party.$.wisdom": wisdom },
        },
        { new: true }
      );
    }
    // avatar
    if (avatar) {
      game = await Game.findOneAndUpdate(
        { title, party: { $elemMatch: { user } } },
        {
          $set: { "party.$.avatar": avatar },
        },
        { new: true }
      );
    }
    // name
    if (name) {
      game = await Game.findOneAndUpdate(
        { title, party: { $elemMatch: { user } } },
        {
          $set: { "party.$.name": name },
        },
        { new: true }
      );
    }
    // level
    if (level || level === 0) {
      game = await Game.findOneAndUpdate(
        { title, party: { $elemMatch: { user } } },
        {
          $set: { "party.$.level": level },
        },
        { new: true }
      );
    }

    return res.json(game);
  },
};

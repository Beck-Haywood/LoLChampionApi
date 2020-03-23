const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Populate = require("../utils/autopopulate.js");


const ChampSchema = new Schema({
  name: { type: String },
  title: { type: String },
  icon: { type: String },
  roles: { type: String },
  resource_bar: { type: String },
  aa_type: { type: String },
  adaptive_type: { type: String },
  price_be: { type: String },
  price_rp: { type: String },
  release_date: { type: String },
  last_changed: { type: String },
  starting_health: { type: String },
  starting_health_regen: { type: String },
  starting_armor: {type: String},
  starting_magic_resist: { type: String },
  starting_attack_damage: { type: String },
  movementspeed: { type: String },
  attack_range: { type: String },
  base_attack_speed: { type: String },
  attack_speed_ratio: { type: String },
  attack_windup: { type: String },
  attack_speed_bonus: { type: String },
  gameplay_radius: { type: String },
  pathing_radius: { type: String },
  selection_radius: { type: String },
  auto_attack_radius: { type: String }

  // addedbdy : { type:String },
  // health : { type:String },
})


Champ = mongoose.model('Champ', ChampSchema);

module.exports = Champ;
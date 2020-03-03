const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Populate = require("../utils/autopopulate.js");


// TODO: Replace this with actual model

const ChampSchema = new Schema({
  name: { type: String },
  title: { type: String },
  addedby : { type:String },
  health : { type:String },
})


Champ = mongoose.model('Champ', ChampSchema);

module.exports = Champ;
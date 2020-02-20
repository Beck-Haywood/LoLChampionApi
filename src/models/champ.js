const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// TODO: Replace this with actual model

const ChampSchema = new Schema({
  name: { type: String },
  title: { type: String }
})

Champ = mongoose.model('Champ', ChampSchema);

module.exports = Champ;
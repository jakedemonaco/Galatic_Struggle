var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CardSchema = new Schema({
  name: {
    type: String
  },
  quantity: {
    type: Number
  },
  energy_cost: {
  	type: Number
  },
  range: {
  	type: Number
  },
  health: {
  	type: Number
  },
  power: {
  	type: Number
  },
  special_ability: {
  	type: Boolean,
  	deafaut: false
  }
});

var Cards = mongoose.model("Cards", CardSchema);
module.exports =Cards;
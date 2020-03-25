'use strict';

 const mongoose = require ('mongoose');
 const Schema = mongoose.Schema;

 const CardioSchema = new Schema({
     type: String,
     name: String,
     distance: Number,
     duration: Number
 });

 module.exports = mongoose.model('Cardio', CardioSchema);


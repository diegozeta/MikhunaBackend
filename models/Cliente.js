'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClienteSchema = Schema({
    cliente_tipo:String,
    user_id:Number,

});

module.exports = mongoose.model('Project',ClienteSchema);

//Mongoose automáticamente, cambia Project => projects en la base de datos
//en MongoDB


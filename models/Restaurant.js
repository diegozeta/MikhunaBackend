'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RestaurantSchema = Schema({
    restaurant_puntuacion:Number,
    user_id:Number,
});

module.exports = mongoose.model('Project',RestaurantSchema);

//Mongoose automáticamente, cambia Project => projects en la base de datos
//en MongoDB


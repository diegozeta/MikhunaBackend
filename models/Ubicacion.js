'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UbicacionSchema = Schema({
    ubicacion_latitud:String,
    ubicacion_longitud:String,
});

module.exports = mongoose.model('Project',UbicacionSchema);

//Mongoose automáticamente, cambia Project => projects en la base de datos
//en MongoDB


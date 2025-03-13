const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    id: Number,
    nombre: String,
    edad: Number,
    ocupacion: String
  });

  module.exports = mongoose.model('usuarios', usuarioSchema);
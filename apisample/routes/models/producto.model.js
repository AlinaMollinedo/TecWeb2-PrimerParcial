const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
    id: Number,
    nombre: String,
    precio: Number,
    categoria: String
  });

  module.exports = mongoose.model('productos', productoSchema);
const express = require('express');
const router = express.Router();

var Usuario = require('./models/usuario.model');
var Producto = require('./models/producto.model');

router.get('/', async (req, res) => {
    try {
      const totalUsuarios = await Usuario.countDocuments();
      const totalProductos = await Producto.countDocuments();
      
      res.json({
        usuarios: totalUsuarios,
        productos: totalProductos
      });
    } catch (error) {
      res.status(500).json({ error: 'Error al contar documentos' });
    }
  });

  module.exports = router;
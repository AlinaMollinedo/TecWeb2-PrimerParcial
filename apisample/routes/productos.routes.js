const express = require('express');
const router = express.Router();

var Producto = require('./models/producto.model');
const productoModel = require('./models/producto.model');

// Obtener todos los productos (GET)
router.get('/', async (req, res) => {
  try {
    let users = await Producto.find({});
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({error: 'Error al cargar productos.'});
  }
});

// Obtener un producto por su ID (GET)
router.get('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    let user = await Producto.findOne({"id" : id});
    if (!user) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: 'Ha ocurrido un error.' });
  }
});

// Crear un nuevo producto (POST)
router.post('/', async (req, res) => {
  try {
    const user = new productoModel(req.body);
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ message: 'Ha ocurrido un error.' });
  }
});


// Actualizar un producto por su ID (PUT)
router.put('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const user = await Producto.findOneAndUpdate({ "id" : id }, req.body, { new: true });
    if (!user) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ message: 'Ha ocurrido un error.' });
  }
});

// Eliminar un producto por su ID (DELETE)
router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    let user = await Producto.findOneAndDelete({ "id" : id});
    if (!user) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.status(200).json({ message: 'Producto eliminado exitosamente' });
  } catch (err) {
    res.status(500).json({ message: 'Ha ocurrido un error.' });
  }
});

module.exports = router;
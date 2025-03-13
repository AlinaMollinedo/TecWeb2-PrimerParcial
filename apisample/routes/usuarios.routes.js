const express = require('express');
const router = express.Router();

var Usuario = require('./models/usuario.model');
const usuarioModel = require('./models/usuario.model');

// Obtener todos los usuarios (GET)
router.get('/', async (req, res) => {
  try {
    let users = await Usuario.find({});
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({error: 'Error al cargar usuarios.'});
  }
});

// Obtener un usuario por su ID (GET)
router.get('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    let user = await Usuario.findOne({"id" : id});
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: 'Ha ocurrido un error.' });
  }
});

// Crear un nuevo usuario (POST)
router.post('/', async (req, res) => {
  try {
    const user = new usuarioModel(req.body);
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ message: 'Ha ocurrido un error.' });
  }
});


// Actualizar un usuario por su ID (PUT)
router.put('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const user = await Usuario.findOneAndUpdate({ "id" : id }, req.body, { new: true });
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ message: 'Ha ocurrido un error.' });
  }
});

// Eliminar un usuario por su ID (DELETE)
router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    let user = await Usuario.findOneAndDelete({ "id" : id});
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.status(200).json({ message: 'Usuario eliminado exitosamente' });
  } catch (err) {
    res.status(500).json({ message: 'Ha ocurrido un error.' });
  }
});

module.exports = router;
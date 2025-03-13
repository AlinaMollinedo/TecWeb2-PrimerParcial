const express = require('express'); 
const usuariosRouter = require('./routes/usuarios.routes'); 
const productosRouter = require('./routes/productos.routes'); 
const contadoresRouter = require('./routes/contadores'); 

let contadorOperaciones = 0;

// Middleware que cuenta las operaciones realizadas
const contador = (req, res, next) => {
    contadorOperaciones++;
    console.log(`Operación ${contadorOperaciones}: ${req.method} ${req.url}`);
    next();
};

const app = express(); 

app.use(contador);

app.use(express.json()); //inicializar express con JSON
app.use('/api/usuarios', usuariosRouter);
app.use('/api/productos', productosRouter);
app.use('/api/contadores', contadoresRouter);

app.get('/api/operaciones', (req, res) => {
    res.json({ operacionesRealizadas: contadorOperaciones });
  });

module.exports = app;

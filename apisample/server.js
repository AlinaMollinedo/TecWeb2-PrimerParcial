require('dotenv').config();
const app = require('./app');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.MONGO_CONN_STRING).then(() => {
      console.log('Conectado a MongoDB');
      app.listen(PORT,()=>{
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
    })
    .catch((error) => {
      console.error('Error al conectarse a MongoDB:', error.message);
    });
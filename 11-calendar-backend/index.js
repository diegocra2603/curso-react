const express = require('express');
require('dotenv').config();

//Crear el servidor de expres

const app = express();

//Directorio Publico
app.use(express.static('public'));

//Lectura y parseo del Login
app.use(express.json());

//Rutas
app.use('/api/auth', require('./routes/auth'));
//crud : Eventos

//Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
})
const express = require('express');
require('dotenv').config();

console.log(process.env)

//Crear el servidor de expres

const app = express();

//Directorio Publico
app.use(express.static('public'));

//Rutas
// app.get('/', (req, res) => {
//     console.log('Se requier el /')
//     res.json({
//         ok: true
//     })
// })

//Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
})
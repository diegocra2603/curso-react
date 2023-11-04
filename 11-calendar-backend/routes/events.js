/*
    Rutas de Usuarios / Auth
    host + /api/events
*/

const { Router } = require('express');
const router = Router();
const { check } = require('express-validator');
const { obtenerEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');
const { validarJWT } = require('../middlewares/validar-jwt');

//Todas tienen que pasar por este midellware
router.use(validarJWT);

// Obtener Eventos
router.get('/', obtenerEventos);

//Crear Evento
router.post('/', crearEvento);

//Acturalizar Evento
router.put('/', actualizarEvento);

//Eliminar Evento
router.delete('/', eliminarEvento);


module.exports = router;
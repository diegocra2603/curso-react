/*
    Rutas de Usuarios / Auth
    host + /api/events
*/

const { Router } = require('express');
const router = Router();
const { check } = require('express-validator');
const { obtenerEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');
const { validarJWT } = require('../middlewares/validar-jwt');

// Obtener Eventos
router.get('/', validarJWT ,obtenerEventos);

//Crear Evento
router.post('/', validarJWT, crearEvento);

//Acturalizar Evento
router.put('/', validarJWT, actualizarEvento);

//Eliminar Evento
router.delete('/', validarJWT, eliminarEvento);


module.exports = router;
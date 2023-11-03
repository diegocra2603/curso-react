/*
    Rutas de Usuarios / Auth
    host + /api/auth
*/

const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');

router.post(
    '/new',
    [ //Midelwares
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'Debe ser un correo electronico valido').isEmail(),
        check('password', 'El Password debe de ser de 6 caracteres').isLength(6)
    ],
    crearUsuario)

router.post(
    '/',
    [
        check('email', 'Debe ser un correo electronico valido').isEmail(),
        check('password', 'El Password debe de ser de 6 caracteres').isLength(6)
    ],
    loginUsuario)

router.get('/renew', revalidarToken)

module.exports = router;
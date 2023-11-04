const { response } = require("express");
const Usuario = require('../models/Usuario');

const crearUsuario = async (req, res = response) => {

    // const { name, email, password } = req.body

    const usuario = new Usuario(req.body);

    usuario.save()
        .then(resp => {

            return res.status(201).json({
                ok: true,
                msg: 'registro'
            })

        })
        .catch(error => {

            console.log(error);

            return res.status(500).json({
                ok: false,
                msg: 'Por favor hable con el administrador'
            })

        });
}

const loginUsuario = (req, res = response) => {

    const { email, password } = req.body

    res.json({
        ok: true,
        msg: 'login',
        email,
        password
    })

}

const revalidarToken = (req, res = response) => {

    res.json({
        ok: true,
        msg: 'revalidar'
    })

}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken,
}
const { response } = require("express");

const obtenerEventos = (req, res = response) => {
    return res.json({
        ok: true,
        msg: 'Obtener Eventos'
    })
}

const crearEvento = (req, res = response) => {
    return res.json({
        ok: true,
        msg: 'Crear Evento'
    })
}

const actualizarEvento = (req, res = response) => {
    return res.json({
        ok: true,
        msg: 'Actualizar Evento'
    })
}

const eliminarEvento = (req, res = response) => {
    return res.json({
        ok: true,
        msg: 'Eliminar Evento'
    })
}

module.exports = {
    obtenerEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
}
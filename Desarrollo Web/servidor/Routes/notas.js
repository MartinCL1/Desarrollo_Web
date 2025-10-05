const express = require('express')
const nota = express.Router()
const { verificarAutenticacion } = require('./login')
const { obtenerNotas, crearNota } = require('../databaseConnection')

nota.get('/', verificarAutenticacion, async (request, response) => {
    if (!request.user) return response.json({ response: false, message: 'Inicie sesión nuevamente.' });
    const userID = request.user.id

    const { message, respuesta } = await obtenerNotas(userID)
    if (respuesta) {
        response.json({ response: true, message: message })  // Se envia lo que se obtuvo de la base de datos.
    }
})

nota.post('/crearNota', verificarAutenticacion, async (request, response) => {
    if (!request.user) return response.json({ response: false, message: 'Inicie sesion!' });

    const idUsuario = request.user.id;
    console.log(idUsuario);
    const { titulo, descripcion, recordatorio, expiracion, prioridad, etiqueta } = request.body
    const { respuesta } = await crearNota(titulo, descripcion, expiracion, prioridad, recordatorio, etiqueta,idUsuario )
    
    console.log(respuesta, ': respuesta')
    
    response.json({ response: true, message: 'siu' })
})

module.exports = nota
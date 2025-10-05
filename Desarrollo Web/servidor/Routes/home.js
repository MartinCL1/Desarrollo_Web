const express = require('express')
const homeRoute = express.Router()  // se crea el router
const { crearUsuario } = require('../databaseConnection')

const { verificarAutenticacion } = require('./login')

homeRoute.get('/', verificarAutenticacion, (request, response) => {
    if (!request.user) return response.json({ response: false, message: 'Ingresar sesion nuevamente.' })  // Se obtiene el nombre de usuario.
    response.send({ response: true, message: request.username })  // confirmacion de la sesion.
})

// homeRoute.post('/agregar', async (request, response) => {
//     const { username, contra } = request.body
//     console.log(username)
//     const { respuesta } = await crearUsuario(username, contra)
//     response.send(respuesta)
// })

    

module.exports = homeRoute;
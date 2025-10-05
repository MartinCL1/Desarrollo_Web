const express = require('express')
const usuario = express.Router()
const bcrypt = require('bcrypt')
const { crearUsuario } = require('../databaseConnection')
require('dotenv/config')

const hashPassword = async (password) => {
    const regex = /^(?=.*\d)[A-Za-z\d]{7,}$/
    const match = regex.test(password)
    if (!match) return { respuesta: false, message: 'Contraseña invalida, intente de nuevo' }

    const hash = await bcrypt.hash(password, Number(process.env.SALT))

    return { respuesta: true, message: hash }
}

usuario.post('/crearUsuario', async (request, response) => {
    const { nombre, username, password } = request.body
    const respuesta = await hashPassword(password)

    if (!respuesta) return { respuesta: false, message: respuesta.message }
    console.log(respuesta.message)

    const { message } = await crearUsuario(nombre, username, respuesta.message)
    response.json({ message })
})

module.exports = usuario
const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { obtenerUsuario } = require('./../databaseConnection')
require('dotenv/config')


const KEY_WORD = process.env.KEY_WORD

router.post('/', async (request, response) => {
    const { nombreUsuario, contrasena } = request.body
    const _response = await obtenerUsuario(nombreUsuario)  // se comprueba en la base de datos si el usuario existe.

    if (!_response.response) return response.json(_response);

    const [{ id, username, password }] = _response.message  // Se obtienen los datos de la respuesta.
    const comparacion = await validacionContrasena(contrasena, password)
    if (!comparacion) return response.json({ response: false, message: 'Usuario o contraseña incorrecto, intenta de nuevo.' });

    // creacion y almacenamiento de token, se guarda informacion no tan sensible.
    const encode = jwt.sign({ id: id, _username: username }, KEY_WORD, { expiresIn: 900000, })
    response.cookie('access_token', encode, {
        httpOnly: true,
        maxAge: 900000,
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production'
    })

    response.json({ response: true, message: username })  // se responde al frontend para saber si se puede acceder o no.
})

const verificarAutenticacion = (request, response, next) => {
    const token = request.cookies.access_token
    if (!token) return response.json({ response: false, message: 'Inicie sesion nuevamente.' });

    try {
        const match = jwt.verify(token, KEY_WORD); // verificacion de token
        if (!match) return response.json({ response: false, message: 'Ocurrio un error duarante el proceso.' });
        const { _username, id } = match;
        request.user = {username: _username, id: id } 
        next()  // se skipea si es correcto
    } catch (error) {
        return response.json({ response: false, message: 'Ocurrio un error durante el proceso.' })
    }
}

router.get('/', verificarAutenticacion, (request, response) => {
    console.log(request.user)
    if (!request.user) return response.json({ response: false, message: 'Inicia sesion nuevamente.' });
    // Si el usuario esta autenticado se regresa el nombre de usuario
    response.send({ response: true, message: request.username })
})

const validacionContrasena = async (plainPassword, hashpassword) => {
    const comparacionHash = await bcrypt.compare(plainPassword, hashpassword)
    return comparacionHash
}



module.exports = { router, verificarAutenticacion };
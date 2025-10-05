const express = require('express');
const app = express();
const { router, verificarAutenticacion } = require('./Routes/login')
const homeRoute = require('./Routes/home')
const usuario = require('./Routes/usuario')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const nota = require('./Routes/notas')

app.use(cors({ origin: 'http://localhost:5173', credentials: true }))
app.use(express.json())
app.use(cookieParser())  // para guardar la info en la cookies.

const PORT = 3500

app.use('/login', router)
app.use('/home', homeRoute)
app.use('/notas', nota)
app.use('/usuario', usuario)

app.get('/logout', verificarAutenticacion, (request, response) => {
    console.log('hello')
    response.clearCookie('access_token')
    response.send({response: true})
})

app.listen(PORT, () => {
    console.log('escuchando en el puerto 3500')
})
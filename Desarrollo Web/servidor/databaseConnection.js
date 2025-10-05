const { createClient } = require('@supabase/supabase-js')
require('dotenv/config')


const cliente = createClient(process.env.PROJECT_URL, process.env.API_KEY)

// Obtencion de usuario
const obtenerUsuario = async (username) => {
    try {
        const { data, } = await cliente.from('Usuario')
            .select('id, username, password')  // Informacion esencial para saber la data del usuario.
            .range(0, 0)  // obtiene una sola cuenta.
            .eq('username', username)  // Columna  / Informacion a encontrar

        console.log(data)
        if (data.length > 0) {
            return { response: true, message: data }
        } else {
            return { response: false, message: 'Comprueba el usuario y la contrasena' }
        }
    } catch (error) {
        return { response: false, message: 'Ocurrio un error durante el proceso, intentalo de nuevo mas tarde.' }
    }

}

// agregar nota (cambiar en la UI)
const crearUsuario = async (nombre, username, password) => {

    const { response } = await obtenerUsuario(username)

    // quiere decir que ya hay un usuario.
    if (response) return { respuesta: false, message: 'El nombre de usuario no es valido, intente de nuevo.' }

    const { error } = await cliente.from('Usuario').insert({ username: username, nombre: nombre, password: password })
    if (error) {
        return { respuesta: false, message: 'No se pudo insrtar el usuario' }
    }
    return { respuesta: true, message: 'La cuenta ha sido creada correctamente.' }
}

// Movimientos con las notas.
const obtenerNotas = async (id) => {  // para el muestreo de notas en el contenedor de Notas
    try {
        const { data, error } = await cliente
            .from("Notas")
            .select(`
    id,
    titulo,
    descripcion,
    created_at,
    Usuario( id, nombre )
  `)
            .eq("id", id);
        console.log(data)
        return { respuesta: true, message: data }
    } catch {
        console.log(error.message)
        return { respuesta: false, message: 'No se pudieron obtener notas del recurso.' }
    }
}

// Crear Notas
const crearNota = async (_titulo, _descripcion, _expiracion = '', _prioridad = '', _recordatorio = false, _etiqueta, usuarioId) => {

    try {
        const { data, error } = await cliente.from('Notas')
            .insert({ created_at: '2025-10-09', titulo: _titulo, descripcion: _descripcion, expiracion: _expiracion, prioridad: _prioridad, recordatorio: _recordatorio, etiqueta: _etiqueta, id: usuarioId })
        return { respuesta: true, message: data }
    } catch (error) {
        console.log(error)
        return { respuesta: false, message: 'No se pudo agregar la nota a la basee de datos.' }
    }
}

module.exports = { obtenerUsuario, crearUsuario, obtenerNotas, crearNota };
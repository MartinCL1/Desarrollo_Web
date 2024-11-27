import { createSlice } from "@reduxjs/toolkit";

const notasPendientes = {notas : [ ]}
const notasRealizadas = {notas : [ ]}
const notasEliminadas = {notas : [ ]}
const contadorNotas = { value: 0 }

// Creando un selector.
export const seleccionarNota = (state, index) => state[index]

const insertarNota = (state, action) => {
    state.notas.push(action.payload)
}

function busquedaNota(notas, id){
    let indice = -1
    let indiceStart = 0
    let indiceEnd = notas.length - 1

    while(indiceStart <= indiceEnd){  
        let middleValue = Math.floor((indiceStart + indiceEnd) / 2)
        if(notas[middleValue].id === id) { 
            return notas[middleValue]  
        }else if(notas[middleValue].id > id){
            indiceEnd = middleValue - 1
        }else if( notas[middleValue].id < id ) {
            indiceStart = middleValue + 1
        }
    }

    return indice
}

const removerNota = (state, action) => {
    
    let nuevaNota = busquedaNota(state.notas, action.payload) // se busca la nota
    console.log('La nota eliminada es: ',nuevaNota, 'y su valor es: ', nuevaNota.id)

    console.log('eliminadas: ', state.notas)

    state.notas.forEach(element => {
        console.log('Item N. ',element.id)
    });

    // if(nuevaNota !== -1) {
    //     console.log('Entra aca')
    //     state.notas.splice(nuevaNota, 1)
    // }
    
    
}

const revisarNota = (state, action) => {
     // se obtiene la nota eliminada
     return state.notas[action.payload]
}

export const pendientesSlice = createSlice({
    name: 'notas',
    initialState: notasPendientes,

    reducers: {  // las formas en las que el estado cambiará.
        agregarNota: insertarNota,
        eliminarNota: removerNota,
        obtenerNota: revisarNota
    }
})

export const eliminadasSlice =  createSlice({
    name: 'notasEliminadas',
    initialState: notasEliminadas,

    reducers:  {
        agregarNota: insertarNota,
        eliminarNota: removerNota,
        obtenerNota: revisarNota
    }
})

export const realizadasSlice =  createSlice({
    name: 'notasRealizadas',
    initialState: notasRealizadas,
    
    reducers: {
        agregarNota: insertarNota,
        eliminarNota: removerNota,
        obtenerNota: revisarNota
    }
})

export const contadorSlice = createSlice({
    name: 'contador',
    initialState: contadorNotas,
    reducers: {
        incrementarContador: (state, action) => {
            state.value += 1
            console.log(state.value)
        }
    }
})

/**
 * Se exporta para que podamos usar los 'metodos'
*/

export const { agregarNota: agregarNotaPendiente, eliminarNota: eliminarNotaPendiente } = pendientesSlice.actions;
export const { agregarNota: agregarNotaEliminada, eliminarNota: eliminarNotaEliminada, obtenerNota: obtenerNotaEliminada } = eliminadasSlice.actions;
export const { agregarNota: agregarNotaRealizada, eliminarNota: eliminarNotaRealizada, obtenerNota: obtenerNotaRealizada } = realizadasSlice.actions;
export const { incrementarContador } = contadorSlice.actions

/**
 * Se exporta para que podamos utilizarlos en el store y acceder con el dispatch
*/

export const eliminadaReducer = eliminadasSlice.reducer
export const pendientesReducer = pendientesSlice.reducer
export const realizadasReducer = realizadasSlice.reducer
export const contadorReducer = contadorSlice.reducer
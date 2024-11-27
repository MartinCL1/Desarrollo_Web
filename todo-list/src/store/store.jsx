import { configureStore } from '@reduxjs/toolkit'
import { eliminadaReducer, pendientesReducer, realizadasReducer, contadorReducer }  from './Slices/notas'

export const store = configureStore( {
    reducer: {
        eliminadas: eliminadaReducer,
        pendientes: pendientesReducer,
        realizadas: realizadasReducer,
        contador: contadorReducer
    }
})
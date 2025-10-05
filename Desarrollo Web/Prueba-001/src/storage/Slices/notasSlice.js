import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    notas: []
}

const NotaSlice = createSlice({
    name: 'notas',
    initialState,
    reducers: {
        obtenerNotas : () => {
            console.log('estas obteniendo las notas')
        }
    }
})

export default NotaSlice.reducer;
export const {obtenerNotas} = NotaSlice.actions
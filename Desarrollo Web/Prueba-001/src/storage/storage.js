import { configureStore } from '@reduxjs/toolkit'
import NotaSlice from './Slices/notasSlice';

const store = configureStore({
    reducer: {
        notas: NotaSlice
    }
})

export default store;
import { useSelector } from 'react-redux';
import '../contenedor.css'
import Vacio from '../vacio/Vacio';
import Nota from '../Nota/Nota';
import { useEffect } from 'react';

function Eliminada () {
    const notas = useSelector(state => state.eliminadas.notas);
    return (
        <div className="contenedor">
            {
                (notas.length === 0)? <Vacio /> : notas.map(nota => (
                    nota.id
                ))
            }
        </div>
    )
}


export default Eliminada;
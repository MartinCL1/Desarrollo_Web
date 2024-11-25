import Vacio from '../vacio/Vacio';
import { useDispatch, useSelector } from 'react-redux';
import { seleccionarNota, agregarNotaEliminada, eliminarNotaPendiente } from '../../store/Slices/notas';
import Nota from '../Nota/Nota';

function Pendiente () {
    // const [indexNota, setIndexNota] = useState(0) 
    const notas = useSelector(state => state.pendientes.notas)
    // const not = useSelector(state => obtenerNotaPendiente(state) )
    const dispatch = useDispatch()

    const eliminarNota = (id, event) => {
        let data = seleccionarNota(notas, id)
        console.log('agregada a eliminada: ', data)
        dispatch(agregarNotaEliminada(data)) // agrega la nota al estado de eliminadas
        dispatch(eliminarNotaPendiente(id))
        console.log('Se agrego una nota con el id de: ', id)
    }

    const marcarRealizada = () => {  
        console.log("Esta nota ha sido eliminada.")
    }

    // TODO: Agregar funcionalidad, cuando haya hover sobre nota, la nota cambie su z-index, para ocultar boton de agregar
    
    return (
        <section className="contenedor">  
                {(notas.length === 0)? <Vacio/> : notas.map((nota) => (  // en el map siempre se utilizan los parentesis y asignar key
                    <Nota
                    key={nota.id}   
                        nota={nota}
                        marcarRealizada={marcarRealizada}
                        eliminarNota={eliminarNota}
                        mostrar={true}
                    />
                )) }
        </section>
    )
}

export default Pendiente;























    // IMPEARMEABLE :  250
    // CAsco : 300 y algo

import '../contenedor.css'
import Vacio from '../vacio/Vacio';

function Realizada({notas}) {
    return (
        <div className="contenedor">
            {(notas.length === 0)? <Vacio/> : ''}
        </div>
    )
}

export default Realizada;
import './modal.css'
import quit from '../../icons/quit.svg'
import { useRef, useState } from 'react'
import iconAlert from '../../icons/alerta.svg'
import { agregarNotaPendiente, incrementarContador } from '../../store/Slices/notas'
import { useDispatch, useSelector } from 'react-redux'

function Alerta ({ocultarAlerta}) {
    return (
        <div className='alerta'>
            <div >
                <img src={iconAlert} alt='iconAlert' />
                <p>Es necesario que llene todos los campos.</p>
            </div>

            <button className='descartar-boton' onClick={ocultarAlerta}>Aceptar</button>
        </div>
    )
}

function Modal({ ocultarModal }){
    const contadorNotas = useSelector(state => state.contador.value)
    let [contador, setContador] = useState(contadorNotas)
    const dispatch = useDispatch()

    const inputTitulo = useRef()
    const inputDescripcion = useRef()
    const inputFecha = useRef()
    const [alerta, setAlerta] = useState(false)

    const agregarNota = () => {
        // obtenemos todos los datos 
        if(
            inputTitulo.current.value.trim() !== "" &&
            inputDescripcion.current.value.trim() !== "" &&
            inputFecha.current.value.trim() !== ""
        ){
            // Se crea una nota para agregarla
            const nuevaNota = {
                id: contador,
                titulo: inputTitulo.current.value.trim(),
                fecha: inputFecha.current.value.trim(),
                descripcion: inputDescripcion.current.value.trim()
            }
            dispatch(incrementarContador())
            setContador(contador => contador + 1)
            dispatch(agregarNotaPendiente(nuevaNota))

        }else {
            setAlerta(true) // que se muestre
        }
    }

    const ocultarAlerta = () => { 
        setAlerta(false)
    }

    return (
        <div  className="modal" >
            <div className='contenido-modal'>

                { alerta && <Alerta ocultarAlerta={ocultarAlerta}/> } {/** En el caso de alerta es verdadero, me renderiza el componente de Alerta */}
                <img src={quit} alt="salir" onClick={ocultarModal} className='cerrar-modal' />
                
                <div className='contenido-nota'>
                    <input className='titulo-nota'ref={inputTitulo} type="text" placeholder='Título'/>
                    <p className='nota-fecha'>Establece fecha limite</p>
                    <div className='fecha'>
                        <input type='date' ref={inputFecha} />
                    </div>

                    <textarea className='descripcion-nota' ref={inputDescripcion}></textarea>

                    <div className='opciones-nota'>
                        <button className='crear-boton' onClick={agregarNota}>Crear</button>
                        <button className='descartar-boton' onClick={ocultarModal}>Descartar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;
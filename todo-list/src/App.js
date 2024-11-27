import './App.css';
import { Link, Routes, Route } from 'react-router-dom'
import Eliminada from './Componentes/eliminada/eliminada';
import Realizada from './Componentes/realizadas/Realizada';
import Pendiente from './Componentes/pendientes/Pendiente';
import { useRef, useState } from 'react';
import Modal from './Componentes/insertarModal/Modal';


function App() {
  let botonSelected = useRef();
  let [modalMostrado, setModalMostrado] = useState(false)

  // useEffect(() => {

  //   console.log(modalMostrado)
  //   modal.current = (modalMostrado === true) ? <Modal clase={'mostrado'}/> : null;

  // }, [modalMostrado])  // cuando este valor cambie se ejecuta la funcion de arriba

  const agregarNota = () => {
    mostrarModal()
  }

  const ocultarModal = () => {
    setModalMostrado(false)
  }

  const mostrarModal = () => {
    setModalMostrado(true)
  }

  const changeColor = (event) => {
    botonSelected.current.classList.remove('selected')
    botonSelected.current = event.target
    botonSelected.current.classList.add('selected') 
  }

  return (
    <div className="App">

      { modalMostrado && <Modal ocultarModal={ocultarModal} /> } { /** Sirve para renderizar un componente si un enuunciado es verdadero */ }

      <h1>YOUR TO-DO LIST</h1>

      <div className='contenido'>
        <nav className='secciones'>
          <Link to='/' onClick={ changeColor } className='selected'  ref={botonSelected} >TAREAS</Link>
          <Link to='/realizadas' onClick={ changeColor } >REALIZADAS</Link>
          <Link to='/recientes' onClick={changeColor } >BORRADAS RECIENTEMENTE</Link> { /** Tambien puede funcionar vistas recientemente */ }
        </nav>

          <div className='tareas'>
            <Routes>
              <Route path='/' element={ <Pendiente /> } />
              <Route path='/realizadas' element={ <Realizada /> } />
              <Route path='/recientes' element={ <Eliminada /> } />
            </Routes>
            <button className='add-button' onClick={agregarNota} >Nueva Nota</button> {/** Obviamente se agrega en las notas pendientes */}
        </div>
      </div>

    </div>
  );
}

export default App;

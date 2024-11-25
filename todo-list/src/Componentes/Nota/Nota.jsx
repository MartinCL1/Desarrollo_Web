import React from "react";
import '../contenedor.css'

function Nota ({nota, marcarRealizada, eliminarNota, mostrar}){
    return (
        <div key={nota.id} className='informacion-nota'>
            <div className='nota-datos'> {/* fecha y headers*/}
                <div className='headers'>  {/* Muestra la info de la nota, cabecera, descripcion */}
                    <h3>{nota.titulo}</h3>
                    <p>{nota.descripcion}</p>
                </div>
                <div className='fecha'>  {/** Muestra la fecha de la nota */}
                    {nota.fecha}
                </div>
            </div>
                <div className='nota-opciones'>
                    {/*Eliminar la nota, marcar como realizada, (checked, removed)*/}
                    <svg onClick={(event) => eliminarNota(nota.id, event)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                    {mostrar && <svg onClick={marcarRealizada} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>}
                </div>
        </div>
    )
}

export default Nota;
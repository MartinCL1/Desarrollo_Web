import React, { useEffect, useRef, useState } from "react";
import "./global.css";

const More = ({ size = 24, color = "#fff" }) => {
  const [submenu, setSubMenu] = useState(false);
  const referencia = useRef(null)

  useEffect(() => {
    const detectarClick = (evento) => {
      if(referencia.current) { 
        if(!referencia.current.contains(evento.target)){  // Si no es la referencia se coloca en falso.
          setSubMenu(false)
        }
      }
    }

    window.addEventListener('click', detectarClick);

    return () => {
      window.removeEventListener('click', detectarClick )
    }

  }, [submenu])

  return (
    <div className="more" onClick={() => setSubMenu(!submenu)} ref={referencia}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="1"></circle>
        <circle cx="19" cy="12" r="1"></circle>
        <circle cx="5" cy="12" r="1"></circle>
      </svg>

      {submenu && (
        <div className="submenu">
          <button onClick={() => {alert('hola')}}>Eliminar</button>
          <button onClick={() => {alert('hola')}}>Editar</button>
          <button onClick={() => {alert('hola')}}>Fijar</button>
        </div>
      )}
    </div>
  );
};
export default More;

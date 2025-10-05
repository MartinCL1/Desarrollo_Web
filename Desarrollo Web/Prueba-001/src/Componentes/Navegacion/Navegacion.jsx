import { useCallback, useEffect, useRef, useState } from "react";
import "./navegacion.css";
import { motion } from "framer-motion";
import BurgerButton from "../Botones/BurgerButton";
import { Link, replace, useNavigate } from "react-router-dom";
import Lista from "../Lista/Lista";

const Navegacion = () => {
  const [navVisible, setNavVisible] = useState(false);
  const refNav = useRef();
  const navigate = useNavigate()

  const detectarClick = useCallback((ev) => {
    if (!refNav.current.contains(ev.target)) {
      // si se da un click fuera y aparte el nav esta mostrado
      setNavVisible(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("click", detectarClick);

    return () => {
      window.removeEventListener("click", detectarClick);
    };
  }, [detectarClick]);

  const mostrar = () => {
    setNavVisible(!navVisible);
    return;
  };

  const cerrarSesion = async() => {
    setNavVisible(false)  ;
    const data = await fetch('http://localhost:3500/logout', {credentials:'include'})
    const respuesta = await data.json()
    if(respuesta) console.log('se elimino la cookie')
    navigate('/', {replace: true})
  };

  return (
    <motion.nav
      className="navegacion"
      initial={{ opacity: 0, x: "-100%" }}
      animate={{ opacity: 1, x: navVisible ? 0 : "-100%" }}
      transition={{ duration: 1 }}
      ref={refNav}
    >
      <BurgerButton accion={mostrar} visible={navVisible} />
      <div className="navegacion-escritorio">
        <span>
          <Link path="" onClick={() => setNavVisible(false)}>
            Inicio
          </Link>
        </span>
        <Lista />
        <span>
          <Link path="/" onClick={cerrarSesion}>
            Cerrar Sesion
          </Link>
        </span>
      </div>
    </motion.nav>
  );
};

export default Navegacion;

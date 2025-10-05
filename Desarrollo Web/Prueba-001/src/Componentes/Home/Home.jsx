import { useNavigate } from "react-router-dom";
import "./home.css";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import ContenedorNotas from "../ContenedorNotas/ContenedorNotas";
import VisualizacionNota from "../ContenedorNotas/VisualizacionNota/VisualizacionNota";

const Home = () => {
  const navigate = useNavigate();
  const [mostrarInfoNotas, setMostrarInfoNotas] = useState(false);
  const [mostrarCrearNota, setMostrarCrearNota] = useState(false);
  const [mostrarBarra, setMostrarBarra] = useState(false);

  const cerrarBarra = () => {
    setMostrarBarra(false);
    setMostrarCrearNota(false);
    setMostrarInfoNotas(false);
  };

  const crearNota = () => {
    if (mostrarBarra !== true) {
      setMostrarBarra(!mostrarBarra);
    }

    if (!mostrarCrearNota) {
      // si no esta seleccionado, se selecciona
      setMostrarCrearNota(!mostrarCrearNota);
      setMostrarInfoNotas(false);
    }
  };

  const infoNota = () => {
    if (mostrarBarra !== true) {
      setMostrarBarra(true);
    }
    if (!mostrarInfoNotas) {
      setMostrarInfoNotas(true);
      setMostrarCrearNota(false);
    } // si no esta seleccionado, se selecciona
  };

  useEffect(() => {
    // se va a encargar de ver si esta autenticado, si no se regresa al login.
    (async () => {
      const data = await fetch("http://localhost:3500/home", {
        credentials: "include",
      });

      const responseData = await data.json();
      if (!responseData.response) navigate("/", {replace: true});
      
    })();
  }, [navigate]);

  return (
    <motion.section
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="encabezado-notas">
        <h1>Mis tareas</h1>
        <button onClick={crearNota}>Nueva Tarea</button>{" "}
        {/** Muestra el componen  te para crear la nota */}
        {/* renderizacion de comonente de notas */}
      </div>

      <motion.div
        className="vistas"
        layout="preserve-aspect"
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <AnimatePresence>
          <ContenedorNotas
            key={"notas"}
            mostrar={mostrarBarra}
            mostrarInfo={infoNota}
          />

          <VisualizacionNota
            key={"informacion"}
            mostrar={mostrarBarra} /** Determina si debemos mostrar la barra */
            infoNota={mostrarInfoNotas}
            crearNota={
              mostrarCrearNota
            } /** Se renderiza el componente de crear notas */
            cerrarBarra={cerrarBarra}
          />
        </AnimatePresence>
      </motion.div>
    </motion.section>
  );
};

export default Home;

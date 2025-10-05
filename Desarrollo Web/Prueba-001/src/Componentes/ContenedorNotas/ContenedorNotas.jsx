import { motion } from "framer-motion";
import Nota from "./Nota";
import "./contenedor.css";
import { useEffect } from "react";
import { useState } from "react";

const ContenedorNotas = ({ mostrarInfo, mostrar }) => {
  const [notas, setNotas] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const informacion = await fetch("http://localhost:3500/notas", {
          credentials: "include",
        });
        const notas = await informacion.json();
        setNotas(notas.message);
      } catch {
        console.log("Ocurrio un error durante el proceso");
      } finally {
        setCargando(false);
      }
    })();
  }, []);

  return (
    <motion.div className="contenedor-nota" 
      layout
      transition={{delay: .5}}
    >
      {cargando && <h1>Cargando...</h1>}
      {
      notas?.length > 0 && !cargando && notas !== null && Array.isArray(notas) ? (
        notas?.map((item, index) => (
          <Nota
            titulo={item.titulo}
            descripcion={item.descripcion}
            fecha={item.created_at}
            key={index}
            mostrarInfo={mostrarInfo}
          />
        ))
      ) : (
        <p>No hay notas para mostrar</p>
      )}
    </motion.div>
  );
};

export default ContenedorNotas;

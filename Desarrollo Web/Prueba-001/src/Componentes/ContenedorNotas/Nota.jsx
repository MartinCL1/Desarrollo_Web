import More from "../Botones/More";
import "./nota.css";
import { motion } from "framer-motion";

const Nota = ({ mostrarInfo, titulo, fecha, descripcion }) => {
  return (
    <motion.div className="nota"
      whileHover={{x: 5}}
    >
      <div className="informacion-nota " onClick={mostrarInfo}>
        <div className="nota-contenido  ">
          <h2>{titulo}</h2>
          <p>{descripcion}</p>
        </div>
        <div className="fecha">
          <p>Fecha: {fecha}</p>
        </div>
      </div>

      <div className="opciones-nota flex-center">
        <More />
      </div>
    </motion.div>
  );
};

export default Nota;

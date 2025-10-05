import InfoNota from "../../SideBar/InfoNota";
import NuevaNota from "../../SideBar/NuevaNota";
import "./visualizacion.css";
import { AnimatePresence, motion } from "framer-motion";

const VisualizacionNota = ({ mostrar, infoNota, crearNota, cerrarBarra }) => {
  return (
    <motion.div
      className="visualizacion"
      layout
      animate={
        mostrar ? { width: "300px" } : { width: "0" }
      }
    >
      <AnimatePresence>
        {infoNota && <InfoNota cerrarBarra={cerrarBarra} />}
        {crearNota && <NuevaNota cerrarBarra={cerrarBarra} />}
      </AnimatePresence>
    </motion.div>
  );
};

export default VisualizacionNota;

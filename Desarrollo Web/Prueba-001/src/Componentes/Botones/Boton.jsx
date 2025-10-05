import "./global.css";
import { motion } from "framer-motion";

const Boton = ({ texto, bgColor, color, borde, accion, margin }) => {
  return (
    <motion.button
      style={{ backgroundColor: bgColor, color: color, border: borde, margin: margin }}
      className="formulario-boton"
      onClick={accion}
    >
      {texto}
    </motion.button>
  );
};
export default Boton;

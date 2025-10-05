import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./lista.css";
import Add from "../Botones/add";
import { useState } from "react";

const Lista = () => {
  const [isShown, setIsShown] = useState(false);

  const toggle = () => {
    setIsShown(!isShown);
  };
  return (
    <div className="lista">
      <div className="menu">
        <span onClick={toggle}>Etiquetas</span>
        <Add />
      </div>
      {isShown && (
        <div className="submenu flex-center--column-direction">
          <Link to={"casa"}>historiasasdasdasdasddas</Link>
          <Link to={"casa"}>about me</Link>
          <Link to={"casa"}>siu</Link>
        </div>
      )}
    </div>
  );
};

export default Lista;

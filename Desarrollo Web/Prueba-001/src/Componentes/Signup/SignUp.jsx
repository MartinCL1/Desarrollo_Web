import { motion } from "framer-motion";
import "./signup.css";
import Boton from "../Botones/Boton";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { Aviso } from "../Modales/Aviso";

const SignUp = () => {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmacionPassword, setConfirmacionPassword] = useState();

  const [mostrarAdvertencia, setMostrarAdvertencia] = useState(false);

  const validacionCampos = () => {
    // si todos los campos son validos se procede a enviar la informacion.
    if (
      nombre.trim() !== "" &&
      username.trim() !== "" &&
      password.trim() !== "" &&
      confirmacionPassword.trim() !== ""
    ) {
      return true;
    }
  };

  const crearUsuario = async (evento) => {
    evento.preventDefault();
    if (validacionCampos()) {
      const dataFetch = await fetch(
        "http://localhost:3500/usuario/crearUsuario",
        {
          credentials: "include",
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            nombre,
            username,
            password,
            confirmacionPassword,
          }),
        }
      );
      const respuesta = await dataFetch.json();
      console.log(respuesta);
    } else {
      setMostrarAdvertencia(true);
    }
  };

  const regresar = (evento) => {
    evento.preventDefault();
    navigate("/", { replace: true });
  };

  return (
    <div className="login flex-center">
      <motion.div
        className="contenedor-registro flex-center--column-direction"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        <h1>Nuevo Usuario</h1>
        <form className="flex-center--column-direction formulario-registro">
          <input
            type="text"
            placeholder="Nombre y apellido"
            onChange={(e) => setNombre(e.target.value)}
          />
          <input
            type="text"
            placeholder="Nombre de usuario"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirmar contraseña"
            onChange={(e) => setConfirmacionPassword(e.target.value)}
          />

          <div className="formulario-opciones flex-center">
            <Boton
              accion={crearUsuario}
              texto={"Crear Usuario"}
              bgColor={"#fff"}
              color={"black"}
              borde={"none"}
            />
            <Boton
              accion={regresar}
              texto={"Regresar"}
              bgColor={"#000"}
              color={"white"}
              borde={"none"}
            />
          </div>
        </form>
      </motion.div>

      {mostrarAdvertencia && (
        <Aviso cerrar={() => setMostrarAdvertencia(false)} />
      )}
    </div>
  );
};

export default SignUp;

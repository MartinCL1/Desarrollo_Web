import "./login.css";
import { motion } from "framer-motion";
import Boton from "./../Botones/Boton.jsx";
import { useState } from "react";
import { replace, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:3500/login", {
        credentials: "include",
      });

      console.log(response)
      const responseRequest = await response.json();
      console.log(responseRequest)
      if (responseRequest.response) {
        // si esta logeado se va a home, de lo contrario se hace nada.
        navigate("/home", {replace: true});
      }
    })();
  }, [navigate]);

  const validarInformacion = async (e) => {
    e.preventDefault();
    if (nombreUsuario.trim() === "" && contrasena.trim() === "") return;
    // haciendo la validacion de datos para mandar los datos al servidor.
    const data = await fetch("http://localhost:3500/login", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombreUsuario, contrasena }),
    });

    const response = await data.json();
    if (response.response) {
      navigate("/home", {replace: true});
    }
  };

  const registrarse = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  return (
    <motion.div className="login flex-center--column-direction">
      <motion.div
        className="login-contenedor flex-center--column-direction"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        <h1>Iniciar Sesion</h1>
        <form className="formulario flex-center--column-direction">
          <input
            type="text"
            placeholder="Nombre de usuario"
            onChange={(arg) => setNombreUsuario(arg.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            onChange={(arg) => setContrasena(arg.target.value)}
          />
          <div className="formulario-opciones flex-center">
            {/* Podemos crear dos componentes uno para cada boton. */}
            <Boton
              texto={"Iniciar Sesion"}
              bgColor={"#fff"}
              color={"black"}
              borde={"none"}
              accion={validarInformacion}
            />
            <Boton
              texto={"Registrarse"}
              bgColor={"#000"}
              color={"white"}
              borde={"none"}
              accion={registrarse}
            />
            {/** --------------------------------------------------------- */}
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Login;

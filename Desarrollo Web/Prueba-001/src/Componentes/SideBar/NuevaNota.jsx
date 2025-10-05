import Boton from "../Botones/Boton";
import Close from "../Botones/Close";
import { motion } from "framer-motion";
import "./global.css";
import { useRef, useState } from "react";
import { Aviso } from "../Modales/Aviso";

const NuevaNota = ({ cerrarBarra }) => {
  const [mostrarAviso, setMostrarAviso] = useState(false)
  const refRecordatorio = useRef();
  const refDescripcion = useRef();
  const refExpiracion = useRef();
  const refPrioridad = useRef();
  const refEtiqueta = useRef();
  const refTitulo = useRef();

  const enviarNota = async (evento) => {
    evento.preventDefault();
    if (refTitulo.current && refDescripcion.current) {
      if (
        refTitulo.current.value.trim() !== "" &&
        refDescripcion.current.value.trim() !== ""
      ) {
        const respuesta = await fetch("http://localhost:3500/notas/crearNota", {
          credentials: "include",
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            recordatorio: refRecordatorio.current.checked,
            titulo: refTitulo.current.value,
            descripcion: refDescripcion.current.value,
            expiracion: refExpiracion.current.value,
            prioridad: refPrioridad.current.value,
            etiqueta: refEtiqueta.current.value,
          }),
        });
        const jsonResp = await respuesta.json();
        console.log(jsonResp);
      }else {
        setMostrarAviso(true)
      }
    }
  };

  const cancelar = () => {};

  return (
    <motion.div
      className="wrapper"
      initial={{ left: "100%" }}
      animate={{ left: "0%" }}
    >
      <Close accion={cerrarBarra} />
      <form className="nota-form">
        <h2>Crear Nota</h2>
        <label for="titulo">Título</label>
        <input
          type="text"
          id="titulo"
          ref={refTitulo}
          placeholder="Ej. Terminar proyecto"
          required
        />
        <label for="descripcion">Descripción</label>
        <textarea
          id="descripcion"
          placeholder="Detalles de la tarea..."
          required
          ref={refDescripcion}
        ></textarea>
        <label for="fecha">Fecha de expiración (opcional)</label>
        <input type="date" id="fecha" ref={refExpiracion} />
        <label for="prioridad">Prioridad</label>
        {/** Vamos a obtener las etiquetas creadas por el usuario. */}
        <select id="prioridad" ref={refPrioridad}>
          <option value="alta">Alta</option>
          <option value="media" selected>
            Media
          </option>
          <option value="baja">Baja</option>
        </select>
        <label for="etiquetas">Etiquetas (separadas por comas)</label>
        <input
          type="text"
          id="etiquetas"
          ref={refEtiqueta}
          placeholder="Ej. trabajo, urgente"
        />
        <label className="checkbox">
          <input type="checkbox" ref={refRecordatorio} />
          Recordatorio (Opcional)
        </label>
        <Boton texto={"Crear Nota"} accion={enviarNota} />
        <Boton texto={"Descartar"} margin={"0 0 20px"} accion={cancelar} />
      </form>
      {
        mostrarAviso && <Aviso cerrar={() => setMostrarAviso(false)} />
      }
    </motion.div>
  );
};

export default NuevaNota;

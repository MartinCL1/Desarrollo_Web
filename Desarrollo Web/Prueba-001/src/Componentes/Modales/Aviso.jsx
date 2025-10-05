import Close from "../Botones/Close";
import "./modales.css";

export const Aviso = ({
  cerrar,
  titulo = "Campos incompletos.",
  texto = "Porfavor llene todos los campos.",
}) => {
  return (
    <div className="contenedor flex-center">
      <div className="contenedor-aviso flex-center--column-direction">
        <Close accion={cerrar} color={"#000"} />
        <span>{titulo}</span>
        <p>{texto}</p>
      </div>
    </div>
  );
};

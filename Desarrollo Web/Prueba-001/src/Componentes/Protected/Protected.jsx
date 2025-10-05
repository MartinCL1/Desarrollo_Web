import { Outlet } from "react-router-dom";
import Navegacion from "../Navegacion/Navegacion";
import './protected.css'

const Protected = () => {
    return (
        <div className="contenedor-app">
            <Navegacion />
            <Outlet />
        </div>
    )
}

export default Protected;
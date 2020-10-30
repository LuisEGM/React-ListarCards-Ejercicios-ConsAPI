import React from "react";
import ListarEjercicios from "../componentes/ListarEjercicios";
import Welcome from "../componentes/welcome";
import AgregarEjercicio from "../componentes/AgregarEjercicio";
import '../componentes/styles/paginaPrincipal.css';

const EjerciciosPresent = ({userName, ejercicios, img}) => (
    
    <div className="contenedor">
        <Welcome
            userName={userName}
        />
        <div className="contenedor__ejercicios">        
            <ListarEjercicios
                ejercicios = {ejercicios}
            />
        </div>
        <div className="contenedor__boton">
            <AgregarEjercicio
                img={img}
            />
        </div>
    </div>

);

export default EjerciciosPresent;
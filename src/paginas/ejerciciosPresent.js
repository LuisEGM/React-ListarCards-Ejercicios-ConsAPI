import React from "react";
import ListarEjercicios from "../componentes/ListarEjercicios";
import Welcome from "../componentes/welcome";
import AgregarEjercicio from "../componentes/AgregarEjercicio";

const EjerciciosPresent = ({userName, ejercicios, img}) => (
    
    <React.Fragment>
        <Welcome
            userName={userName}
        />
        <ListarEjercicios
            ejercicios = {ejercicios}
        />
        <AgregarEjercicio
            img={img}
        />
    </React.Fragment>

);

export default EjerciciosPresent;
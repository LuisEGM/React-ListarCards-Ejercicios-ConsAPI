import React from "react";
import "../componentes/styles/Errores.css";
import fatalErrorImg from "../imagenes/500.png";

const FatalError = () => (
    <div className="text-center">
        <h1 className="Error_Text">Error: 500 Unexpected Error</h1>    
        <img src={fatalErrorImg} alt="500 NotFound" className="Error_Image" />
    </div>
);

export default FatalError;
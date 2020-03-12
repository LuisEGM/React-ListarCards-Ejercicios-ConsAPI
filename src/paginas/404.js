import React from "react";
import "../componentes/styles/Errores.css";
import NotFoundImg from "../imagenes/404.png";

const NotFount = () => (
    <div className="text-center">
        <h1 className="Error_Text">Error: 404 Page Not Found</h1>    
        <img src={NotFoundImg} alt="404 NotFound" className="Error_Image" />
    </div>
);

export default NotFount;
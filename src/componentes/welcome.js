import React from "react";
import "./styles/welcome.css"

const Welcome = ({userName}) => (
    <div className="container">
        <div className="Fitness-User-Info">
            <h1> Hola, {userName} ...! </h1>
            {/* <p> Let`s workout to get someone gains! </p> */}
            <p>Bienvenido a tu App de ejercicios</p>
        </div>            
    </div>
);

export default Welcome;
import React from "react";
import "./styles/AgregarEjercicio.css";
//import botonImg from "../imagenes/add.png";
import { Link } from "react-router-dom";

/* function AgregarEjercicio(props){
    return(  
        
        <a href="https://es.reactjs.org/" className="Fitness-Add"
        style={{
            backgroundImage: `url(${props.img})`,
            backgroundRepeat: `no-repeat`
        }}
        ></a>

    );
} */

const AgregarEjercicio = (props) => (
    <Link to="/nuevo-ejercicio">
        <img src={props.img} className="Fitness-Add"></img>
    </Link>
);

/* function AgregarEjercicio(props){
    return(  
        <Link to="/ejercicios/nuevo">
            <img src={props.img} className="Fitness-Add"></img>
        </Link>
    );
} */

/* const AgregarEjercicio = (props) => {
    return(
        <a href="#" className="Fitness-Add"
        style={{
            backgroundImage: `url(${props.img})`,
            backgroundRepeat: `no-repeat`
        }}
        ></a>
    );
}
 */
export default AgregarEjercicio;
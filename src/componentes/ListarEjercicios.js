import React from "react";
import Tarjeta from "./Tarjeta";

// destructuring en props

const ListarEjercicios = ({ejercicios}) => (
    // otra xintaxis de React.Fragment "no todos los navegadores son compatibles"
    <>
        {
            ejercicios.map((ejercicio) => {
                return(
                    <Tarjeta
                        key={ejercicio.id}
                        title={ejercicio.title}
                        description={ejercicio.description}
                        img={ejercicio.img}
                        leftColor={ejercicio.leftColor}
                        rightColor={ejercicio.rightColor}
                    />
                );        
            })
        }
    </>
    
);

/* function ListarEjercicios(props){
    
    return(
        <div>
            {
                props.ejercicios.map((ejercicio) => {
                    return(
                        <Tarjeta
                            title={ejercicio.title}
                            description={ejercicio.description}
                            img={ejercicio.img}
                            leftColor={ejercicio.leftColor}
                            rightColor={ejercicio.rightColor}
                        />
                    );        
                })
            }
        </div>
    );
}
 */
export default ListarEjercicios;
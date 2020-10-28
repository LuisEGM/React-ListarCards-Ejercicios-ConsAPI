import React from "react";
//import exerciseImg from "../imagenes/exercise.png"
import "./styles/Tarjetas.css";
import circlesImg from "../imagenes/circles.png"
import emptyImg from "../imagenes/empty.png";

class Tarjeta extends React.Component{

    /*constructor(props){
        super(props);
        this.state = {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvwC0AgPVqp10Koo1qGKYxeK8hqGwHl8V9TuRWrH-hPCqo-BZ2-Q&s"
        }
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                image: "https://github.com/RpL02/FitnessApp/blob/master/src/images/exercise.png?raw=true"
            });
        },3000);
    }*/

    render(){
        
        // DESTRUCTURING
        const { nombre,descripcion,imagen,left_color, right_color } = this.props;
        
        return(

            <div className="card mx-auto Fitness-Card"
                style={{
                    backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${left_color  || "#56CCF2"}, ${right_color ||  '#56CCF2'})`
                }}
            >
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={imagen || emptyImg} className="float-right" />
                        </div>   
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{nombre}</h1>
                            <p>{descripcion}</p>
                        </div> 
                    </div>
                </div>
            </div>

        );
    }

}

export default Tarjeta;
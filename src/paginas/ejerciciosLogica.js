import React from "react";
import Loading from "../componentes/Loading";
import _500 from "./500";
import EjerciciosPresent from "./ejerciciosPresent";

class EjerciciosLogica extends React.Component{
    // con un fitchure de babel es posible inicializar el estado
    // sin declarar el constructor, ejemplo.

    state = {
        data:[],
        loading: true,
        error: null
    }

    async componentDidMount(){
        await this.fetchEjercicios();
    }

    fetchEjercicios = async () => {
        
        try {
            //si lo pruebas en cell debes escribir la ip de tu wifi en vez de localhost aqui
            let res = await fetch("http://localhost:8080/api/v1/all");
            let data = await res.json();
            //console.log(data);

            this.setState({
                data,
                loading: false
            })

        } catch (error) {
            console.log(error);
            this.setState({
                loading: false,
                error
            })
        }
        
    } 

    /*constructor(props){
        super(props);
        this.state = {
            data:   [{
                        "id": 1,
                        "nombre": "Technique Guides",
                        "descripcion": "Learn amazing street workout and calisthenics",
                        "imagen": "https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06",
                        "left_color": "#A74CF2",
                        "right_color": "#617BFB"
                    },{
                        "id": 2,
                        "nombre": "Skills Training",
                        "descripcion": "Learn the secrets of bodyweight techniques",
                        "imagen": "https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercises02.png?alt=media&token=a5d55381-5f3e-4f25-92dd-560775f96aa2",
                        "left_color": "#17EAD9",
                        "right_color": "#6078EA"
                    },{
                        "id": 3,
                        "nombre": "Strength Training",
                        "descripcion": "Train anytime, everywere and become",
                        "imagen": "https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise03.png?alt=media&token=8e5301c0-151e-415d-bd2c-655235d9c916",
                        "left_color": "#FAD961",
                        "right_color": "#F76B1C"
                    }
                // ,{
                //     "id": 3,
                //     "nombre": "Strength Training",
                //     "descripcion": "Train anytime, everywere and become",
                //     "imagen": "https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise03.png?alt=media&token=8e5301c0-151e-415d-bd2c-655235d9c916",
                //     "left_color": "#FAD961",
                //     "right_color": "#F76B1C"
                // }
                    ]
        }
    }*/

    render(){

        if(this.state.loading)
            return <Loading />

        if(this.state.error)
            return <_500 />

        return(
            // react.fragmen: permite retornar multiples elementos sin necesidad de mebeberlas en un div
            
            <EjerciciosPresent
                userName="Luis"
                ejercicios = {this.state.data}
                img="https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/add.png?alt=media&token=fbe1d973-4b4f-42d8-b76e-2c4354f6ed9d"
            />

        );
    }

}

export default EjerciciosLogica;

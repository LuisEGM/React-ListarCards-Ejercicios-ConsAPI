import React from "react";
import "../componentes/styles/NEjercicio.css";
import Loading from "../componentes/Loading";
import _500 from "./500";
import NuevoEjercicioPresent from "./NuevoEjercicioPresent";

class NuevoEjercicioLogica extends React.Component{
    
    state = {
        form: {
            nombre: "",
            descripcion: "",
            imagen: "",
            left_color: "",
            right_color: ""
        },
        error: null,
        loading: false
    }

    handleChange = (e) => {
        this.setState({
            form: {
                ...this.state.form, //esto es para que no sobre escriba el objeto.
                [e.target.name]: e.target.value
            }
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        //aparece el loading
        this.setState({
            loading: true
        })

        try {
            
            let config = {
                method: "POST",
                headers: {
                    //"Accept": "aplication/json",
                    "Content-Type": "application/json"    
                },
                body: JSON.stringify(this.state.form)
            }
    
            let res = await fetch("http://localhost:8080/api/v1/save",config);
            let json = await res.json();
    
            //cuando termina, desaparece
            this.setState({
                loading: false
            })
            
            //para redireccionar a la lista de ejercicios nuevamente.
            this.props.history.push("/");

            console.log(this.state);
            console.log("res => ", json);

        } catch (error) {
            console.log("Entro en el catch del error");
            this.setState({
                loading: false,
                error
            })
        }
        
    }

    render(){

        if(this.state.loading)
            return <Loading />

        if(this.state.error)
            return <_500 />

        return(

            <NuevoEjercicioPresent 
                form={this.state.form}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
            />
            
        );
    }

}

export default NuevoEjercicioLogica;
import React from "react";
import { directive } from "@babel/types";

class FormularioEjercicio extends React.Component{
    
    /* 
    FORMA ADECUADA

    constructor(props){
        super(props);
        
        // Este enlace es necesario para hacer que `this` funcione en el callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        console.log("cliked");
    } */
    
    // FORMA EXPERIMENTAL
    /* handleClick = () => {
        console.log("cliked");
    }

    render(){
        return(
            <button onClick={this.handleClick}>
                agregar
            </button>
        );
    } */

    state = {};

    /* 
    SE ELEVA EL ESTADO A EL COMPONENTE NUEVO EJERCICIO
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    } */

    //Al elebar el estado esta funcion sube a el componente padre "NuevoEjercicio.js"
    /*handleChange = (e) => {
        console.log(`${e.target.name} : ${e.target.value}`);
        
        guardo en el estado los valores de los campos como un objeto.
        
        >> esto seria lo formal

        let estadoParcial = {};
        estadoParcial[e.target.name] = e.target.value;
        this.setState(estadoParcial); 
        
        >> Pero con babel se puede asi:
    
        this.setState({
            [e.target.name]: e.target.value
        });

    }*/

    render(){
        
        //onChange es la prop que envia el padre como controlador del evento handleChange.
        const { onChange, onSubmit, form } = this.props;

        return(

            <div className="container" >
                <form onSubmit={onSubmit}>

                    <div className="form-group" >
                        <input
                            type="text"
                            className="form-control"
                            placeholder="nombre"
                            name="nombre"
                            onChange={onChange} //antes de elevar el estado qui iba "this.handleChange"
                            value={form.nombre}
                        />
                    </div>

                    <div className="form-group" >
                        <input
                            type="text"
                            className="form-control"
                            placeholder="descripción"
                            name="descripcion"
                            onChange={onChange}
                            value={form.descripcion}
                        />
                    </div>

                    <div className="form-group" >
                        <input
                            type="text"
                            className="form-control"
                            placeholder="imagen"
                            name="imagen"
                            onChange={onChange}
                            value={form.imagen}
                        />
                    </div>

                    <div className="form-row">
                        
                        <div className="col" >
                            <input
                                type="text"
                                className="form-control"
                                placeholder="leftColor"
                                name="left_color"
                                onChange={onChange}
                                value={form.left_color}
                            />
                        </div>

                        <div className="col" >
                            <input
                                type="text"
                                className="form-control"
                                placeholder="rightColor"
                                name="right_color"
                                onChange={onChange}
                                value={form.right_color}
                            />
                        </div>

                    </div>

                    <button type="submit" className="btn btn-primary mt-3">
                        Send
                    </button>
                
                </form>
            </div>
            
        );
    }

}

export default FormularioEjercicio;
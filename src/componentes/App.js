import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EjerciciosLogica from "../paginas/ejerciciosLogica";
import NuevoEjercicioLogica from "../paginas/NuevoEjercicioLogica";
import NotFount from "../paginas/404";

//caracteristicas de ES7, posible con BABEL.

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={EjerciciosLogica} />
            <Route exact path="/nuevo-ejercicio" component={NuevoEjercicioLogica} />    
            <Route component={NotFount}/>
        </Switch>
    </BrowserRouter>
);

/* function App(props){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/ejercicios" component={Ejercicios} />
                <Route exact path="/ejercicios/nuevo" component={NuevoEjercicio} />    
                <Route component={NotFount}/>
            </Switch>
        </BrowserRouter>
    );
} */

export default App;
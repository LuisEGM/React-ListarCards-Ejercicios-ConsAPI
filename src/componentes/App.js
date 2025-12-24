import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EjerciciosLogica from "../paginas/ejerciciosLogica";
import NuevoEjercicioLogica from "../paginas/NuevoEjercicioLogica";
import NotFount from "../paginas/404";

//caracteristicas de ES7, posible con BABEL.

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<EjerciciosLogica />} />
            <Route path="/nuevo-ejercicio" element={<NuevoEjercicioLogica />} />    
            <Route path="*" element={<NotFount />}/>
        </Routes>
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
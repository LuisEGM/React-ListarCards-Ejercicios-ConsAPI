import React from "react";
import FormularioEjercicio from "../componentes/FormularioEjercicio";
import Tarjeta from "../componentes/Tarjeta";

const NuevoEjercicioPresent = ({form, onChange, onSubmit}) => (
    
        <div className="contenedor__nuevoEjercicio">
            <h2 className="contenedor__titulo">Agrega un nuevo ejercicio</h2>
            <div className="row fila">
                <div className="col-sm alturaTarjeta">
                    <Tarjeta {...form} />
                </div>
                <div className="col-sm alturaForm">
                    <FormularioEjercicio
                        onChange={onChange}
                        onSubmit={onSubmit}
                        form={form}
                    />
                </div>
            </div>
        </div>
);

export default NuevoEjercicioPresent;
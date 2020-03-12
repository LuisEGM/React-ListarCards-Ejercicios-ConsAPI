import React from "react";
import FormularioEjercicio from "../componentes/FormularioEjercicio";
import Tarjeta from "../componentes/Tarjeta";

const NuevoEjercicioPresent = ({form, onChange, onSubmit}) => (
    
        <div className="row alturaGeneral">
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

);

export default NuevoEjercicioPresent;
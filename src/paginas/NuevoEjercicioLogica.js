import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../componentes/styles/NEjercicio.css";
import Loading from "../componentes/Loading";
import _500 from "./500";
import NuevoEjercicioPresent from "./NuevoEjercicioPresent";

const NuevoEjercicioLogica = () => {
    const navigate = useNavigate();
    
    const [form, setForm] = useState({
        nombre: "",
        descripcion: "",
        imagen: "",
        left_color: "",
        right_color: ""
    });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            let config = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"    
                },
                body: JSON.stringify(form)
            };
    
            let res = await fetch("http://localhost:8080/api/v1/save", config);
            let json = await res.json();
    
            setLoading(false);
            navigate("/");

            console.log(form);
            console.log("res => ", json);

        } catch (error) {
            console.log("Entro en el catch del error");
            setLoading(false);
            setError(error);
        }
    };

    if (loading)
        return <Loading />

    if (error)
        return <_500 />

    return (
        <NuevoEjercicioPresent 
            form={form}
            onChange={handleChange}
            onSubmit={handleSubmit}
        />
    );
};

export default NuevoEjercicioLogica;
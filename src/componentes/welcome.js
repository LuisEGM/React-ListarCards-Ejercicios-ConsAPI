import React from "react";
import "./styles/welcome.css"

const Welcome = ({userName}) => (
    <div className="container">
        <div className="Fitness-User-Info2">
            <h1> Hello {userName} </h1>
            <p> Let`s workout to get someone gains! </p>
        </div>            
    </div>
);

export default Welcome;
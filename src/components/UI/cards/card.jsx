import React from "react";
import Cafe1 from "../../../assets/img/cafe1.jpg"
import Cafe2 from "../../../assets/img/cafe2.jpg"
import Cafe3 from "../../../assets/img/cafe3.jpg"

export const Cards = () =>{
    return(
        <>
        <div className="card">
            <img src={Cafe1} alt="imagen card" className="imgCard"/>
            <h3 id="nomCafe">Nombre Cafe</h3>
            <p id="ubicacion">Armenia</p>
        </div>

        <div className="card">
            <img src={Cafe2} alt="imagen card" className="imgCard"/>
            <h3 id="nomCafe">Nombre Cafe</h3>
            <p id="ubicacion">Circasia</p>
        </div>
        
        <div className="card">
            <img src={Cafe3} alt="imagen card" className="imgCard"/>
            <h3 id="nomCafe">Nombre Cafe</h3>
            <p id="ubicacion">Salento</p>
        </div>

        </>
    )
}
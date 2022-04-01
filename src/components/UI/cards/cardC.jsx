import React from "react";
import { NavLink } from "react-router-dom";
import Cafe1 from "../../../assets/img/cafe1.jpg"
import Cafe2 from "../../../assets/img/cafe2.jpg"
import Cafe3 from "../../../assets/img/cafe3.jpg"

export const CardsC = () =>{
    return(
        <>
        <div className="card">
            <img src={Cafe1} alt="imagen card" className="imgCard"/>
            <h3 id="nomCafe">Nombre Cafe</h3>
            <p id="ubicacion">Armenia</p>
            <button className="btnCard"><NavLink to="/PerfilEstablecimiento" className="linkPerfil">Ver</NavLink></button>
        </div>

        <div className="card">
            <img src={Cafe2} alt="imagen card" className="imgCard"/>
            <h3 id="nomCafe">Nombre Cafe</h3>
            <p id="ubicacion">Circasia</p>
            <button className="btnCard"><NavLink to="/PerfilEstablecimiento" className="linkPerfil">Ver</NavLink></button>
        </div>
        
        <div className="card">
            <img src={Cafe3} alt="imagen card" className="imgCard"/>
            <h3 id="nomCafe">Nombre Cafe</h3>
            <p id="ubicacion">Salento</p>
            <button className="btnCard"><NavLink to="/PerfilEstablecimiento" className="linkPerfil">Ver</NavLink></button>
        </div>

        </>
    )
}
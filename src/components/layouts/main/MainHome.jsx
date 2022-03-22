import React from "react";
import { Cards } from "../../UI/cards/card";
import { Slider } from "../../UI/sliders/Slider";

export const MainHome = () =>{
    return(
        <>
        <div className="bodyHome">

            <h2 className="tituloC">Cafés</h2>
            <div className="contenedorCards">
                <Cards></Cards>
            </div>

            <div className="nosotros">
                <h2 className="tituloN">SOMOS HOISU</h2>
                <p className="descripcionN">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 
                laborum."Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 
                laborum.""Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 
                laborum."</p>
            </div>
        </div>

        <div className="conteSlider">
            <Slider/>
        </div>
        </>
    )
}
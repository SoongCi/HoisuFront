import React from "react";
import { CardsC } from "../../UI/cards/cardC";
import { CardsR } from "../../UI/cards/cardR";
import { Slider } from "../../UI/sliders/Slider";

export const MainHome = () =>{
    return(
        <>
        <div className="bodyHome">

            <h2 className="tituloC">Cafés</h2>
            <div className="contenedorCards">
                <CardsC></CardsC>
            </div>

            <h2 className="tituloC">Restaurantes</h2>
            <div className="contenedorCards">
                <CardsR></CardsR>
            </div>
        </div>

        <div className="conteSlider">
            <Slider/>
        </div>
        </>
    )
}
import React from "react";
import { Footer } from "../../layouts/footer/Footer";
import { MainPerfilEstablecimientos } from "../../layouts/main/MainPerfilEstablecimientos";
import { Slider } from "../../UI/sliders/Slider";

export const PerfilEstablecimientos =()=>{
    return(
        <>
        <MainPerfilEstablecimientos/>
        <Slider/>
        <Footer/>
        </>
    )
}
import React from "react";
import { Footer } from "../../layouts/footer/Footer";
import { Header } from "../../layouts/header/Header";
import { MainHome } from "../../layouts/main/MainHome";

export const Home = () =>{
    return(
        <>
        <Header/>
        <MainHome/>
        <Footer/>
        </>
    )
}
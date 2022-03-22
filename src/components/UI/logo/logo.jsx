import React from "react";
import imgLogo from "../../../assets/img/HoisuC&R.png"

export const Logo = () =>{
    return(
        <>
        <figure>
            <img className="logo" src={imgLogo} alt="logo" />
        </figure>
        </>
    )
}
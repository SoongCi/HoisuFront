import React, {useState} from "react";
import { NavLink } from "react-router-dom";

export const MainRegistroPersona =()=>{
    return (
        <>
        <div className="contenedorMainRP">
            <div className="formularioRegistro">
                <form className="formularioRP">
                    <h2>Regístrate</h2>
                    <div className="fieldD">
                        <input type="text" id="name" required autoComplete='off' name="email"/>
                        <label className='labelForm'htmlFor="name">Nombre</label>
                        <span></span>
                    </div>

                    <div className="fieldD">
                        <input type="email" id="name" required autoComplete='off' name="email"/>
                        <label className='labelForm'htmlFor="name">Correo</label>
                        <span></span>
                    </div>

                    <div className="fieldD">
                        <input type="password" id="name" required autoComplete='off' name="contraseña"/>
                        <label className='labelForm'htmlFor="email">Contraseña</label>                            <span></span>
                    </div>
                    
                    <div className="btnForm">
                        <button className="btnEnviar" type="submit">Regístrate ahora</button>
                    </div>

                    <div className="formRegistro">
                        <p>¿Ya tienes una cuenta? </p> <NavLink to='/Login' className='linkRegistro'>Iniciar sesion</NavLink>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}
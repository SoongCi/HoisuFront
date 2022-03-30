import React, {useState} from "react";
import { NavLink } from "react-router-dom";

export const MainLogin =()=>{
    return (
        <>
        <div className="contenedorMainL">
            <div className="formularioLogin">
                <form className="formularioL">
                    <h2>Iniciar sesión</h2>
                    <div className="fieldD">
                        <input type="email" id="name" required autoComplete='off' name="email"/>
                        <label className='labelForm'htmlFor="name">E-mail</label>
                        <span></span>
                    </div>

                    <div className="fieldD">
                        <input type="password" id="name" required autoComplete='off' name="contraseña"/>
                        <label className='labelForm'htmlFor="email">Contraseña</label>                            <span></span>
                    </div>
                    
                    <div className="btnForm">
                        <button className="btnEnviar" type="submit">Ingresar</button>
                    </div>

                    <div className="formRegistro">
                        <p>¿Deseas registrarte?</p>
                        <NavLink to='/RegistroEstablecimiento' className='linkRegistro'>Establecimiento</NavLink>
                        <NavLink to='/RegistroPersona' className='linkRegistro'>Persona</NavLink>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}
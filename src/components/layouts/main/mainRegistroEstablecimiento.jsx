import React, {useState} from "react";
import { NavLink } from "react-router-dom";

export const MainRegistroEstablecimiento =()=>{
    return (
        <>
        <div className="contenedorMainRE">
            <div className="formularioRegistroE">
                <form className="formularioRE">
                    <h2>Registra tu establecimiento</h2>
                    <div className="fieldD">
                        <input type="text" id="nameDuenoE" required autoComplete='off' name="email"/>
                        <label className='labelForm'htmlFor="name">Nombre completo</label>
                        <span></span>
                    </div>

                    <div className="fieldD">
                        <input type="text" id="nameEstablecimiento" required autoComplete='off' name="email"/>
                        <label className='labelForm'htmlFor="name">Nombre del establecimiento</label>
                        <span></span>
                    </div>

                    <div className="fieldD">
                        <input type="email" id="email" required autoComplete='off' name="email"/>
                        <label className='labelForm'htmlFor="name">Correo</label>
                        <span></span>
                    </div>

                    <div className="fieldD">
                        <input type="password" id="password" required autoComplete='off' name="contraseña"/>
                        <label className='labelForm'htmlFor="email">Contraseña</label>                            <span></span>
                    </div>

                    <div className="field">
                        <input className="checkR" type="checkbox" id="checkboxF" required autoComplete='off' name="contraseña"/>
                        <label className='nomCheckbox' htmlFor="email"> Restaurante </label>

                        <input className="checkR" type="checkbox" id="checkboxF" required autoComplete='off' name="contraseña"/>
                        <label className='nomCheckbox' htmlFor="email"> Cafetería</label>
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
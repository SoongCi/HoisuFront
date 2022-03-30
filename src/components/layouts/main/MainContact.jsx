import React from "react";

export const MainContact =()=>{
    return(
        <>
        <div className="contenedorMainC">
            <div className="formularioContact">
                <form className="formularioEmail">
                    <h2>Contactanos</h2>
                    <div className="fieldD">
                        <input type="text" id="name" required autoComplete='off' name="username"/>
                        <label className='labelForm'htmlFor="name">Nombre</label>
                        <span></span>
                    </div>

                    <div className="fieldD">
                        <input type="text" id="name" required autoComplete='off' name="username"/>
                        <label className='labelForm'htmlFor="email">E-mail</label>                            <span></span>
                    </div>

                    <div className="fieldD">
                        <textarea name="user_message" id="" cols="30" rows="10"></textarea>
                        <span></span>
                    </div>
                    
                    <div className="btnForm">
                        <button className="btnEnviar" type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )

}
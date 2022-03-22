import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"

export const Footer = () =>{
    return(
        <>
        <footer>
            <div className="separador">
                <hr className="separadorNav"/>
            </div>

            <section className="cuerpoFooter">
                <div className="otros">
                    <li><NavLink to='/About' className='links'>Nosotros</NavLink></li>
                    <li><NavLink to='/Contacto' className='links'>Contactanos</NavLink></li>
                </div>

                <div className="redes">
                    <h2>Siguenos: </h2>
                    <hr className="separadorRedes"/>

                    <div className="iconos">
                        <FontAwesomeIcon icon={faFacebook} className="logoRedes"/>
                        <FontAwesomeIcon icon={faTwitter} className="logoRedes"/>
                        <FontAwesomeIcon icon={faInstagram} className="logoRedes"/>
                    </div>
                </div>
            </section>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#50090a" fill-opacity="1" d="M0,0L48,10.7C96,21,192,43,288,58.7C384,75,480,85,576,96C672,107,768,117,864,122.7C960,128,1056,128,1152,106.7C1248,85,1344,43,1392,21.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
        </footer>

        </>
    )
}
import React from "react";
import { Logo } from "../../UI/logo/logo";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export const Header = () =>{
    return(
        <>
        <header>
            <section className="hero">
                <div className='logoC'>
                    <Logo/>
                </div>
            </section>

            <nav>
                <div className="enlaces">
                    <div className="linksI">
                        <FontAwesomeIcon icon={faSearch}/> <input type="text" />
                    </div>
                    <li><NavLink to='/Categorias' className='links'>Categorias</NavLink></li>
                    <li><NavLink to='/Establecimientos' className='links'>Establecimientos</NavLink></li>
                    <li><NavLink to='/Perfil' className='links'><FontAwesomeIcon icon={faUser} /></NavLink></li>
                </div>
            </nav>

            <div className="separador">
                <hr className="separadorNav"/>
            </div>
            

        </header>
        </>
    )
}
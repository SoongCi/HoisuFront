import React from "react";
import ImgPerfil from "../../../assets/img/decoraciones/headerPerfil.jpg";
import Menu1 from "../../../assets/img/decoraciones/menu1.jpg";
import Menu2 from "../../../assets/img/decoraciones/menu2.jpg";
import Horario from "../../../assets/img/decoraciones/horario.jpg";

export const MainPerfilEstablecimientos =()=>{
    return(
        <>
        <header className="headerPerfil">
            <div className="perfil">
                <img src={ImgPerfil} alt="" />
            </div>
        </header>

        <div className="nomEstablecimiento">
            <h2>Nombre del establecimiento</h2>
        </div>

        <section className="mainPerfil">
            <div className="menu">
                <h3>Menú</h3>
                <img src={Menu1} alt="" />
                <img src={Menu2} alt="" />
            </div>

            <div className="contenedorInformacion">
                <div className="descripcion">
                    <h3>Descripción</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aperiam delectus nesciunt omnis,
                        qui temporibus impedit eum veniam, reiciendis nostrum sit sed velit optio.
                        Deleniti quae dolorum architecto aliquid doloremque.</p>
                </div>

                <div className="horario">
                    <img src={Horario} alt="" />
                </div>

                <div className="telefono">
                    <h3>tel: 3004789234</h3>
                </div>
            </div>
        </section>
        </>
    )
}
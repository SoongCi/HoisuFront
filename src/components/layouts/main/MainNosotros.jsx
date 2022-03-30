import React from "react";
import { Decoracion1 } from "../../UI/imgNosotros/Img1";
import { Decoracion2 } from "../../UI/imgNosotros/Img2";
import Ico1 from "../../../assets/img/logosTecnologias/contentful.png";
import Ico2 from "../../../assets/img/logosTecnologias/css.png";
import Ico3 from "../../../assets/img/logosTecnologias/html.png";
import Ico4 from "../../../assets/img/logosTecnologias/js.png";
import Ico5 from "../../../assets/img/logosTecnologias/mysql.png";
import Ico6 from "../../../assets/img/logosTecnologias/react.png";


export const MainNosotros =()=>{
    return(
        <>
            <div className="nosotros">
                <h2 className="tituloN">SOMOS HOISU</h2>
                <div className="contenedorNosotros1">
                    <div className="img1N">
                        <Decoracion2/>
                    </div>
                    <div className="text1N">
                        <p>Somos Hoisu, una empresa que busca facilitar con nuestro producto,
                        el hallar un café o restaurante ideal para cada uno de nuestros usuarios.</p>
                    </div>
                </div>

                <div className="contenedorNosotros2">
                    <div className="text2N">
                        <h2>Tecnologías</h2>
                        <p>Hoisu ha sido desarrollado con JS, ReactJS, Contentful, HTML5, CSS y MySQL.</p>
                    </div>
                    <div className="img2N">
                        <Decoracion1/>
                    </div>
                </div>

                <div className="tecnologias">
                    <img src={Ico1} alt="" />
                    <img src={Ico2} alt="" />
                    <img src={Ico3} alt="" />
                    <img src={Ico4} alt="" />
                    <img src={Ico5} alt="" />
                    <img src={Ico6} alt="" />
                </div>
            </div>
        </>
    )
}
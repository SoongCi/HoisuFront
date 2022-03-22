import React from 'react'
import { NavLink } from 'react-router-dom'
import ImgS1 from '../../../assets/img/slider/s1.jpg'
import ImgS2 from '../../../assets/img/slider/s2.jpg'
import ImgS3 from '../../../assets/img/slider/s3.jpg'
import ImgS4 from '../../../assets/img/slider/s5.jpg'

export const Slider = () => {
    return (
        <>
        <div className="slider">
          <ul>
            <li>
              <img src={ImgS1} alt="" />
            </li>
            <li>
              <img src={ImgS2} alt="" />
            </li>
            <li>
              <img src={ImgS3} alt="" />
            </li>
            <li>
              <img src={ImgS4} alt="" />
            </li>
          </ul>

          <div className="reserva">
            <h2>¿Deseas hacer una reservación?</h2>
            <p>Nosotros te ayudamos!</p>

            <li><NavLink to='/Reservaciones' className='links'>Reservar</NavLink></li>
          </div>
        </div>
        </>
    )
}

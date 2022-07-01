import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../estilos/Slick.css'

import { datosApi } from '../data/data'

const Slick = () => {

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="full">
    <div className="contenedor-slick">

      <Slider { ...settings } >
      { datosApi.map((item)=>(
        <div className="card-slick">
            <div className="top-slick" style={{ backgroundImage: `url(${item.linkImg})` }} >
            <h1><a target='_blank' rel='noreferrer' href={ item.link }>{ item.title }</a> </h1>
            </div>
        </div>
      ))}
      </Slider>

  </div>
  </div>
  )
}

export default Slick
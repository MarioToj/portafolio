import React from 'react'
import '../estilos/About.css'
import  imagen from '../media/Mac-1.png'
const About = () => {
  return (
    <div className='about-container'>
        <div className='about-desc'>
            <h3>Led tell you something about me</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet praesentium quas numquam incidunt corporis tempora culpa repellat nemo delectus dolore.
            </p>
        </div>
        <div className="about-imagen">
            <img src={ imagen } alt="Mac-1" />
        </div>
    </div>
  )
}

export default About
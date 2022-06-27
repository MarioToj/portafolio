import React from 'react'
import '../estilos/About.css'
import  imagen from '../media/Mac-1.png'
const About = () => {
  return (
    <div className='about-container'>
        <div className='about-desc'>
            <h3>Let me tell you something about me</h3>
            <p>Hi, I'm Mario and I started programming because it's something that entertains me and I like it. I think my strengths in this field would be css, html, react and layout with worpress themes.

            </p>
        </div>
        <div className="about-imagen">
            <img src={ imagen } alt="Mac-1" />
        </div>
    </div>
  )
}

export default About
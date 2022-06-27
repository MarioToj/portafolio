import React from 'react'
import '../estilos/Navbar.css'

const Navbar = ({ isScrolling }) => {

  const toTheTop = () => {

    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }
  return (
    <div className={ `navbar ${ isScrolling > 20 ? "scrolling" : null }` }>
        <div className='navbar-logo' onClick={ toTheTop } >Mario E.</div>
    </div>
  )
}

export default Navbar
import React from 'react'
import '../estilos/Cover.css'
import Covervideo from '../media/CoverVideo.mp4'

const Cover = () => {
  return (
    <div className='cover-container'>
        <video className='video' src={ Covervideo } autoPlay loop muted/>
        <h1>Mario Enrique Toj Alvarez</h1>
        <p>Developer | Designer | Content </p>
    </div>
  )
}

export default Cover
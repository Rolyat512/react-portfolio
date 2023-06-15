import React from 'react'
import './header.css'
import placeholder1 from '../../assets/placeholder1.jpg'
import Socials from './socials'
import Contact from './contact'

const header = () => {
  return (
    <header id='home'>
    <div className="container header_container">
     <h1>Taylor Aldridge</h1>
      <h5><div className="text-light">Fullstack Developer</div></h5>
      <Contact /> 
      <Socials />
    </div>

    <div className='myPhoto'>
      <img src={placeholder1} alt="myPhoto" />
    </div>

    <a href="#contact" className='scroll_down'>Scroll Down</a>
   </header>
  )
}

export default header

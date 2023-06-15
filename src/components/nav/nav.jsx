import React from 'react'
import './nav.css'
import {AiTwotoneHome} from 'react-icons/ai'
import {BiUser} from 'react-icons/bi'
import {BiBookOpen} from 'react-icons/bi'
import {GrBusinessService} from 'react-icons/gr'
import {IoIosContact} from 'react-icons/io'

const nav = () => {
  return (
    <nav>
        <a href="#home"> <AiTwotoneHome/> </a>
        <a href="#about"> <BiUser/> </a>
        <a href="#experience"> <BiBookOpen/> </a>
        <a href="#services"> <GrBusinessService/> </a>
        <a href="#contact"> <IoIosContact/> </a>
    </nav>
  )
}

export default nav

import React from 'react'
import Resume from '../../assets/Resume.pdf'

function contact() {
  return (
    <div className='contact'>
      <a href={Resume} download className='btn btn-primary'> Resume </a>
      <a href="#contacts" className='btn btn-primary'> Contact me!</a>
    </div>
  )
}

export default contact

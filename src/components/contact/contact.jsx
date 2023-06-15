import React from 'react'
import './contact.css'

const contact = () => {
  return (
    <section className='contact-container' id='contact'>
      <h1> Contact Information </h1>
      <form action="">
        <input type="text" name='name' placeholder='Your Full Name' required/>
        <input type="email" name='email' placeholder='Your Email' required />
        <textarea name="message" placeholder='Your Message' rows="8" required></textarea>
        <button type='submit' className='btn'>Submit</button>
      </form>
    </section>
  )
}

export default contact

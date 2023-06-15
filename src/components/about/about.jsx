import React from 'react'
import './about.css'
// import placeholder1 from '../../assets/placeholder1.jpg'
import {FiAward} from 'react-icons/fi'
import {VscFolder} from 'react-icons/vsc'

// const about = () => {
//   return (
//     <section id="about">
//       <h2>About Me</h2>

//       <div className="container about-container">
//         <div className='about me'>
//           <div className="about-image">
//             {/* <img src={placeholder1} alt="myPhoto" /> */}
//           </div>
//         </div>

//         <div className="about-container"></div>
//         <div className='about-cards'>

//           <article className='about-card'>
//             <FiAward className='about-icon'/> 
//             <h5>Experience</h5>
//             <small> 1 year of coding experience </small>
//           </article>

//           <article className='about-card'>
//             <VscFolder className='about-icon'/> 
//             <h5>Projects</h5>
//             <small> Two Fullstack Projects </small>
//           </article>

//           <p className='about-content'>
//             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus ex voluptates necessitatibus tempora recusandae exercitationem a sequi, dolorem deserunt odit dignissimos adipisci dicta neque, corrupti unde iusto, ut nobis culpa?
//           </p>

//           <a href="#contact" className='any btn btn-primary'> Let's Talk </a>

//         </div>
//       </div>
//     </section>
//   )
// }


const about = () => {
  return (
    <section className='section' id="about">
      <div className='container'>
        <div className='columns is-centered'>
        <h4 className='title'>About Me</h4>


            {/* experience container  */}
          <div className='column is-half'>
              <article className='about-card'>
                <FiAward className='about-icon'/> 
                 <h5>Experience</h5>
                <small> 1 year of coding experience </small>
              </article>
          </div>
            {/* project container */}
          <div className='column is-half'>
              <article className='about-card'>
                  <VscFolder className='about-icon'/> 
                  <h5>Projects</h5>
                  <small> Two Fullstack Projects </small>
              </article>
          </div>
          
          <div className='column'>

          <p className='about-content is-two-thirds'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus ex voluptates necessitatibus tempora recusandae exercitationem a sequi, dolorem deserunt odit dignissimos adipisci dicta neque, corrupti unde iusto, ut nobis culpa?
          </p>

          </div>

          <a href="#contact" className='any btn btn-primary'> Let's Talk </a>
      </div>
    </div>

    </section>
  )
}


export default about

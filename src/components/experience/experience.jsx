import React from 'react'
import './experience.css'

// const experience = () => {
//   return (
//     <section className='section'>
//     <div className='container'>
//         <div className='columns'>
//           <h1 className='title'>Experience</h1>
//           {/* FrontEnd */}

//             <div className='column'>
//             <h3>Frontend Development</h3>
//             <ul>
//                 <li>HTML</li>
//                 <li>CSS</li>
//                 <li>React</li>
//                 <li>Bulma</li>
//             </ul>
//             </div>

//            {/* Backend */}

//            <div className='column'>
//            <h3>Backend Development</h3>
//                 <ul>
//                     <li>JavaScript</li>
//                     <li>MySQl</li>
//                     <li>PHP</li>
//                     <li>MongoDB</li>
//                     <li>Node JS</li>
//                 </ul>

//             </div>

//         </div>
//     </div>
// </section>
//   )
// }

function experience() {
  return (
    <section className='section' id='experience'>
      <div className='container'>
        <h1 className='title'>Experience</h1>

        <div class="columns">
          <div class="column">
            <div class="columns is-mobile">
              <div class="column">
                <h3>Frontend Development</h3>
               
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>React</li>
                  <li>Bulma</li>
                </ul>
        
              </div>
              <div class="column">
                <h3>Backend Development</h3>
                <ul>
                    <li>JavaScript</li>
                    <li>MySQl</li>
                    <li>PHP</li>
                    <li>MongoDB</li>
                    <li>Node JS</li>
                </ul>
                  
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>)
}

export default experience

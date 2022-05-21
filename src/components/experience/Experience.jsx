import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
    
        <div className="experiemce_frontend">
            <h3>Frontend Development</h3>
            <div className="experience__content">
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
               <div>
               <h4>HTML</h4>
               <small className='text-light'>Experienced</small>
               </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
               <div>
               <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
               </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
               <div>
               <h4>Javascript</h4>
                <small className='text-light'>Experienced</small>
               </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
               <div>
               <h4>Tailwind CSS</h4>
                <small className='text-light'>Experienced</small>
               </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
               <div>
               <h4>React</h4>
                <small className='text-light'>Experienced</small>
               </div>
              </article>
            </div>
        </div>

        { /* ==================== Backend Development ==========================     */}
        <div className="experiemce_backend">
        <h3>Backend Development</h3>
            <div className="experience__content">
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
               <div>
               <h4>Node JS</h4>
                <small className='text-light'>Experienced</small>
               </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Php</h4>
                <small className='text-light'>Experienced</small>
              </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Laravel</h4>
                <small className='text-light'>Experienced</small>
              </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>MY SQL</h4>
                <small className='text-light'>Experienced</small>
              </div>
              </article>
            
            </div>
          </div>
        
          { /* ==================== Mobile Development ==========================     */}
        <div className="experiemce_backend">
        <h3>Graphics Design</h3>
            <div className="experience__content">
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
               <div>
               <h4>UI/UX</h4>
                <small className='text-light'>Experienced</small>
               </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Logo & Thumbnail </h4>
                <small className='text-light'>Experienced</small>
              </div>
             
              </article>  
             
            </div>
          </div>
          { /* ==================== Mobile Development ==========================     */}

      </div>
    </section>
  )
}

export default Experience
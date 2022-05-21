import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
      <h5>
        What I Offer
      </h5>
      <h2>
        Services
      </h2>
      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Full UI/UX for Mobile and Web App.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p> Design in Figma, Adobe Xd, Adobe Illustrator and Sketch.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Matching Color Schemes & Icons.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Full Responsive Design.</p>
              </li>
             
          </ul>
        </article>
               {/* End of UI/UX */}
               <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Frontend Development.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Backend Development.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Frontend in React JS</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Backend in Node JS</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Php, Laravel.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Full Responsive Design.</p>
              </li>
          </ul>
        </article>
               {/* End of Web Development */}
               <article className='service'>
          <div className="service__head">
            <h3>Graphics Design</h3>
          </div>
          <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Logo.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>brochure.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Thumbnails.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Banners.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Social Media Post Covers.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Cover Letters</p>
              </li>
          </ul>
        </article>
               {/* End of Mobile App Development */}
      </div>
    </section>
  )
}

export default Services
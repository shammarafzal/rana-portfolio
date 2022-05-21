import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Carpet Delivery',
    github: 'https://github.com/rajpootrana99/carpetDeliveryUI',
    demo: 'https://github.com/rajpootrana99/carpetDeliveryUI'
  },

  {
    id: 2,
    image: IMG2,
    title: 'MyCareShift',
    github: 'https://github.com/rajpootrana99/beCaring',
    demo: 'https://apps.apple.com/pk/app/mycareshift/id1601412203'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Self Love Bible',
    github: 'https://github.com/rajpootrana99/Self-Love-Bible',
    demo: 'https://play.google.com/store/apps/details?id=au.com.theselflovebible.selflove.self_love'
  },
 
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
          {
            data.map(({id, image,title, github, demo})=> {
              return(
              <article key={id} className='portfolio__item'>
                    <div className="portfolio__item-image">
                      <img src={image} alt={title} />
                    </div>
                    <h3>{title}</h3>
                    <div className="portfolio__item-cta">
                    <a href={github} className='btn' target='_blank'>Github</a>
                      <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                    
              </article>
              )
            })
          }    
      </div>

    </section>
  )
}

export default Portfolio
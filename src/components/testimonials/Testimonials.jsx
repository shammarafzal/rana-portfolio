import React, { useRef, useState } from "react";
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpeg'
import AVTR2 from '../../assets/avatar2.webp'
import AVTR3 from '../../assets/avatar3.webp'
import AVTR4 from '../../assets/avatar4.jpeg'



// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";



const data=[
  {
    avatar: AVTR1,
    name: 'Ben Edwards',
    review: 'Rana is super good in web development and designing. Solid English & Efficient worker.'
  },
  {
    avatar: AVTR2,
    name: 'Quoartem',
    review: 'Muhammad is a extremely talented developer with a great way to “Research” new fields, and finding the perfect solution. It is always a pleasure.'
  },
  {
    avatar: AVTR3,
    name: 'Salvador Noguera',
    review: 'Very good skills, i will recommande him for another job!!! The best :)'
  },
  {
    avatar: AVTR4,
    name: 'Axel Vanzyl',
    review: 'Work done well & on time. We had great communication with Rana. He is solution oriented person and he is very quick. His skills were reasonably strong. I highly recommend him. Very pleased, thank you.'
  },
 
];

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container" 
      pagination={true} modules={[Pagination]} spaceBetween={40} slidesPerView={1}>
         { 
            data.map(({avatar, name,review}, index)=>{
            return(
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
               {review}
                </small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
import React, { useRef } from 'react';
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'
import { useAlert } from 'react-alert'
const Contact = () => {
  const alert = useAlert();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ud9mm8u', 'template_qugw9je', form.current, '1X2Z16_pZg9NEHS1w')
      .then((result) => {
          e.target.reset()
          alert.show('Message Sent Successfully!')
      }, (error) => {
        alert.show('Failed to Sent Message!')
      });
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
            <article className="contact__option">
              <MdOutlineMail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>muhammadrana523@gmail.com</h5>
              <a href="mailto:muhammadrana523@gmail.com" target='_blank'>Send a message</a>
            </article>
            <article className="contact__option">
              <RiMessengerLine className='contact__option-icon'/>
              <h4>Messenger</h4>
              <h5>Muhammad Rana</h5>
              <a href="https://m.me/rajpootrana99" target='_blank'>Send a message</a>
            </article>
            <article className="contact__option">
              <BsWhatsapp className='contact__option-icon'/>
              <h4>Whatsapp</h4>
              <h5>+923004267657</h5>
              <a href="https://api.whatsapp.com/send?phone=+923004267657" target='_blank'>Send a message</a>
            </article>
        </div>
        {/* End of Contact Options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' rows="7" placeholder="Your Message" required> </textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact
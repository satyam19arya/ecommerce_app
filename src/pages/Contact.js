import React from 'react';
import {Helmet} from "react-helmet";
import BreadCrumb from '../components/BreadCrumb';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_2crac8w', 'template_3uopgza', form.current, 'ZQdDY_A9RQX5fz5RM')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();
    };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact</title>
      </Helmet>
      <BreadCrumb title="Contact" />

      <section className='contact'>
        <h3 className='contact-us'>Contact us</h3>
        <div className='container contact_container'>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='name' placeholder='Enter your name' required />
                <input type="email" name='email' placeholder='Enter your email' required />
                <textarea name="message" rows="7" placeholder="Your message" required></textarea>
                <button type='submit' className='button'>Send Message</button>
            </form>
        </div>
      </section>
    </>
  )
}

export default Contact;
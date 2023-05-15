import React from 'react';
import Newsletter from '../images/newsletter.png'
import { Link } from 'react-router-dom';
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from 'react-icons/bs';

const Footer = () => {
  return (
    <>
     <footer className="py-3">
      <div className="container-xxl">
        <div className="row align-items-center">
          <div className="col-5">
            <div className="footer-top-data d-flex gap-30 align-items-center">
              <img src={Newsletter} alt='newletter' />
              <h4 className="mb-0 text-white">Sign up for Newsletter</h4>
            </div>
          </div>
          <div className="col-7">
            <div className="input-group">
                  <input
                    type="text"
                    className="form-control py-2" 
                    placeholder="Your Email Address" 
                    aria-label="Your Email Address" 
                    aria-describedby="basic-addon2"/>
                  <span className="input-group-text p-2" id="basic-addon2">
                    Subscribe
                  </span>
            </div>
          </div>
        </div>
      </div>
     </footer>

     <footer className="py-3">
      <div className="container-xxl">
        <div className="row">
          <div className="col-4">
            <h4 className="text-white mb-4">Contact us</h4>
            <div>
              <address className="text-white fs-6">
                116/6 JK Colony Jajmau Kanpur Nagar Uttar Pradesh 208010
              </address>
              <a href='tel:+91 9452851038' className="text-white mt-2 d-block mb-1">+91 9452851038</a>
              <a href='mailto:satyam19arya@gmail.com' className="text-white mt-2 d-block mb-0">satyam19arya@gmail.com</a>
              <div className="social_icons d-flex align-items-center gap-30 mt-4">
                <a className="text-white" href="https://www.linkedin.com/in/satyam-arya-101764205/">
                  <BsLinkedin className='fs-4'/>
                </a>
                <a className="text-white" href="https://www.instagram.com/satyam19arya/">
                  <BsInstagram className='fs-4'/>
                </a>
                <a className="text-white" href="https://github.com/satyam19arya">
                  <BsGithub className='fs-4'/>
                </a>
                <a className="text-white" href="https://github.com/satyam19arya">
                  <BsYoutube className='fs-4'/>
                </a>
              </div>
            </div>
          </div>
          <div className="col-3">
            <h4 className="text-white mb-4">Information</h4>
            <div className="footer-link d-flex flex-column">
              <Link className='text-white py-2 mb-1'>Privacy Policy</Link>
              <Link className='text-white py-2 mb-1'>Refund Policy</Link>
              <Link className='text-white py-2 mb-1'>Shipping Policy</Link>
              <Link className='text-white py-2 mb-1'>Terms & Conditions</Link>            </div>
          </div>
          <div className="col-3">
            <h4 className="text-white mb-4">Account</h4>
            <div className="footer-link d-flex flex-column">
              <Link className='text-white py-2 mb-1'>About Us</Link>
              <Link className='text-white py-2 mb-1'>Faq</Link>
              <Link className='text-white py-2 mb-1'>Contact</Link>
            </div>
          </div>
          <div className="col-2">
            <h4 className="text-white mb-4">Quick Links</h4>
            <div className="footer-link d-flex flex-column">
              <Link className='text-white py-2 mb-1'>Laptops</Link>
              <Link className='text-white py-2 mb-1'>Headphones</Link>
              <Link className='text-white py-2 mb-1'>Tablets</Link>
              <Link className='text-white py-2 mb-1'>Watch</Link>
            </div>
          </div>
        </div>
      </div>
     </footer>

     <footer className="py-2">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <p className="text-center mb-0 text-white">&copy; {new Date().getFullYear()} Made by Satyam Arya</p>
          </div>
        </div>
      </div>
     </footer>
    </>
  )
}

export default Footer;
import React, { useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Main() {
  return (
    <section id="main" className="hero has-background-black">
      <div className="main has-bg-img">
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-logo">
            <a className="logo" href="#main">
              <p>
                <span className="logo-1">Wasfan</span> <span className="logo-2">Wazeem</span>
              </p>
            </a>
          </div>

          <div className="navbar-end">
            <div className="navbar-menu">
              <div className="navbar-start">
                <a className="navbar-item has-text-white" href="#main">
                  Home
                </a>

                <a className="navbar-item has-text-white" href="#about">
                  About
                </a>

                <a className="navbar-item has-text-white" href="#services">
                  Services
                </a>

                <a className="navbar-item has-text-white" href="#skills">
                  Skills
                </a>

                <a className="navbar-item has-text-white" href="#testimonial">
                  Testimonials
                </a>

                <a className="navbar-item has-text-white" href="#contact">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>

        <div className="main-text">
          <h1 className="main-text-1">Hello, I'm</h1>
          <h1 className="main-text-2">Wasfan Wazeem</h1>
          <h1 className="main-text-3">Software Engineer | Freelancer</h1>
          <a href="#contact"><button className="get-in-touch-button button" onClick={"#contact"}>GET IN TOUCH</button></a>
        </div>

        <div className="icons has-text-centered">
          <a href="https://www.facebook.com/" target="_blank">
            <FontAwesomeIcon icon={faFacebookF} className="sc-media" size="lg" style={{ color: '#FBA820' }}/>
          </a>
          <a href="https://www.twitter.com/"  target="_blank">
            <FontAwesomeIcon icon={faTwitter} className="sc-media" size="lg"/>
          </a>
          <a href="https://www.instagram.com/"  target="_blank">
            <FontAwesomeIcon icon={faInstagram} className="sc-media" size="lg"/>
          </a>
          <a href="https://www.pinterest.com/" target="_blank">
            <FontAwesomeIcon icon={faPinterest} className="sc-media" size="lg"/>
          </a>
          <a href="https://www.youtube.com/" target="_blank">
            <FontAwesomeIcon icon={faYoutube} className="sc-media" size="lg"/></a>
        </div>
      </div>
    </section>
    )
}

export default Main
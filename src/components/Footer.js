import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Pdf from '../Docs/Wasfan Wazeem CV.pdf';

import 'aos/dist/aos.css';

function Footer() {

    return(
        <footer className="footer">
        <div className="content has-text-centered " data-aos="zoom-out">
            <p className="footer-text-1">Let’s work together</p>
            <p className="footer-text-2">I’m available for freelance work. Have any projects in your mind? Just feel free to contact me</p>
            <div className="button-area has-text-centered mt-6">
                <a href={Pdf}><button className="footer-button button">DOWNLOAD CV</button></a>
                <div className="hori-rect"></div>
                <a href="#contact"><button className="footer-button button">CONTACT ME</button></a>
            </div>
        </div>

        <nav className="footbar mt-5" role="navigation" aria-label="main navigation">
            <div className="foot-left">
                <div className="navbar-logo pl-6">
                    <a className="logo" href="#main">
                      <p><span className="logo-1">Wasfan</span>  <span className="logo-2">Wazeem</span></p>
                    </a>
                  </div>
            </div>
            <div className="foot-middle">
                <div className="navbar-menu">
                    <div className="navbar-start pt-4">
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
            <div className="foot-right">
                <div className="icons has-text-centered ml-6 pt-5">
                    <a href="https://www.facebook.com/" target="_blank"><FontAwesomeIcon icon={faFacebookF} className="sc-media" size="lg" style={{ color: '#FBA820' }}/></a>
                    <a href="https://www.twitter.com/" target="_blank"><FontAwesomeIcon icon={faTwitter} className="sc-media" size="lg"/></a>
                    <a href="https://www.instagram.com/" target="_blank"><FontAwesomeIcon icon={faInstagram} className="sc-media" size="lg"/></a>
                    <a href="https://www.pinterest.com/" target="_blank"><FontAwesomeIcon icon={faPinterest} className="sc-media" size="lg"/></a>
                    <a href="https://www.youtube.com/" target="_blank"><FontAwesomeIcon icon={faYoutube} className="sc-media" size="lg"/></a>
                </div>
            </div>
        </nav>

        <p className="copyright">© 2022 Wasfan Wazeem. All rights reserved</p>
        
        </footer>
    )
}

export default Footer
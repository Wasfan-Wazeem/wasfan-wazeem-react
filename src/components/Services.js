import React from "react";
import uiuxImg from "../images/UI UX.png";
import webdevImg from "../images/Web Dev.png";
import graphicdesignImg from "../images/Graphic Design.png";
import 'aos/dist/aos.css';

function Services() {

    return(
        <section className="services section has-text-centered">
            <h1 id="services" className="services-title" data-aos="fade-up" data-aos-anchor-placement="top-center">SERVICES</h1>
            <p className="services-info" data-aos="zoom-in">Things that I can do for my clients. Just make your good<br/> trust I love to provide quality works.</p>

            <div className="services-grid">
                <div className="service-card has-text-centered" data-aos="flip-right">
                    <img src={uiuxImg} alt="UI/UX Design"/>
                    <h1>UI/UX Design</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci eget mi elit cursus donec amet sed sagittis.</p> 
                </div>
                <div className="service-card has-text-centered" data-aos="flip-up">
                    <img src={webdevImg} alt="Web Development"/>
                    <h1>Web Development</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci eget mi elit cursus donec amet sed sagittis.</p> 
                </div>
                <div className="service-card has-text-centered" data-aos="flip-left">
                    <img src={graphicdesignImg} alt="Graphic Design"/>
                    <h1>Graphic Design</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci eget mi elit cursus donec amet sed sagittis.</p>  
                </div>
            </div>

            <div className="circle-nav has-text-centered">
                <div style={{backgroundColor: "#FBA820"}}></div>
                <div></div>
                <div></div>
            </div>
        </section>
    )
}

export default Services;

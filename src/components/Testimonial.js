import React from "react";
import TestimonialImage from "../images/Testimonial.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong , faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

import 'aos/dist/aos.css';

function Testimonial() {

  return (
    <section id="testimonial" className="testimonials section">
      <h1 className="testimonials-title" data-aos="fade-up" data-aos-anchor-placement="top-center">TESTIMONIALS</h1>
      <div className="columns">
        <div className="column has-text-centered" >
          <img className="testimonial-img" src={TestimonialImage} alt="Testimonial" data-aos="fade-right"/>
        </div>
        <div className="test-col column" data-aos="fade-left">
          <div>
            <p className="testimonial-text">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Dapibus eu placerat at nisl posuere aliquet amet pharetra
              malesuada. Suspendisse nisl ac at tortor. Sit faucibus
              placerat at nisl posuere aliquet amet pharetra suspendisse
              risus.”
            </p>
            <p className="testimonial-name">Melissa Gunathilaka</p>
            <p className="testimonial-info">Software Engineer at UOC</p>
            <button className="left-button" style={{ color: "rgba(64, 64, 64, 0.25)" }}>
                <FontAwesomeIcon icon={faArrowLeftLong} size="2x"/>
            </button>
            <button className="right-button">
                <FontAwesomeIcon icon={faArrowRightLong} size="2x"/>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;

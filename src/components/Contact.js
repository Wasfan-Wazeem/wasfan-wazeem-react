import React from "react";

import 'aos/dist/aos.css';

function Contact() {
    
    return(
        <section id="contact" class="contact section has-text-centered">
        <h1 class="contact-title" data-aos="fade-up" data-aos-anchor-placement="top-center">CONTACT</h1>

        <div class="field has-text-centered" data-aos="fade-up">
            <div class="control">
              <input class="input" type="text" placeholder="Your Name*"/>
            </div>
          </div>
          
          <div class="field has-text-centered" data-aos="fade-up">
            <div class="control">
              <input class="input" type="email" placeholder="E-Mail Address*"/>
            </div>
          </div>
        
          
          <div class="field has-text-centered" data-aos="fade-up">
            <div class="control">
              <textarea class="textarea input" placeholder="Message*"></textarea>
            </div>
          </div>
          
          <div class="field is-grouped">
            <div class="control mt-5">
              <button class="send-button button" onClick={function sent(){alert("Message Successfully Sent")}} data-aos="zoom-in">SEND</button>
            </div>
          </div>
        </section>
    )
}



export default Contact
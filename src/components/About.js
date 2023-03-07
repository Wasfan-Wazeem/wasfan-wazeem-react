import React, { useEffect } from "react";
import Second from "../images/Second.jpg"
import Frame1 from "../images/Frame 1.png"
import Vector from "../images/vector.png"
import Divider from "../images/Divider.png"
import Frame2 from "../images/Frame 2.png"
import Vector2 from "../images/Vector 2.png"
import BCS from "../images/bcs.png"
import Pdf from '../Docs/Wasfan Wazeem CV.pdf';
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
    useEffect(()=>{
        AOS.init();
    }, []);

    return(
        <section  className="about section">
        <h1 id="about" className="about-title has-text-centered" data-aos="fade-up" data-aos-anchor-placement="top-center">ABOUT</h1>
        <div className="about-grid">
            <div className="column has-text-centered">
                <div className="rectangle" data-aos="fade-right"></div>
                <img className="Second " src={Second} data-aos="fade-up-right"/>
            </div>
            <div className="boxi column has-text-centered" data-aos="fade-up-left">
                <div className="box-1"></div>
                <div className="box-2"></div>
                <div className="box-3"></div>
                <p className="intro text-align-left">I have acquired and sharpened ipsum dolor sit amet, consectetur adipiscing elit. Dapib eu placerat at nisl posuere aliquet amet pharetra malesuada. Spendisse nisl ac at tortor. Sit faucibus suspendisse risus vulputate pulvinar cursus suspendisse risus vulputate  enim pharetra eu. et, consectetur adipiscing elit. Dapib eu <span className="h-text">trustworthy creative and an effective communicator</span> malesuada. Spendisse nisl ac at tortor. Sit faucibus suspendisse risus vulputate pulvinar cursus suspendisse risus vulputate  enim pharetra eu. et, consectetur adipiscing elit. Dapib eu placerat at nisl posuere aliquet amet pharetra malesuada. Spendisse nisl ac at tortor. 
                    <br/><br/>
                    pendisse nisl ac at tortor. Sit faucibus suspendisse risus vulputate pulvinar cursus suspendisse risus vulputate  enim pharetra eu. et, consectetur adipiscing elit. </p>
            </div>
        </div>

        <div className="border">
            <div className="education-qualifications">
                <h1 className="edu-heading" data-aos="zoom-out-down">Education Qualifications</h1>
                <div className="frame" data-aos="fade-right">
                    <img className="frame-1-img" src={Frame1}/>
                </div>
                <div className="info-temp" >
                    <div className="edu-info" data-aos="fade-right">
                        <h1 className="subject">BSC(Hons). INFORMATION SYSTEMS</h1>
                        <h2 className="institue">at University of Colombo School Of Computing</h2>
                        <h3 className="period">Reading</h3>
                    </div>
                    <div className="edu-info" data-aos="fade-right">
                        <h1 className="subject">G.C.E ADVANCED LEVEL</h1>
                        <h2 className="institue">at St. Thomas College Matale</h2>
                        <h3 className="period">2018-2020</h3>
                    </div>
                    <div className="edu-info" data-aos="fade-right">
                        <h1 className="subject">G.C.E ORDINARY LEVEL</h1>
                        <h2 className="institue">at Sussex College Kandy</h2>
                        <h3 className="period">2009-2017</h3>
                    </div>
                    <img className="vector" src={Vector} data-aos="fade-left"/>
                </div>
            </div>

            <div className="divider" has-text-centered>
                <img src={Divider}/>
            </div>


            <div className="education-qualifications">
                <h1 className="edu-heading" data-aos="zoom-out-down">Professional Qualifications</h1>
                <div className="frame" data-aos="fade-right">
                    <img className="frame-2-img" src={Frame2}/>
                </div>
                <div className="info-temp mt-3" >
                    <div className="edu-info" data-aos="fade-right">
                        <h1 className="subject">BCS HEQ (Higher Education Qualification)</h1>
                        <h2 className="institue">at BCS, The Chartered Institue For IT</h2>
                        <h3 className="period">Currently Enrolled</h3>
                    </div>
                    <img className="bcs" src={BCS} data-aos="fade-left"/>
                    <img className="vector-2" src={Vector2} data-aos="fade-left"/>
                </div>
            </div>

            <div className="divider" has-text-centered>
                <img src={Divider}/>
            </div>

            <div className="education-qualifications has-text-centered">
                <h1 className="edu-heading" data-aos="fade-up">Work Experience</h1>
                <div className="info-temp mt-3">
                    <div className="edu-info" data-aos="fade-up">
                        <h1 className="subject">Executive Operations</h1>
                        <h2 className="institue">at Legacy Health LLC - RCM</h2>
                        <h3 className="period">11/2020 - 02/2022</h3>
                    </div>
                    <div className="frame has-text-centered">
                        <img className="frame-3-img" src={Frame2} data-aos="fade-up"/>
                    </div>
                    <img className="vector-2" src={Vector2} data-aos="fade-left"/>
                </div>
            </div>
            
            <div className="divider" >
                <img src={Divider}/>
            </div>
        
            <div className="download-cv-button has-text-centered pb-6" data-aos="zoom-in">
                <a href={Pdf}><button className="get-in-touch-button button">DOWNLOAD CV</button></a>
            </div>
        </div> 
        </section>
    )
}

export default About
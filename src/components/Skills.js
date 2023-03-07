import React from "react";
import pythonLogo from "../images/python.png";
import ubuntuLogo from "../images/ubuntu.png";
import gitLogo from "../images/github control.png";
import cLogo from "../images/c.png";
import htmlLogo from "../images/html.png";
import cssLogo from "../images/css.png";
import jsLogo from "../images/javascript.png";
import mysqlLogo from "../images/mysql.png";
import cPlusPlusLogo from "../images/c++.png";
import javaLogo from "../images/Java.png";
import phpLogo from "../images/php.png";
import wordpressLogo from "../images/wordpress.png";
import figmaLogo from "../images/figma.png";

import 'aos/dist/aos.css';

function Skills() {

  return (
    <section id="skills" className="myskills section">
      <h1 className="myskills-title" data-aos="fade-up" data-aos-anchor-placement="top-center">My Skills</h1>
      <div className="grid-1" data-aos="zoom-in" data-aos-delay="250">
        <div className="card has-text-centered">
          <img src={pythonLogo} alt="Python" />
          <p>Python</p>
        </div>
        <div className="card has-text-centered">
          <img src={ubuntuLogo} alt="Ubuntu" />
          <p>Ubuntu</p>
        </div>
        <div className="card has-text-centered">
          <img src={gitLogo} alt="Git Source Control" />
          <p style={{ paddingTop: "0.3rem" }}>Git Source<br />Control</p>
        </div>
        <div className="card has-text-centered">
          <img src={cLogo} alt="C Programming" />
          <p>C Programming</p>
        </div>
        <div className="card has-text-centered">
          <img src={htmlLogo} alt="HTML" />
          <p>HTML</p>
        </div>
      </div>

      <div className="grid-2" data-aos="zoom-in">
        <div className="card has-text-centered">
          <img src={cssLogo} alt="CSS" />
          <p>CSS</p>
        </div>
        <div className="card has-text-centered">
          <img src={jsLogo} alt="Javascript" />
          <p>Javascript</p>
        </div>
        <div className="card has-text-centered">
          <img src={mysqlLogo} alt="MySQL" />
          <p>MySQL</p>
        </div>
        <div className="card has-text-centered">
          <img src={cPlusPlusLogo} alt="C++" />
          <p>C++</p>
        </div>
      </div>

      <div className="grid-3" data-aos="zoom-in">
        <div className="card has-text-centered">
          <img src={javaLogo} alt="JAVA" />
          <p>JAVA</p>
        </div>
        <div className="card has-text-centered">
          <img src={phpLogo} alt="PHP" />
          <p>PHP</p>
        </div>
        <div className="card has-text-centered">
          <img src={wordpressLogo} alt="Wordpress" />
          <p>Wordpress</p>
        </div>
      </div>

      <div className="grid-3" data-aos="zoom-in">
        <div></div>
        <div className="card has-text-centered">
          <img src={figmaLogo} alt="Figma" />
          <p>Figma</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;

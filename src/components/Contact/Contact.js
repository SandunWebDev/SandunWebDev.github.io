/**
 * Contact Component - Render Contact Details
 */

import React, { Component } from "react";

// Font Awesome Resources
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faGoogle from "@fortawesome/fontawesome-free-brands/faGoogle";
import faLinkedin from "@fortawesome/fontawesome-free-brands/faLinkedin";
import faGithub from "@fortawesome/fontawesome-free-brands/faGithub";
import faTwitter from "@fortawesome/fontawesome-free-brands/faTwitter";


import "./Contact.css";

class Skills extends Component {
  render() {
    return (
      <div className="Contact" id="Contact">
       <h1 className="section__header Contact__header">CONTACT</h1>
       <div className="Contact__cards__wrapper">
       <h1>If you wanna get in touch, talk to me about a project or just say hi, Feel free to contact me through follwing mediums. I look forward to hearing from you.</h1>
       <a href="mailto:SandunWebDev@gmail.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGoogle} className="faIcon" /></a>
       <a href="https://github.com/SandunWebDev" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} className="faIcon" /></a>
       <a href="https://www.linkedin.com/in/SandunWebDev" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} className="faIcon" /></a>
       <a href="https://twitter.com/SandunWebDev" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} className="faIcon" /></a>
       </div>
        </div>
    );
  }
}

export default Skills;

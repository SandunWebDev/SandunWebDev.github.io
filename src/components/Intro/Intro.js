/**
 * Intro Component - First component that get shown to users.
 */

import React, { Component } from "react";
import Particles from "react-particles-js";

// Font Awesome Resources
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faArrowCircleDown from "@fortawesome/fontawesome-free-solid/faArrowCircleDown";
import faGoogle from "@fortawesome/fontawesome-free-brands/faGoogle";
import faLinkedin from "@fortawesome/fontawesome-free-brands/faLinkedin";
import faGithub from "@fortawesome/fontawesome-free-brands/faGithub";
import faTwitter from "@fortawesome/fontawesome-free-brands/faTwitter";

import SVGLogo from "./SVGLogo"; // Importing logo as a SVG element
import particleConfig from "./particleConfig.json"; // Configuration JSON for "Particle" component

import "./Intro.css";

class Intro extends Component {
  // Handle smooth scroll into given id's element
  handleSmoothScrolling(id) {
    const element = document.getElementById(id);

    // Only scrolling if that ids available.
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    }
  }

  render() {
    return (
      <div className="Intro" id="Intro">
        {/* Just a wrapper layer to blend background image */}
        <Particles className="Intro__particles" params={particleConfig} />
        <div className="Intro_wrapperLayer" />
        <div className="Intro__description">
          <div className="Intro__logo">{SVGLogo}</div>
          <h1>Hello, I'm Sandun.</h1>
          <h2>Full Stack Developer & Designer</h2>
          <div
            className="Intro__nextIcon"
            onClick={() => this.handleSmoothScrolling("Skills")}
          >
            <FontAwesomeIcon icon={faArrowCircleDown} />
          </div>
        </div>
        <div className="Intro_contact">
          <a
            href="mailto:SandunWebDev@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGoogle} className="faIcon" />
          </a>
          <a
            href="https://github.com/SandunWebDev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="faIcon" />
          </a>
          <a
            href="https://www.linkedin.com/in/SandunWebDev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="faIcon" />
          </a>
          <a
            href="https://twitter.com/SandunWebDev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} className="faIcon" />
          </a>
        </div>
      </div>
    );
  }
}

export default Intro;

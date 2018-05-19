/**
 * Intro Component - First component that get shown to users.
 */

import React, { Component } from "react";
import Particles from "react-particles-js";

// Font Awesome Resources
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faArrowCircleDown from "@fortawesome/fontawesome-free-solid/faArrowCircleDown";

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
          <div className="Intro__nextIcon" onClick={() => this.handleSmoothScrolling("Skills")}>
            <FontAwesomeIcon icon={faArrowCircleDown} />
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;

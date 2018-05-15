/**
 * Intro Component - First component that get shown to users.
 */

import React, { Component } from "react";
import Particles from "react-particles-js";
import particleConfig from "./particleConfig.json";

import "./Intro.css";

class Intro extends Component {
  render() {
    return (
      <div className="Intro">
        {/* <Particles className="Intro__particles" params={particleConfig} /> */}
        <div className="Intro__description">
          <h1>Hello, I'm Sandun.</h1>
          <h2>Full Stack Developer & Designer</h2>
        </div>
      </div>
    );
  }
}

export default Intro;

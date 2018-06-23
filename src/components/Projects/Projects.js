/**
 * This component render Projects using "ProjectCard"s.
 */

import React, { Component } from "react";

import ProjectCard from "./ProjectCard/ProjectCard";

// Thumbnail photos of projects
import chinguCouponsThumb from "../../assets/projects/chinguCoupons.jpg";
import cryptoMarsThumb from "../../assets/projects/cryptoMars.jpg";
import marsMapsThumb from "../../assets/projects/marsMaps.jpg";
import portfolioThumb from "../../assets/projects/portfolio.jpg";

import { addPageAnimations } from "../../helpers/animations";
import "./Projects.css";

// All My projects details. Use this info to generate each "PrjectCard".
const myProjects = [
  ,
  {
    image: cryptoMarsThumb,
    heading: "Blockchain Crypto Mars",
    labels: ["FrontEnd", "React", "React Router", "SVG"],
    description: "",
    liveLink: "http://cryptomars.surge.sh/",
    codeLink: "https://github.com/SandunWebDev/blockchain"
  },
  {
    image: chinguCouponsThumb,
    heading: "Chingu Coupon",
    labels: [
      "FullStack",
      "React",
      "Redux",
      "NodeJS",
      "Express",
      "MongoDB",
      "Mongoose",
      "Passport",
      "Authentication",
      "Heroku"
    ],
    description: "",
    liveLink: "http://chingu-coupons.herokuapp.com/",
    codeLink: "https://github.com/chingu-voyage4/Bears-Team-4"
  },
  {
    image: marsMapsThumb,
    heading: "Mars Maps",
    labels: ["FrontEnd", "React", "React Router", "SVG"],
    description: "",
    liveLink: "https://mapofmars.surge.sh/",
    codeLink: "https://github.com/SandunWebDev/marsMaps"
  },
  {
    image: portfolioThumb,
    heading: "Portfolio",
    labels: ["FrontEnd", "React", "React Router"],
    description: "",
    liveLink: "https://sandunwebdev.github.io",
    codeLink: "https://github.com/SandunWebDev/SandunWebDev.github.io"
  }
];

class Projects extends Component {
  // Getting reference to parentDom to apply animations.
  ProjectWrapperDomRef = React.createRef();

  render() {
    // Adding animations if cuurent page is active
    this.props.visibleElement === "Projects"
      ? addPageAnimations(this.ProjectWrapperDomRef, "Projects", "pulse")
      : "";

    return (
      <div className="Projects" id="Projects">
        <h1 className="section__header Projects__header">PROJECTS</h1>
        <div
          className="Projects__cards__wrapper"
          ref={this.ProjectWrapperDomRef}
        >
          {/* Generating ProjectCards */}
          {myProjects.map((project, index) => {
            return <ProjectCard project={project} key={index} />;
          })}
        </div>
      </div>
    );
  }
}

export default Projects;

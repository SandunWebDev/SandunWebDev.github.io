/**
 * This component render Projects using "ProjectCard"s.
 */

import React, { Component } from "react";

import ProjectCard from "./ProjectCard/ProjectCard";

// Thumbnail photos of projects
import chinguCouponsThumb from "../../assets/projects/chinguCoupons.png";
import cryptoMarsThumb from "../../assets/projects/cryptoMars.png";
import marsMapsThumb from "../../assets/projects/marsMaps.png";
import portfolioThumb from "../../assets/projects/portfolio.png";

import { addPageAnimations } from "../../helpers/animations";
import "./Projects.css";

// All My projects details. Use this info to generate each "PrjectCard".
const myProjects = [
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
    description:
      "From online stores to social media sites, cards are fast becoming a popular web design pattern. One of the most obvious reasons is that card From online stores to social media sites, cards are fast becoming a popular web design pattern. One of the most obvious reasons is that card",
    liveLink: "adad",
    codeLink: "adadasdsd"
  },
  {
    image: cryptoMarsThumb,
    heading: "Crypto Mars",
    labels: ["FrontEnd", "React", "React Router", "SVG"],
    description: "ads ad ad d ad ad adadad  dad adad ad a dad ad ad ad",
    liveLink: "adad",
    codeLink: "adadasdsd"
  },
  {
    image: marsMapsThumb,
    heading: "Mars Maps",
    labels: ["FrontEnd", "React", "React Router", "SVG"],
    description: "ads ad ad d ad ad adadad  dad adad ad a dad ad ad ad",
    liveLink: "adad",
    codeLink: "adadasdsd"
  },
  {
    image: portfolioThumb,
    heading: "Portfolio",
    labels: ["FrontEnd", "React", "React Router"],
    description: "ads ad ad d ad ad adadad  dad adad ad a dad ad ad ad",
    liveLink: "adad",
    codeLink: "adadasdsd"
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

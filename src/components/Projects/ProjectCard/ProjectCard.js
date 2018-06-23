/**
 * This component render individual project card.
 * Get props called "project" whitch should be a object containing "image, heading, labels,
 * description, liveLink, codeLink" details of that project.
 **/

import React, { Component } from "react";

// Font Awesome Resources
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faGlobe from "@fortawesome/fontawesome-free-solid/faGlobe";
import faFileCode from "@fortawesome/fontawesome-free-solid/faFileCode";

import "./ProjectCard.css";

class ProjectCard extends Component {
  render() {
    const {
      image,
      heading,
      labels,
      description,
      liveLink,
      codeLink
    } = this.props.project;

    return (
      <div className="ProjectCard">
        <div className="ProjectCard__image">
          <img src={image} alt="" className="s8" />
        </div>

        <div className="ProjectCard__heading">{heading}</div>
        {/* Generating Label for each */}
        <div className="ProjectCard__labels">
          {labels.map((label, index) => <div key={index}>{label}</div>)}
        </div>
        {/* <div className="ProjectCard__description">
          <p>{description}</p>
        </div> */}
        <div className="ProjectCard__buttons">
          <a href={liveLink} target="_blank">
            <FontAwesomeIcon icon={faGlobe} className="faIcon" />LIVE
          </a>
          <a href={codeLink} target="_blank">
            <FontAwesomeIcon icon={faFileCode} className="faIcon" />CODE
          </a>
        </div>
      </div>
    );
  }
}

export default ProjectCard;

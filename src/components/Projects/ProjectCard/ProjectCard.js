/**
 * This component render individual project card.
 * Get props called "project" whitch should be a object containing "image, heading, labels,
 * description, liveLink, codeLink" details of that project.
 **/

import React, { Component } from "react";

// Font Awesome Resources
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faCloud from "@fortawesome/fontawesome-free-solid/faCloud";
import faCodeBranch from "@fortawesome/fontawesome-free-solid/faCodeBranch";

import "./ProjectCard.css";

class ProjectCard extends Component {
	render() {
		const { image, heading, labels, description, liveLink, codeLink, hidden } =
			this.props.project;

		return (
			<div className={`ProjectCard ${hidden ? "ProjectCard-hidden" : ""}`}>
				<div className="ProjectCard__image">
					<img src={image} alt="" className="s8" />

					<div className="ProjectCard__Hoover">
						<div>
							<div className="ProjectCard__description">{description}</div>
							<div className="ProjectCard__buttons">
								<div title={`${liveLink === "#" ? "You are on it. 😊" : ""}`}>
									<a
										href={liveLink}
										target="_blank"
										className={`${
											liveLink === "#" ? "ProjectCard__buttons--disabled" : ""
										}`}
									>
										<FontAwesomeIcon icon={faCloud} className="faIcon" />
										LIVE
									</a>
								</div>
								<div
									title={`${
										codeLink === "#" ? "Sorry 😟 Client Project." : ""
									}`}
								>
									<a
										href={codeLink}
										target="_blank"
										className={`${
											codeLink === "#" ? "ProjectCard__buttons--disabled" : ""
										}`}
									>
										<FontAwesomeIcon icon={faCodeBranch} className="faIcon" />
										CODE
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="ProjectCard__heading">{heading}</div>
				{/* Generating Label for each */}
				<div className="ProjectCard__labels">
					{labels.map((label, index) => (
						<div key={index}>{label}</div>
					))}
					<div>...</div>
				</div>
			</div>
		);
	}
}

export default ProjectCard;

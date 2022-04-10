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

import { addPageAnimations } from "../../helpers/animations";
import contactAvatar from "../../assets/contact.png";
import "./Contact.css";

class Skills extends Component {
	// Getting reference to parentDom to apply animations.
	ContactWrapperDomRef = React.createRef();

	render() {
		// Adding animations if cuurent page is active
		this.props.visibleElement === "Contact"
			? addPageAnimations(this.ContactWrapperDomRef, "Contact", "pulse")
			: "";

		return (
			<div className="Contact globalLayoutWrapper" id="Contact">
				<div>
					<h1 className="section__header Contact__header">CONTACT</h1>
					<div className="Contact__cards__wrapper">
						<div className="Contact__cards__wrapper_intro">
							<p>
								I am an experienced full-stack developer who specializes in
								React and NodeJS, Along with competency in a wide range of web
								development aspects including UI & API Development, DevOps,
								Cloud Service Providers and Designing.
							</p>

							<p>
								I am genuinely passionate about web development and like to make
								ideas into web apps with aesthetic, interactive interfaces and
								functional, reliable backends. Also an open-source enthusiast
								too. I learned a lot from the open-source community and I love
								how collaboration and knowledge sharing happened through
								open-source.
							</p>
							
							<p>
								If you wanna get in touch, talk to me about a project or just
								say Hi, Feel free to contact me through following mediums. I
								look forward to hearing from you.
							</p>
						</div>
						<img src={contactAvatar} width="300" />
						<div className="Contact__Icons" ref={this.ContactWrapperDomRef}>
							<a
								href="mailto:SandunWebDev@gmail.com"
								target="_blank"
								rel="noopener noreferrer"
								title="GMail"
							>
								<FontAwesomeIcon icon={faGoogle} className="faIcon" />
							</a>
							<a
								href="https://github.com/SandunWebDev"
								target="_blank"
								rel="noopener noreferrer"
								title="GitHub"
							>
								<FontAwesomeIcon icon={faGithub} className="faIcon" />
							</a>
							<a
								href="https://www.linkedin.com/in/SandunWebDev"
								target="_blank"
								rel="noopener noreferrer"
								title="LinkdIn"
							>
								<FontAwesomeIcon icon={faLinkedin} className="faIcon" />
							</a>
							<a
								href="https://twitter.com/SandunWebDev"
								target="_blank"
								rel="noopener noreferrer"
								title="Twitter"
							>
								<FontAwesomeIcon icon={faTwitter} className="faIcon" />
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Skills;

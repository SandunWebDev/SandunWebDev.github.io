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
import rpfPhotographyThumb from "../../assets/projects/rfpPhotography.jpg";
import jsonPatchAPIThumb from "../../assets/projects/jsonPatchAPI.jpg";
import mazeGameThumb from "../../assets/projects/mazeGame.jpg";
import hbServerMonitorThumb from "../../assets/projects/hbServerMonitor.jpg";

import { addPageAnimations } from "../../helpers/animations";
import "./Projects.css";

// All My projects details. Use this info to generate each "PrjectCard".
const myProjects = [
	{
		image: rpfPhotographyThumb,
		heading: "Roshan Fernando Photography",
		labels: [
			"Fullstack",
			"React",
			"React Router",
			"Redux",
			"Firebase",
			"Photoshop",
			"File Uploader",
			"Image Slider",
			"Custom Admin Panel",
		],
		description: "",
		liveLink: "https://rfpportfolio-oct3.web.app",
		codeLink: "#",
	},
	{
		image: cryptoMarsThumb,
		heading: "Blockchain Crypto Mars",
		labels: [
			"FrontEnd",
			"React",
			"React Router",
			"Semantic UI",
			"SVG Manipulation",
		],
		description: "",
		liveLink: "http://cryptomars.surge.sh/",
		codeLink: "https://github.com/SandunWebDev/blockchain",
	},
	{
		image: mazeGameThumb,
		heading: "Maze Game",
		labels: [
			"Frontend",
			"React",
			"React Router",
			"Howler Audio",
			"Docker",
			"Docker Compose",
			"NginX",
		],
		description: "",
		liveLink: "https://objective-shannon-989792.netlify.com/",
		codeLink: "https://github.com/SandunWebDev/maze-game",
	},
	{
		image: hbServerMonitorThumb,
		heading: "Server Monitor",
		labels: [
			"Fullstack",
			"React",
			"React Router",
			"Redux",
			"Redux Form",
			"Blueprint UI",
			"NodeJS",
			"Express",
			"Postgres",
			"Sequelize",
			"Twilio API",
			"CORS",
			"Cron Jobs",
			"Unit / Integratrion / E2E Test",
			"Jest / Mocha / Sinon / Cypress",
			"Storybook",
			"Linting",
			"CI / CD",
			"Travis",
			"Docker",
			"Kubernetes",
			"NginX",
			"Google Cloud",
		],
		description: "",
		liveLink: "http://34.70.233.54/",
		codeLink: "https://github.com/SandunWebDev/hackerbay-frontend",
	},
	{
		image: chinguCouponsThumb,
		heading: "Chingu Coupon",
		labels: [
			"FullStack",
			"React",
			"Redux",
			"Bootstrap",
			"Material UI",
			"SAAS",
			"NodeJS",
			"Express",
			"Formik",
			"EJS",
			"MongoDB",
			"Mongoose",
			"AtlasDB",
			"Passport",
			"Authentication",
			"Heroku",
		],
		description: "",
		liveLink: "http://chingu-coupons.herokuapp.com/",
		codeLink: "https://github.com/chingu-voyage4/Bears-Team-4",
	},
	{
		image: jsonPatchAPIThumb,
		heading: "JSON Patching & Image Resizing API",
		labels: [
			"Backend",
			"NodeJS",
			"Express",
			"CORS",
			"WebToken",
			"Passport",
			"BCrypt",
			"Husky",
			"Unit & Integration Test",
			"Jest",
			"CI / CD",
			"Docker",
			"Travis",
			"CodeCov",
			"Postman",
			"Heroku",
			"Image Resizing",
			"JSON Patching",
		],
		description: "",
		liveLink: "https://json-patch-api.herokuapp.com/",
		codeLink: "https://github.com/SandunWebDev/JSON-Patch-API",
	},
	{
		image: marsMapsThumb,
		heading: "Mars Maps",
		labels: [
			"FrontEnd",
			"React",
			"React Router",
			"Semantic UI",
			"SVG Manipulation",
		],
		description: "",
		liveLink: "https://mapofmars.surge.sh/",
		codeLink: "https://github.com/SandunWebDev/marsMaps",
	},
	{
		image: portfolioThumb,
		heading: "Portfolio",
		labels: [
			"FrontEnd",
			"React",
			"React Router",
			"Touch and Gesture Navigation",
		],
		description: "",
		liveLink: "https://sandunwebdev.github.io",
		codeLink: "https://github.com/SandunWebDev/SandunWebDev.github.io",
	},
	{
		// This is just used to make alignment work nicely.
		image: "",
		heading: "",
		labels: [],
		description: "",
		liveLink: "",
		codeLink: "",
		hidden: true,
	},
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

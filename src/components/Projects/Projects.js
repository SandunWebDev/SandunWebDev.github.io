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
		description:
			"Brand website created for a local client who specializes in photography. It has multiple pages with a simple and elegant design. Specially, The gallery page is categorized into multiple main & subsections that contain related photosets. The client can Add, Delete, Edit, Update sections, photos, etc... through custom made admin dashboard.",
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
			"Illustrator",
		],
		description:
			"Frontend project part created for a USA client's Etherium Blockchain backend project. It's a custom created, interactive SVG-Map related product and contains a landing page and dashboard. On the dashboard, users can view each map part's details, buy sections, etc... when connected to the backend.",
		liveLink: "http://cryptomars.surge.sh/",
		codeLink: "#",
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
		description:
			"Simple maze game created using React. Users can specify how large of maze is needed and then move the character through arrow keys to collect mushrooms. Also, This project is completely dockerized and available on docker hub.",
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
			"Unit / Integration / E2E Test",
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
		description:
			"Full-stack project created to monitor websites & API endpoints. Users can signup/login and then on the dashboard add, monitor links which they need. The project does complete CI/CD by using multiple testings (Unit/Integration/E2E) and Docker/Kubernetes.  Also, This project is hosted on Google Cloud's VM Cluster.",
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
		description:
			"Full-stack project created by a collaboration of three developers. It contains a mock web site of 'RetailMeNot.com' with the basic features. Users can signup/login, view coupons, add comments, submit coupons, etc... Its hosted on heroku dynos and use MVC architecture.",
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
		description:
			"Express Server API Project that provides endpoints for JSON Patching and Image Resizing. Users first need to get an authorized token by login and use that token for other requests. The project does complete CI/CD by using multiple testings (Unit/Integration) and Docker.",
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
		description:
			"Frontend project created to checkout SVG Manipulation and SemanticUI framework. Users can view mars map places with interactive SVG plain. In addition, there is more info and gallery of mars in separate pages.",
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
		description:
			"My portfolio. You already are on it. 😃  Anyway, It's a frontend project created to showcase my skills, projects, info, etc... By the way, It can be navigated through touch & mouse gestures and arrow keys. Try It.",
		liveLink: "#",
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

/**
 * This component render Projects using "ProjectCard"s.
 */

import React, { Component } from "react";

import Popup from "reactjs-popup";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faExclamationCircle from "@fortawesome/fontawesome-free-solid/faExclamationCircle";
import ProjectCard from "./ProjectCard/ProjectCard";

// Thumbnail photos of projects
import adhikariRetouchingThumb from "../../assets/projects/adhikariRetouching.jpg";
import chinguCouponsThumb from "../../assets/projects/chinguCoupons.jpg";
import cryptoMarsThumb from "../../assets/projects/cryptoMars.jpg";
import marsMapsThumb from "../../assets/projects/marsMaps.jpg";
import portfolioThumb from "../../assets/projects/portfolio.jpg";
import rpfPhotographyThumb from "../../assets/projects/rfpPhotography.jpg";
import jsonPatchAPIThumb from "../../assets/projects/jsonPatchAPI.jpg";
import mazeGameThumb from "../../assets/projects/mazeGame.jpg";
import hbServerMonitorThumb from "../../assets/projects/hbServerMonitor.jpg";
import wizardPassportThumb from "../../assets/projects/wizardPassport.jpg";
import devGagThumb from "../../assets/projects/devGag.jpg";

import { addPageAnimations } from "../../helpers/animations";
import "./Projects.css";
// All My projects details. Use this info to generate each "PrjectCard".
const myProjects = [
	{
		// This is just used to make alignment work nicely.
		image: adhikariRetouchingThumb,
		heading: "Adhikari Retouching Agency",
		labels: [
			"FrontEnd",
			"Gatsby",
			"React",
			"GraphQL",
			"Multiple Sourcing",
			"Contetntful",
			"AOS",
			"PWA",
			"CI / CD",
			"Netifly",
			"Analytics",
			"Google Tag Manager",
			"Photoshop",
			"Parallax",
			"Image Comparer",
			"Client Uploads",
		],
		description: `Website created for "Photo Retouching Agency" client. It has an interactive and modern design to fastly convey the agency's services to its users. Also, this site is piped to build by sourcing multiple outside sources, like Contentful, MD, Etc... So Agency can easily update content/photos their own on those and website will be updated automatically.`,
		liveLink: "https://adhikariretouching.com/",
		codeLink: "#",
	},
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
			"Website created for a local photography client. It has multiple pages with a client routing. Specially, the gallery page is categorized into multiple main sections & sub sections that contain related photosets. The client can Add, Delete, Edit, Update sections, photos, etc... through custom made admin dashboard.",
		liveLink: "https://rfpportfolio-oct3.web.app",
		codeLink: "#",
	},
	{
		image: wizardPassportThumb,
		heading: "Wizard Passport",
		labels: [
			"FULLSTACK",
			"SERVERLESS LAMBDA",
			"TYPESCRIPT",
			"AWS",
			"SSR",
			"REACT",
			"REACT LOCATION",
			"REACT HOOK FORM",
			"REACT QUERY",
			"ZUSTAND",
			"IMMER",
			"HTML2CANVAS",
			"SVG & IMAGE MANIPULATION",
		],
		description:
			"Wizard Passport is a fully TypeScript powered Web App created around Harry Potter, Wizard Universe. It allows users to share their love for Harry Potter in a fun way with friends. This project uses new technologies introduced around react world such as React Hook Form, React Query, React Location, Zustand, Etc... along with AWS Services. Also in this project we do a lot of SVG/Canvas Manipulations and Image Conversions.",
		liveLink: "https://wizardpassport.vercel.app/",
		codeLink: "https://github.com/SandunWebDev/wizardPassport-frontend",
	},
	{
		image: devGagThumb,
		heading: "Dev Gag",
		labels: [
			"FULLSTACK",
			"PYTHON",
			"FLASK",
			"JINGA2",
			"REACT",
			"CHAKRAUI",
			"POSTGRESQL",
			"SQLALCHECMY",
			"DB MIGRATIONS",
			"MARSHMALLOW",
			"GUNICORN",
			"NGINX",
			"MYPY",
			"PYTEST",
			"POETRY",
			"ISORT, BLACK, FLAKE8",
			"DOCKER",
		],
		description:
			'DevGag is a full-stack WebApp where users can explore and add "Dev Jokes". (Textual & Meme Types) It is mainly powered by Python, Flask, React & PostgreSQL. Users can explore this app without login/signup. But for leaving Like/Dislikes, posting a joke user need be login/signup. It has dark mode, infinite scrolling and ability to install as a PWA app too.',
		liveLink: "https://devgag.herokuapp.com/",
		codeLink: "https://github.com/SandunWebDev/devgag",
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
		liveLink: "http://servermonitor.project.sandunwebdev.com/",
		codeLink: "https://github.com/SandunWebDev/hackerbay-frontend",
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
		description: `Full-stack project created by a collaboration of four developers. It contains a mockup web app of 'RetailMeNot.com' with only basic features and placeholder data. Users can signup/login, view coupons, add comments, etc... It's mainly built using MERN stack and MVC architecture.`,
		liveLink:
			"https://genericlambdaserver.project.sandunwebdev.com/generic/chinguCouponsProjectReroute",
		codeLink: "https://github.com/SandunWebDev/chinguCoupons/",
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
		liveLink: "https://mapofmars.surge.sh/gallery",
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
			<div className="Projects globalLayoutWrapper" id="Projects">
				<div>
					<h1 className="section__header Projects__header">PROJECTS</h1>

					{/* Tooltip Notes */}
					<div className="Projects__notes">
						<Popup
							trigger={(open) => (
								<div className="Projects__notes__icon">
									<FontAwesomeIcon
										icon={faExclamationCircle}
										className="faIcon"
									/>
								</div>
							)}
							position="left center"
							on={["hover", "focus"]}
							closeOnDocumentClick
							contentStyle={{
								border: "none",
								minWidth: "400px",
							}}
						>
							<div className="Projects__notes__popupContent">
								<div>NOTE : </div>
								Some projects that are deployed on Free Services have "Cold Boot
								Delay". So note that the first time those live links are opened
								they might take some time to fully start.{" "}
							</div>
						</Popup>
					</div>

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
			</div>
		);
	}
}

export default Projects;

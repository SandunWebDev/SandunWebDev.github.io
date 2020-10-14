/**
 * Skills Component - Render Skill Set
 */

import React, { Component } from "react";

import SkillCard from "./SkillCard/SkillCard";

import { addPageAnimations } from "../../helpers/animations";
import skillLogos from "./skillLogos";
import "./Skills.css";

class Skills extends Component {
	// Getting reference to parentDom to apply animations.
	SkillWrapperDomRef = React.createRef();

	render() {
		// Adding animations if cuurent page is active
		this.props.visibleElement === "Skills"
			? addPageAnimations(this.SkillWrapperDomRef, "Skills", "pulse")
			: "";

		return (
			<div className="Skills" id="Skills">
				<h1 className="section__header Projects__header">SKILLS</h1>
				<div
					className="Skills__category__wrapper"
					ref={this.SkillWrapperDomRef}
				>
					<div className={"Skills__category"}>
						<div className="category__header">FRONT-END</div>
						<div className="category__content">
							<SkillCard logo={skillLogos.html} title="HTML5" />
							<SkillCard logo={skillLogos.css} title="CSS3" />
							<SkillCard logo={skillLogos.sass} title="SAAS" />
							<SkillCard logo={skillLogos.bootstrap} title="BOOTSTRAP" />

							<SkillCard logo={skillLogos.js} title="JAVASCRIPT" />
							<SkillCard logo={skillLogos.jquery} title="JQUERY" />
							<SkillCard
								logo={skillLogos.react}
								s
								title="REACT / R.NATIVE / REDUX"
							/>
							<SkillCard logo={skillLogos.angular} title="ANGULAR" />
							<SkillCard logo={skillLogos.d3} title="D3 / CHARTS" />
							<SkillCard
								logo={skillLogos.responsive}
								title="RESPONSIVE DESIGN"
							/>
						</div>
					</div>
					<div className="Skills__category">
						<div className="category__header">BACK-END</div>
						<div className="category__content">
							<SkillCard logo={skillLogos.nodejs} title="NODE JS" />
							<SkillCard logo={skillLogos.express} title="EXPRESS" />
							<SkillCard logo={skillLogos.mongodb} title="MONGODB" />
							<SkillCard logo={skillLogos.mongoose} title="MONGOOSE" />
							<SkillCard
								logo={skillLogos.mysql}
								title="MYSQL / POSTGRES / SQLITE"
							/>
							<SkillCard logo={skillLogos.sequelize} title="SEQUELIZE" />
							<SkillCard logo={skillLogos.auth} title="AUTHENTICATION" />
							<SkillCard logo={skillLogos.passport} title="REST API" />
							<SkillCard logo={skillLogos.firebase} title="FIREBASE" />
							<SkillCard logo={skillLogos.php} title="PHP" />
							<SkillCard logo={skillLogos.python} title="PYTHON" />
						</div>
					</div>
					<div className="Skills__category">
						<div className="category__header">DEVOPS / TOOLS</div>
						<div className="category__content">
							<SkillCard logo={skillLogos.cicd} title="CI/CD" />
							<SkillCard logo={skillLogos.docker} title="DOCKER / D. COMPOSE" />
							<SkillCard logo={skillLogos.kubernetes} title="KUBERNETES" />
							<SkillCard
								logo={skillLogos.gcloud}
								title="GCLOUD / AWS / HEROKU "
							/>
							<SkillCard
								logo={skillLogos.jest}
								title="JEST / MOCHA / CYPRESS / SINON"
							/>
							<SkillCard logo={skillLogos.storybook} title="STORYBOOK" />
							<SkillCard logo={skillLogos.git} title="GIT & GITHUB" />
							<SkillCard logo={skillLogos.npm} title="NPM & YARN" />
							<SkillCard
								logo={skillLogos.webpack}
								title="WEBPACK / GRUNT / BABEL"
							/>
							<SkillCard logo={skillLogos.typescript} title="TYPESCRIPT" />
							<SkillCard logo={skillLogos.terminal} title="COMMAND LINE" />
						</div>
					</div>
					<div className="Skills__category">
						<div className="category__header">DESIGN</div>
						<div className="category__content">
							<SkillCard logo={skillLogos.photoshop} title="PHOTOSHOP" />
							<SkillCard logo={skillLogos.illustrator} title="ILLUSTRATOR" />
							<SkillCard logo={skillLogos.coreldraw} title="CORELDRAW" />
							<SkillCard logo={skillLogos.typography} title="TYPOGRAPHY" />
							<SkillCard logo={skillLogos.composition} title="COMPOSITION" />
							<SkillCard logo={skillLogos.colors} title="COLORS" />
						</div>
					</div>
					<div className="Skills__category">
						<div className="category__header">OTHER</div>
						<div className="category__content">
							<SkillCard logo={skillLogos.iot} title="IOT / ARDUINO / ESP" />
							<SkillCard logo={skillLogos.c} title="C LANG." />
							<SkillCard logo={skillLogos.agile} title="AGILE / SCRUM" />
							<SkillCard logo={skillLogos.linux} title="LINUX" />
							<SkillCard logo={skillLogos.electron} title="ELECTRON" />
							<SkillCard logo={skillLogos.postman} title="POSTMAN" />
							<SkillCard logo={skillLogos.slack} title="SLACK / TRELLO / ..." />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Skills;

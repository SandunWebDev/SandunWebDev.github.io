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
			<div className="Skills globalLayoutWrapper" id="Skills">
				<div>
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
								<SkillCard logo={skillLogos.js} title="JAVASCRIPT" />
								<SkillCard logo={skillLogos.typescript} title="TYPESCRIPT" />
								<SkillCard logo={skillLogos.react} s title="REACT + REDUX" />
								<SkillCard logo={skillLogos.react} title="REACT NATIVE" />
								<SkillCard logo={skillLogos.gatsby} title="GATSBY" />
								<SkillCard
									logo={skillLogos.storybook}
									title="STORYBOOK TESTING"
								/>
								<SkillCard logo={skillLogos.bootstrap} title="UI FRAMEWORKS" />
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
								<SkillCard logo={skillLogos.python} title="PYTHON" />
								<SkillCard logo={skillLogos.express} title="EXPRESS" />
								<SkillCard logo={skillLogos.flask} title="FLASK" />
								<SkillCard logo={skillLogos.mongodb} title="MONGODB" />
								<SkillCard
									logo={skillLogos.mysql}
									title="POSTGRESQL / MYSQL / SQLITE"
								/>
								<SkillCard
									logo={skillLogos.sequelize}
									title="ORM (MONGOOSE / SEQUELIZE)"
								/>
								<SkillCard logo={skillLogos.graphql} title="GRAPHQL" />
								<SkillCard logo={skillLogos.firebase} title="FIREBASE" />
								<SkillCard logo={skillLogos.auth} title="AUTHENTICATION" />
								<SkillCard
									logo={skillLogos.passport}
									title="REST API DEVELOPMENT"
								/>
							</div>
						</div>
						<div className="Skills__category">
							<div className="category__header">DEVOPS / TOOLS</div>
							<div className="category__content">
								<SkillCard logo={skillLogos.aws} title="AWS / GCP" />
								<SkillCard
									logo={skillLogos.docker}
									title="DOCKER / D. COMPOSE"
								/>
								<SkillCard logo={skillLogos.kubernetes} title="KUBERNETES" />
								<SkillCard logo={skillLogos.cicd} title="CI/CD" />
								<SkillCard logo={skillLogos.serverless} title="SERVERLESS" />
								<SkillCard
									logo={skillLogos.testing}
									title="TESTING (UNIT / INTEG. / E2E)"
								/>
								<SkillCard
									logo={skillLogos.jest}
									title="JEST / MOCHA / CYPRESS / SINON"
								/>
								<SkillCard logo={skillLogos.linux} title="LINUX" />
								<SkillCard logo={skillLogos.terminal} title="TERMINAL" />
								<SkillCard logo={skillLogos.git} title="GIT & GITHUB" />

								<SkillCard
									logo={skillLogos.webpack}
									title="WEBPACK / GRUNT / BABEL"
								/>
							</div>
						</div>
						<div className="Skills__category">
							<div className="category__header">DESIGN</div>
							<div className="category__content">
								<SkillCard logo={skillLogos.figma} title="FIGMA" />
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
								<SkillCard
									logo={skillLogos.opensource}
									title="OPEN SOURCE CONTRIBUTIONS"
								/>
								<SkillCard logo={skillLogos.agile} title="AGILE / SCRUM" />
								<SkillCard
									logo={skillLogos.slack}
									title="JIRA / TRELLO / SLACK / ..."
								/>
								<SkillCard logo={skillLogos.postman} title="POSTMAN" />
								<SkillCard logo={skillLogos.c} title="C LANG." />
								<SkillCard logo={skillLogos.electron} title="ELECTRON" />
								<SkillCard logo={skillLogos.iot} title="IOT / ARDUINO / ESP" />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Skills;

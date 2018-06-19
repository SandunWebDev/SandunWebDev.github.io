/**
 * Skills Component - Render Skill Set
 */

import React, { Component } from "react";

import SkillCard from "./SkillCard/SkillCard";

import skillLogos from "./skillLogos";
import "./Skills.css";

class Skills extends Component {
  render() {
    return (
      <div className="Skills" id="Skills">
        <h1 className="section__header Projects__header">SKILLS</h1>
        <div className="Skills__category__wrapper" >
          <div className="Skills__category">
            <div className="category__header">FRONT-END</div>
            <div className="category__content">
              <SkillCard logo={skillLogos.html} title="HTML5" />
              <SkillCard logo={skillLogos.css} title="CSS3" />
              <SkillCard logo={skillLogos.sass} title="SAAS" />
              <SkillCard logo={skillLogos.bootstrap} title="BOOTSTRAP" />
              <SkillCard logo={skillLogos.d3} title="D3" />
              <SkillCard logo={skillLogos.responsive} title="RESPONSIVE DESIGN" />
              <SkillCard logo={skillLogos.js} title="JS ES6" />
              <SkillCard logo={skillLogos.jquery} title="JQUERY" />
              <SkillCard logo={skillLogos.react} title="REACT / NATIVE / REDUX" />
              <SkillCard logo={skillLogos.angular} title="ANGULAR" />
              
            </div>
          </div>
          <div className="Skills__category">
            <div className="category__header">BACK-END</div>
            <div className="category__content">
              <SkillCard logo={skillLogos.nodejs} title="NODE JS" />
              <SkillCard logo={skillLogos.express} title="EXPRESS" />
              <SkillCard logo={skillLogos.mongodb} title="MONGODB" />
              <SkillCard logo={skillLogos.mongoose} title="MONGOOSE" />
              <SkillCard logo={skillLogos.firebase} title="FIREBASE" />
              <SkillCard logo={skillLogos.mysql} title="MYSQL / SQLITE" />
              <SkillCard logo={skillLogos.auth} title="AUTHROIAZTION" />
              <SkillCard logo={skillLogos.passport} title="REST API" />
              <SkillCard logo={skillLogos.php} title="PHP" />
              <SkillCard logo={skillLogos.python} title="PYTHON" />
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
            <div className="category__header">TOOLS</div>
            <div className="category__content">
              <SkillCard logo={skillLogos.git} title="GIT & GITHUB" />
              <SkillCard logo={skillLogos.npm} title="NPM & YARN" />
              <SkillCard logo={skillLogos.webpack} title="WEBPACK" />
              <SkillCard logo={skillLogos.grunt} title="GRUNT" />
              <SkillCard logo={skillLogos.babel} title="BABEL" />
              <SkillCard logo={skillLogos.mocha} title="MOCHA / CHAI / JEST" />
              <SkillCard logo={skillLogos.typescript} title="TYPESCRIPT" />
              <SkillCard logo={skillLogos.terminal} title="COMMAND LINE" />
            </div>
          </div>
          <div className="Skills__category">
            <div className="category__header">OTHER</div>
            <div className="category__content">
              <SkillCard logo={skillLogos.iot} title="IOT / ARDUINO / RASBERRY PI / ESP" />
              <SkillCard logo={skillLogos.c} title="C LANG." />
              <SkillCard logo={skillLogos.agile} title="AGILE / SCRUM" />
              <SkillCard logo={skillLogos.linux} title="LINUX" />
              <SkillCard logo={skillLogos.heroku} title="HEROKU / AMAZON" />
              <SkillCard logo={skillLogos.electron} title="ELECTRON" />
            </div>
          </div>
        </div>
      </div>
    );  
  }
}

export default Skills;

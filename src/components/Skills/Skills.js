/**
 * Skills Component - Render Skill Set
 */

import React, { Component } from "react";

import SkillCard from "./SkillCard/SkillCard";

import skillLogos from "./skillLogos";
import "./Skills.css";

class Skills extends Component {
  render() {
    console.log(skillLogos);
    return (
      <div className="Skills" id="Skills">
        <h1 className="Skills_heading">SKILLS</h1>
        <div className="Skills__category__wrapper">
          <div className="Skills__category">
            <div className="category__header">FRONT-END</div>
            <div className="category__content">
              <SkillCard logo={skillLogos.html} title="HTML5" />
              <SkillCard logo={skillLogos.css} title="CSS3" />
              <SkillCard logo={skillLogos.sass} title="SAAS" />
              <SkillCard logo={skillLogos.bootstrap} title="BOOTSTRAP" />
              <SkillCard logo={skillLogos.js} title="JS ES6" />
              <SkillCard logo={skillLogos.jquery} title="JQUERY" />
              <SkillCard logo={skillLogos.react} title="REACT - REACT NATIVE - REDUX" />
              <SkillCard logo={skillLogos.angular} title="ANGULAR" />
              <SkillCard logo={skillLogos.d3} title="D3" />
            </div>
          </div>
          <div className="Skills__category">
            <div className="category__header">BACK-END</div>
            <div className="category__content">
              <SkillCard logo={skillLogos.nodejs} title="NODE JS" />
              <SkillCard logo={skillLogos.express} title="EXPRESS" />
              <SkillCard logo={skillLogos.php} title="PHP" />
              <SkillCard logo={skillLogos.python} title="PYTHON" />
              <SkillCard logo={skillLogos.mongodb} title="MONGODB" />
              <SkillCard logo={skillLogos.mysql} title="MYSQL" />
            </div>
          </div>
          <div className="Skills__category">
            <div className="category__header">DESIGN</div>
            <div className="category__content">
              <SkillCard logo={skillLogos.photoshop} title="PHOTOSHOP" />
              <SkillCard logo={skillLogos.illustrator} title="ILLUSTRATOR" />
              <SkillCard logo={skillLogos.coreldraw} title="CORELDRAW" />
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
              <SkillCard logo={skillLogos.mocha} title="MOCHA - CHAI - JEST" />
              <SkillCard logo={skillLogos.typescript} title="TYPESCRIPT" />
            </div>
          </div>
          <div className="Skills__category">
            <div className="category__header">OTHER</div>
            <div className="category__content">
              <SkillCard logo={skillLogos.iot} title="IOT (ARDUINO | RASBERRY PI |....)" />
              <SkillCard logo={skillLogos.c} title="C" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;

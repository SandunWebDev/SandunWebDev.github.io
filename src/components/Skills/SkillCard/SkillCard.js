/**
 * This compoenent render individual skill card. For Ex: Chrome Logo - Chrome)
 */

import React, { Component } from "react";
import "./SkillCard.css";

class SkillCard extends Component {
  render() {
    const { logo, title } = this.props;

    return (
      <div className="SkillCard">
        {logo}
        <span>{title}</span>
      </div>
    );
  }
}

export default SkillCard;

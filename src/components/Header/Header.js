/**
 * Header Component - Render the header of App.
 */

import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Header__mainmenu">
          <ul>
            <li>HOME</li>
            <li>SKILLS</li>
            <li>PROJECTS</li>
            <li>CONTACT</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;

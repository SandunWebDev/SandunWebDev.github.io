/**
 * Header Component - Render the header of App.
 */

import React, { Component } from "react";
import { slide as MobileMenu } from "react-burger-menu";

// Font Awesome Resources
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faHome from "@fortawesome/fontawesome-free-solid/faHome";
import faGraduationCap from "@fortawesome/fontawesome-free-solid/faGraduationCap";
import faProjectDiagram from "@fortawesome/fontawesome-free-solid/faProjectDiagram";
import faAt from "@fortawesome/fontawesome-free-solid/faAt";

import "./Header.css";
import "./mobileMenu.css"; // Style for "Header__mobilemenu"

class Header extends Component {
  state = {
    mobileMenuOpen: false // Define wether mobilemenu open or close
  };

  // Close the mobile menu when click on a item.
  handleMobileLinkClick() {
    this.setState({
      mobileMenuOpen: false
    });
  }

  // Handle smooth scroll into given id's element
  handleSmoothScrolling(id) {
    const element = document.getElementById(id);

    // Only scrolling if that ids available.
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    }
  }

  render() {
    const { mobileMenuOpen } = this.state;

    // Basic list item that get rendered in both "Header__mobilemenu" & "Header__mainmenu"
    const basicMenu = (
      <ul className="basicMenu" onClick={this.handleMobileLinkClick.bind(this)}>
        <li onClick={() => this.handleSmoothScrolling("Intro")}>
          <a>
            <FontAwesomeIcon icon={faHome} className="faIcon" />
            HOME
          </a>
        </li>
        <li onClick={() => this.handleSmoothScrolling("Skills")}>
          <a>
            <FontAwesomeIcon icon={faGraduationCap} className="faIcon" />
            SKILLS
          </a>
        </li>
        <li onClick={() => this.handleSmoothScrolling("Projects")}>
          <a>
            <FontAwesomeIcon icon={faProjectDiagram} className="faIcon" />
            PROJECTS
          </a>
        </li>
        <li onClick={() => this.handleSmoothScrolling("Contact")}>
          <a>
            <FontAwesomeIcon icon={faAt} className="faIcon" />
            CONTACT
          </a>
        </li>
      </ul>
    );

    return (
      <div className="Header">
        <div className="Header__mobilemenu">
          <MobileMenu animations="stack" isOpen={mobileMenuOpen}>
            {basicMenu}
          </MobileMenu>
        </div>

        <div className="Header__mainmenu">{basicMenu}</div>
      </div>
    );
  }
}

export default Header;

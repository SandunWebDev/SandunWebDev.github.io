/**
 * Header Component - Render the header of App.
 */

import React, { Component } from "react";
import { slide as MobileMenu } from "react-burger-menu";
import HammerJS from "hammerjs";

// Font Awesome Resources
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faHome from "@fortawesome/fontawesome-free-solid/faHome";
import faGraduationCap from "@fortawesome/fontawesome-free-solid/faGraduationCap";
import faProjectDiagram from "@fortawesome/fontawesome-free-solid/faProjectDiagram";
import faAt from "@fortawesome/fontawesome-free-solid/faAt";

import "./Header.css";
import "./mobileMenu.css"; // Style for "Header__mobilemenu"

const pageIdList = ["Intro", "Skills", "Projects", "Contact"];

class Header extends Component {
  state = {
    mobileMenuOpen: false, // Define wether mobilemenu open or close
    visibleElement : "Intro" // Keep Track witch element is currently on view
  };

  // Close the mobile menu when click on a item.
  handleMobileLinkClick() {
    this.setState({
      mobileMenuOpen: false
    });
  }

  // Handle smooth scroll into given id's element
  handleSmoothScrolling(id, disable) {
    const element = document.getElementById(id);

    // Only scrolling if that ids available.
    if (element) {
      element.scrollIntoView({
        behavior: disable ? "instant" : "smooth", // If disabled property is passed then smooth scrolling is not hapening.
        block: "start",
        inline: "nearest"
      });
    }
  }

  // Pass array of elements to this funcction and it set witch of them currently on viewport.
  isScrolledIntoView(elements) {

    let visibleElement = "Intro"; // Teperorly keep track of currently visible element.

    elements.forEach((el)=>{ 
      // Get top and bottom values for element
      const rect = document.getElementById(el).getBoundingClientRect();

      // Check if elemnet is shown more than half shown in viewport. (.5 for 50% percent) 
      const isVisible = rect.top < (window.innerHeight * .5);

      // If current element on the view set it as VisibleElement.
      if (isVisible){
        visibleElement = el;
      }
    });

    // Setting currently visible element in this components state.
    this.setState({visibleElement: visibleElement});
  }

  // If given element is currently on viewport return "basicMenu-active" className so That menu item stand out.
  setActiveElement(el){
    if (this.state.visibleElement === el){
      return "basicMenu-active";
    }
  }

  // Event Listners function for arrow keys for easy keyboard navagation.
  handleArrowKeyNavaigation(e){
    let currentPageId = pageIdList.indexOf(this.state.visibleElement); // Getting index of current visibe page's Index.

    // According to which "key" is pressed or "swiped" in mobile, increasing or decreasing page Index.
    switch (e.key || e.type){
      case "ArrowLeft" :
      case "swiperight" :{
        if (currentPageId !== 0) currentPageId--;
        break;
      }
      
      case "ArrowRight" :
      case "swipeleft" : {
        if (currentPageId < pageIdList.length)  currentPageId++;
        break;
      }
    }

    // Scrolling into intended page. If "arrow key" scrolling its smooth scrolling and if its "swipe" scrolling then instant scrolling.
    if (e.type === "swiperight" || e.type === "swipeleft" ){
      this.handleSmoothScrolling(pageIdList[currentPageId], true);
    } else {
      this.handleSmoothScrolling(pageIdList[currentPageId]);
    }
    
  }

  componentDidMount(){
    // Add event listner to scroll to know witch element is currently on view.
    document.addEventListener("scroll", ()=>this.isScrolledIntoView(pageIdList));

    // Event Listners for arrow keys for easy keyboard navagation.
    document.addEventListener("keyup", this.handleArrowKeyNavaigation.bind(this));

    var hammertime = new HammerJS(document.body);
hammertime.on("swiperight",this.handleArrowKeyNavaigation.bind(this));
hammertime.on("swipeleft",this.handleArrowKeyNavaigation.bind(this));
  }

  render() {
    const { mobileMenuOpen } = this.state;

    // Basic list item that get rendered in both "Header__mobilemenu" & "Header__mainmenu"
    const basicMenu = (
      <ul className="basicMenu" onClick={this.handleMobileLinkClick.bind(this)}>
        <li onClick={() => this.handleSmoothScrolling("Intro")}>
          <a className={this.setActiveElement("Intro")}>
            <FontAwesomeIcon icon={faHome} className="faIcon" />
            HOME
          </a>
        </li>
        <li onClick={() => this.handleSmoothScrolling("Skills")}>
          <a className={this.setActiveElement("Skills")}>
            <FontAwesomeIcon icon={faGraduationCap} className="faIcon" />
            SKILLS
          </a>
        </li>
        <li onClick={() => this.handleSmoothScrolling("Projects")}>
          <a className={this.setActiveElement("Projects")}>
            <FontAwesomeIcon icon={faProjectDiagram} className="faIcon" />
            PROJECTS
          </a>
        </li>
        <li onClick={() => this.handleSmoothScrolling("Contact")}>
          <a className={this.setActiveElement("Contact")}>
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

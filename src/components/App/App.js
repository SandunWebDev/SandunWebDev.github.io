/**
 * Main component of the app. All other components get rendered here.
 */

import React, { Component } from "react";

import Header from "../Header/Header"; // Header Component
import Intro from "../Intro/Intro"; // Intro Page
import Skills from "../Skills/Skills"; // Skills Page
import Projects from "../Projects/Projects"; // Projects Page
import Contact from "../Contact/Contact"; // Contact Page

import "normalize.css"; // Using Famous Noramlize.CSS to Reset CSS
import "./App.css";

class App extends Component {
  state = {
    visibleElement : "Intro" // Keep Track witch element is currently on view. (Get current page from Header Component)
  };

  // This function get passed into Header Compennet and from their we get current active page ID.
  getVisibleElement(pageId){
    this.setState({
      visibleElement : pageId
    })
  }

  render() {
    return (
      <div className="App">
        <Header getVisibleElement={this.getVisibleElement.bind(this)}/>
        <Intro />
        <Skills />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;

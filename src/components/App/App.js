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
    visibleElement: "Intro" // Keep Track witch element is currently on view. (Get current page from Header Component)
  };

  // This function get passed into Header Compennet and from their we get current active page ID.
  getVisibleElement(pageId) {
    this.setState({
      visibleElement: pageId
    });
  }

  // Very importatnt to perforamnce. Canceling component update if theres no changein state.
  shouldComponentUpdate(nextProps, nextState) {
    return this.state.visibleElement !== nextState.visibleElement;
  }

  render() {
    return (
      <div className="App">
        <Header getVisibleElement={this.getVisibleElement.bind(this)} />
        <Intro />
        <Skills visibleElement={this.state.visibleElement} />
        <Projects visibleElement={this.state.visibleElement} />
        <Contact visibleElement={this.state.visibleElement} />
      </div>
    );
  }
}

export default App;

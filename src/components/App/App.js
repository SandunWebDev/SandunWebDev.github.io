/**
 * Main component of the app. All other components get rendered here.
 */

import React, { Component } from "react";

import Header from "../Header/Header"; // Header Component
import Intro from "../Intro/Intro"; // Intro Page
import Skills from "../Skills/Skills"; // Skills Page
import Projects from "../Projects/Projects"; // Projects Page

import "normalize.css"; // Using Famous Noramlize.CSS to Reset CSS
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <h1>Welcome To Sandun's Portfolio</h1> */}
        <Header />
        <Intro />
        <Skills />
        <Projects />
      </div>
    );
  }
}

export default App;

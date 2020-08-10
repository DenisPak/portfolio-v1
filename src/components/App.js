import React from "react";

import "./App.css";
import Navbar from "./Navbar/Navbar";
import SideLinks from "./SideLinks/SideLinks";
import Content from "./Content/Content";
import Introduction from "./Introduction/Introduction";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
function App() {
  return (
    <div className="App">
      <Navbar />
      <SideLinks orientation="left" />
      <SideLinks orientation="right" />
      <Content>
        <Introduction />
        <Projects />
        <Skills />
        <Contact />
      </Content>
    </div>
  );
}

export default App;

import React from "react";

import "../App.css";
import "./Introduction.css";

const Introduction = () => {
  return (
    <div id="introduction">
      <code className="primary-color">Hi, my name is</code>
      <h1>Denis Pak.</h1>
      <h1 className="text-color">I build things for the web.</h1>
      <p className="cta">
        I'm a front-end developer specializing in building exceptional websites,
        applications, and everything in between.
      </p>
      <div>
        <a href="#projects" className="btn-lg btn">
          Jump to Projects!
        </a>
        <code id="invite-link">
          <span>or</span>
          <a href="#">invite me for an interview</a>
        </code>
      </div>
    </div>
  );
};

export default Introduction;

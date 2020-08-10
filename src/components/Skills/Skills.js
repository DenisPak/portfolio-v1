import React from "react";

import "./Skills.css";

const Skills = () => {
  return (
    <div id="skills">
      <div className="sectionHeader">
        <hr />
        <h2>Skills that I have</h2>
        <hr />
      </div>

      <div id="skillsGrid">
        <div>
          <ul>
            <li>Languages</li>
            <li>JavaScript (ES6+)</li>
            <li>Python</li>
            <li>Java</li>
            <li>SQL</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Front-End</li>
            <li>HTML</li>
            <li>CSS/SCSS</li>
            <li>React/Redux</li>
            <li>Jquery</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Tools</li>
            <li>Git & Github</li>
            <li>RESTful API</li>
            <li>Chrome DevTools</li>
            <li>AJAX</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;

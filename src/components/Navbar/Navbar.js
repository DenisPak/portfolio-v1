import React, { useState } from "react";

import "../App.css";
import "./burgers.css";
import "./Navbar.css";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header id="nav">
      <div id="logo"> Logo</div>
      <div
        className={`hamburger hamburger--spin ${open ? "is-active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </div>
      <ul className={open ? "nav-menu active" : "nav-menu"}>
        <li className="nav-link">
          <code>
            <a href="#">Home</a>
          </code>
        </li>
        <li className="nav-link">
          <code>
            <a href="#projects">Projects</a>
          </code>
        </li>
        <li className="nav-link">
          <code>
            <a href="#skills">Skills</a>
          </code>
        </li>

        <li className="nav-link">
          <code>
            <a href="#">Contact</a>
          </code>
        </li>
        <li className="nav-link">
          <a href="#" className="btn">
            Resume
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;

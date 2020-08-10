import React from "react";

import "../App.css";
import "./SideLinks.css";

const SideLinks = ({ orientation }) => {
  return (
    <div className={`side-links ${orientation}`}>
      <div className="vline"></div>
      {orientation === "left" ? (
        <>
          <a href="#">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#">
            <i className="fab fa-github"></i>
          </a>
        </>
      ) : (
        <code>
          <a href="mailto:rikaho@mail.ru">rikaho@mail.ru</a>
        </code>
      )}
    </div>
  );
};

export default SideLinks;

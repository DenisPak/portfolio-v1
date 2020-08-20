import React from "react";

import "../App.css";
import "./SideLinks.css";

const SideLinks = ({ orientation }) => {
  return (
    <div className={`side-links ${orientation}`}>
      <div className="vline"></div>
      {orientation === "left" ? (
        <>
          <a
            href="https://www.linkedin.com/in/denis-pak-119ab6159/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://github.com/DenisPak"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </>
      ) : (
        <code>
          <a
            href="mailto:rikaho@mail.ru"
            target="_blank"
            rel="noopener noreferrer"
          >
            rikaho@mail.ru
          </a>
        </code>
      )}
    </div>
  );
};

export default SideLinks;

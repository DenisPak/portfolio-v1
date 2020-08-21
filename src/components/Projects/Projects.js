import React from "react";

import "./Projects.css";
import notes from "../../images/notes.png";
import gallery from "../../images/gallery.png";
import poster from "../../images/poster.jpg";

const Projects = () => {
  return (
    <div id="projects">
      <div className="sectionHeader">
        <hr />
        <h2>Some of the projects I've built</h2>
        <hr />
      </div>
      <div className="project">
        <div className="desc">
          <h3>Poster </h3>
          <p>
            A CRUD application I've built in order to get a more in-depth look
            of how Redux interacts with Firebase.
          </p>
          <code>
            <ul>
              <li>React/Redux</li>
              <li>Firebase</li>
              <li>Material UI</li>
            </ul>
          </code>
          <div>
            <a
              href="https://github.com/DenisPak/poster"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://poster-b9efa.web.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>

        <div className="image" style={{ backgroundImage: `url(${poster})` }}>
          <a
            href="https://poster-b9efa.web.app/"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </div>
      </div>
      <div className="project">
        <div className="desc descLeft">
          <h3>Notes</h3>
          <p>
            A simple web app where you can keep all your notes. Used Firebase to
            store all the notes, custom React Hooks to interact with it, and
            Material UI for styling
          </p>
          <code>
            <ul>
              <li>React</li>
              <li>Firebase</li>
              <li>Material UI</li>
            </ul>
          </code>
          <div>
            <a
              href="https://github.com/DenisPak/notes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://denispak.github.io/notes/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>

        <div
          className="image imageRight"
          style={{ backgroundImage: `url(${notes})` }}
        >
          <a
            href="https://denispak.github.io/notes/"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </div>
      </div>
      <div className="project">
        <div className="desc">
          <h3>Image Search</h3>
          <p>
            An Image Search application that lazyly loads them from Unsplash API
            based on the user query. Each image is given a custom height for a
            nicer grid look.
          </p>
          <code>
            <ul>
              <li>React</li>
              <li>Unsplash API</li>
            </ul>
          </code>
          <div>
            <a
              href="https://github.com/DenisPak/image-search"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a href="https://denispak.github.io/image-search/">
              <i
                className="fas fa-external-link-alt"
                target="_blank"
                rel="noopener noreferrer"
              ></i>
            </a>
          </div>
        </div>

        <div className="image" style={{ backgroundImage: `url(${gallery})` }}>
          <a
            href="https://denispak.github.io/image-search/"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </div>
      </div>
    </div>
  );
};

export default Projects;

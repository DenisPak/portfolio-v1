import React from "react";

import "./Projects.css";
import notes from "../../images/notes.png";
import gallery from "../../images/gallery.png";
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
          <h3>Poster [WIP]</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quam
            quae rem nemo non odio perferendis adipisci aspernatur impedit,
            velit harum soluta sint, aut quidem illum tempore placeat, molestias
            asperiores?
          </p>
          <code>
            <ul>
              <li>React/Redux</li>
              <li>Firebase</li>
              <li>Material UI</li>
            </ul>
          </code>
          <div>
            <a href="#">
              <i className="fab fa-github"></i>
            </a>
            <a href="#">
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>

        <div className="image">
          <a href="#">
            <img src="" alt="" />
          </a>
        </div>
      </div>
      <div className="project">
        <div className="desc descLeft">
          <h3>Notes</h3>
          <p>
            A simple we app where you can keep all your notes. Used Firebase to
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
            <a href="#">
              <i className="fab fa-github"></i>
            </a>
            <a href="#">
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>

        <div
          className="image imageRight"
          style={{ backgroundImage: `url(${notes})` }}
        >
          <a href="#"></a>
        </div>
      </div>
      <div className="project">
        <div className="desc">
          <h3>Image Gallery</h3>
          <p>
            An Image Gallery that lazyly loads them from Unsplash API based on
            the user query. Each image is given a custom height for a nicer grid
            look.
          </p>
          <code>
            <ul>
              <li>React</li>
              <li>Unsplash API</li>
            </ul>
          </code>
          <div>
            <a href="#">
              <i className="fab fa-github"></i>
            </a>
            <a href="#">
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>

        <div className="image" style={{ backgroundImage: `url(${gallery})` }}>
          <a href="#"></a>
        </div>
      </div>
    </div>
  );
};

export default Projects;

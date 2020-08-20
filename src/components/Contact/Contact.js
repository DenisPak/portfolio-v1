import React from "react";

import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact">
      <code className="primary-color">What's next?</code>
      <h1>Get In Touch</h1>
      <br />
      <p>
        I'm looking for a new opportunity and am eager to connect with other
        devs. My inbox is always open. Whether you want to hire me or just want
        to say hi, I'll try my best to get back to you!
      </p>
      <br />
      <a href="mailto:rikaho@mail.ru" className="btn btn-lg">
        Say Hello
      </a>
    </div>
  );
};

export default Contact;

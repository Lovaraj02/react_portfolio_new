import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-info">
          <h3>Let's Connect!</h3>
          <p>
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology.
          </p>

          <div className="contact-links">
            <a
              href="mailto:rajubandaru2255@gmail.com"
              className="contact-link"
            >
              rajubandaru2255@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/lovaraj02/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              LinkedIn Profile
            </a>
            <a
              href="https://github.com/Lovaraj02"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              GitHub Profile
            </a>
            <a
              href="https://lovaraj02.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              Portfolio Website
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

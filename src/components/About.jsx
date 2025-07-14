
import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              A passionate software developer and B.Tech graduate in AI & Data Science, I specialize in web development and AI/ML, turning ideas into impactful digital solutions through code.
            </p>
            <div className="about-stats">
              <div className="stat">
                <h3>60 WPM</h3>
                <p>Typing Speed</p>
              </div>
              <div className="stat">
                <h3>Problem Solving</h3>
                <p>Core Strength</p>
              </div>
              <div className="stat">
                <h3>Team Player</h3>
                <p>Communication</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React, { useState, useEffect } from 'react';

const About = () => {
  const [typingSpeed, setTypingSpeed] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 60; // final WPM
    const duration = 1500; // 1.5 seconds animation
    const incrementTime = 20; // update every 20ms
    const totalSteps = duration / incrementTime;
    const increment = end / totalSteps;

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setTypingSpeed(Math.floor(start));
    }, incrementTime);

    return () => clearInterval(counter);
  }, []);

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
                <h3>{typingSpeed} WPM</h3>
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

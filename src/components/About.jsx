import React, { useState, useEffect } from "react";

const About = () => {
  const [typingSpeed, setTypingSpeed] = useState(0);

  useEffect(() => {
    const startTime = performance.now();
    const end = 60;
    const duration = 1500;

    const animate = (time) => {
      const progress = Math.min((time - startTime) / duration, 1);
      setTypingSpeed(Math.floor(progress * end));

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-text">
            <p>
  A full-stack developer with a B.Tech in AI & Data Science, I build end-to-end web applications
  using modern frontend and backend technologies. I focus on clean architecture, practical problem
  solving, and delivering reliable digital solutions that work at scale.
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

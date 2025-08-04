
import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    'Aspiring Software Developer',
    'Full stack Developer',
    'AI & ML Enthusiast'
  ];

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentText = roles[currentRole];

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentText.substring(0, displayText.length - 1)
            : currentText.substring(0, displayText.length + 1)
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole, roles]);

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-name">
              Bandaru Jaya Lova Raju
            </h1>
            <div className="hero-subtitle">
              <span className="typing-text">{displayText}</span>
              <span className="cursor">|</span>
            </div>
            <p className="hero-description">
              Passionate about building innovative, user-focused digital solutions through clean and efficient code. I thrive on solving real-world problems with technology and continuously exploring new ways to create meaningful impact through software.
            </p>
            <div className="hero-links">
              <a href="mailto:rajubandaru2255@gmail.com" className="hero-link">
                Email
              </a>
              <a href="https://www.linkedin.com/in/lovaraj02/" target="_blank" rel="noopener noreferrer" className="hero-link">
                LinkedIn
              </a>
              <a href="https://github.com/Lovaraj02" target="_blank" rel="noopener noreferrer" className="hero-link">
                GitHub
              </a>
              <a href="https://drive.google.com/file/d/1lwxuAtdrGj920RA_znjDoc0NDZ9oKh9O/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hero-link">
                Resume
              </a>
            </div>
          </div>
        </div>
        <div className="hero-scroll">
          
        </div>
      </div>
    </section>
  );
};

export default Hero;


import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: "Internite Corporation",
      role: "Frontend Web Developer Intern",
      period: "July - August 2024",
      description: "Developed responsive web applications using React, HTML, and CSS. Collaborated with the team to deliver high-quality user interfaces.",
      technologies: ["React", "HTML", "CSS", "JavaScript"]
    },
    {
      company: "Verzeo & Zebo.AI",
      role: "Machine Learning Intern",
      period: "October - November 2022",
      description: "Worked on real-time machine learning projects using Python. Implemented various ML algorithms and data processing techniques.",
      technologies: ["Python", "Machine Learning", "Data Analysis"]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="experience-header">
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
                <span className="experience-period">{exp.period}</span>
              </div>
              <p className="experience-description">{exp.description}</p>
              <div className="experience-tech">
                {exp.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

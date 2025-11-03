import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: "Internite Corporation",
      role: "Frontend Developer Intern",
      period: "July - August 2024",
      description:
        "Built a Business Intelligence Dashboard Web App for real-time KPI monitoring and performance analysis with role-based access. Implemented interactive charts and responsive UI using React and REST APIs.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "JWT", "REST API"]
    },
    {
      company: "Verzeo & Zebo.AI",
      role: "Machine Learning Intern",
      period: "October - November 2022",
      description:
        "Worked on real-time machine learning projects using Python. Implemented supervised and unsupervised learning models and performed data preprocessing and visualization.",
      technologies: ["Python", "Machine Learning", "Pandas", "NumPy", "Scikit-learn"]
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

import React from 'react';

const Education = () => {
  const education = [
    {
      institution: "Eluru College of Engineering and Technology",
      degree: "B.Tech in Artificial Intelligence & Data Science",
      period: "2021 - 2025",
      cgpa: "7.84 CGPA",
      icon: "🎓"
    },
    {
      institution: "Viveka Junior College",
      degree: "Intermediate (MPC)",
      period: "2019 - 2021",
      cgpa: "857 / 1000",
      icon: "📚"
    },
    {
      institution: "ZP High School",
      degree: "10th Standard",
      period: "2018 - 2019",
      cgpa: "9.3 / 10",
      icon: "🏫"
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-timeline">
          {education.map((edu, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-icon">{edu.icon}</div>
              <div className="timeline-content">
                <h3>{edu.institution}</h3>
                <h4>{edu.degree}</h4>
                <span className="timeline-period">{edu.period}</span>
                <p className="timeline-cgpa">{edu.cgpa}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

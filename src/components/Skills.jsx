
import React, { useState, useEffect } from 'react';

const Skills = () => {
  const [animateSkills, setAnimateSkills] = useState(false);

  const skillImages = {
    "Node.js": "/skills/node.png",
    "Express.js": "/skills/express.png",
    "MongoDB": "/skills/mongo.jpeg",
    "REST APIs": "/skills/api.png",
    "React.js": "/skills/react.jpeg",
    "JavaScript": "/skills/js.png",
    "CSS": "/skills/css.png",
    "HTML": "/skills/html.jpeg",
    "C": "/skills/c.jpeg",
    "Java": "/skills/java.jpeg",
    "Python": "/skills/python.png",
    "Git": "/skills/git.png",
    "Postman": "/skills/postman.png",
    "VS Code": "/skills/vscode.png"
  };

  const skills = [
  { name: "Node.js", level: 75, category: "Backend" },
  { name: "Express.js", level: 70, category: "Backend" },
  { name: "MongoDB", level: 75, category: "Backend" },
  { name: "REST APIs", level: 80, category: "Backend" },
  { name: "React.js", level: 80, category: "Frontend" },
  { name: "JavaScript", level: 85, category: "Frontend" },
  { name: "CSS", level: 90, category: "Frontend" },
  { name: "HTML", level: 95, category: "Frontend" },
  { name: "C", level: 85, category: "Languages" },
  { name: "Java", level: 80, category: "Languages" },
  { name: "Python", level: 90, category: "Languages" },
  { name: "Git", level: 85, category: "Tools" },
  { name: "Postman", level: 80, category: "Tools" },
  { name: "VS Code", level: 90, category: "Tools" }
];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateSkills(true);
        }
      },
      { threshold: 0.3 }
    );

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => {
            return (
              <div key={index} className="skill-item-individual">
                <div className="skill-image-wrapper">
                  <img 
                    src={skillImages[skill.name]} 
                    alt={skill.name}
                    className="skill-image"
                  />
                </div>
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{
                      width: animateSkills ? `${skill.level}%` : '0%'
                    }}
                  ></div>
                </div>
                <div className="skill-category-tag">{skill.category}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

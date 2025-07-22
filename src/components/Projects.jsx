
import React, { useState } from 'react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      name: "AI Impact on Cybersecurity",
      description: "Developed a Django-based web application that detects cybersecurity threats such as DDoS, intrusion, and malware using machine learning models with over 80% accuracy. The app supports real-time data upload, model evaluation, and visualizations, and is deployed on Render using Gunicorn and Whitenoise.",
      tech: [
  "Django",
  "Python",
  "Scikit-learn",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "Seaborn",
  "MySQL",
  "Gunicorn",
  "Whitenoise"
],
      liveLink: "https://ai-impact-on-cybersecurity.onrender.com",
      features: [
  "Upload custom datasets in real-time",
  "Classify cyber threats: DDoS, intrusion, and malware",
  "Apply multiple ML models: Logistic Regression, Decision Tree, SVM, Gradient Boosting",
  "Display evaluation metrics and performance (accuracy > 80%)",
  "Interactive visualizations with Matplotlib and Seaborn",
  "Deployed on Render with Gunicorn and Whitenoise"
],
      // image: "/public/assets/hungry.jpg"
    },
    {
      name: "Hungryy - Online Food Ordering App",
      description: "A full-stack food ordering application with user authentication, real-time order tracking, and payment integration.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT"],
      liveLink: "https://mern-hungry-app-ggs4.vercel.app/",
      features: ["User Authentication", "Real-time Orders", "Payment Gateway", "Admin Dashboard"],
      // image: "/public/assets/hungry.jpg"
    },
    {
      name: "Netflix Clone",
      description: "A Netflix-inspired streaming platform with movie browsing, search functionality, and user profiles.",
      tech: ["React.js", "Node.js", "MongoDB", "TMDB API"],
      liveLink: "https://netflixclone-cyan-six.vercel.app/",  
      features: ["Movie Streaming", "Search & Filter", "User Profiles", "Responsive Design"],
      // image: "/public/assets/netflix.png"
    },
    {
      name: "Shopping Web App",
      description: "An e-commerce platform with product catalog, shopping cart, and order management system.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
      liveLink: "https://shopping-web-app-ten.vercel.app/",
      features: ["Product Catalog", "Shopping Cart", "Order Management", "User Reviews"],
      // image: "/public/assets/shop.avif"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-container">
          <div className="project-tabs">
            {projects.map((project, index) => (
              <button
                key={index}
                className={`project-tab ${activeProject === index ? 'active' : ''}`}
                onClick={() => setActiveProject(index)}
              >
                {project.name.split(' - ')[0]}
              </button>
            ))}
          </div>
          
          <div className="project-content">
            <div className="project-card">
              {/* <div className="project-image-wrapper">
                <img 
                  // src={projects[activeProject].image} 
                  // alt={projects[activeProject].name}
                  className="project-image"
                />
              </div> */}
              <h3>{projects[activeProject].name}</h3>
              <p>{projects[activeProject].description}</p>
              
              <div className="project-features">
                <h4>Key Features:</h4>
                <ul>
                  {projects[activeProject].features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="project-tech">
                <h4>Technologies:</h4>
                <div className="tech-stack">
                  {projects[activeProject].tech.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className="project-links">
                <a href={projects[activeProject].liveLink} className="project-link" target="_blank" rel="noopener noreferrer">
                  🚀 Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;


import React, { useState } from 'react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      name: "AI Impact on Cybersecurity",
      description: "Developed a Django-based web application that detects cybersecurity threats such as DDoS, intrusion, and malware using machine learning models with over 80% accuracy. The app supports real-time data upload, model evaluation, and visualizations, and is deployed on Render using Gunicorn and Whitenoise.",
      tech: ["Django","Python","Scikit-learn","Pandas","NumPy","Matplotlib","Seaborn","MySQL","Gunicorn","Whitenoise"],
      liveLink: "https://ai-egov-cyber.onrender.com",
      features: ["Upload custom datasets in real-time","Classify cyber threats: DDoS, intrusion, and malware",
  "Apply multiple ML models: Logistic Regression, Decision Tree, SVM, Gradient Boosting",
  "Display evaluation metrics and performance (accuracy > 80%)",
  "Interactive visualizations with Matplotlib and Seaborn",
  "Deployed on Render with Gunicorn and Whitenoise"],
      image: "/assets/Screenshot 2025-11-23 203423.png"

    },
    // {
    //   name: "Hungryy - Online Food Ordering App",
    //   description: "A full-stack food ordering application with user authentication, real-time order tracking, and payment integration.",
    //   tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT"],
    //   liveLink: "https://mern-hungry-app-ggs4.vercel.app/",
    //   features: ["User Authentication", "Real-time Orders", "Payment Gateway", "Admin Dashboard"],
    //   // image: "/public/assets/hungry.jpg"
    // },
    
    // {
    //   name: "Talk-With-Me",
    //   description: "A full-stack chat platform built with Mernstack and Socket.io that enables seamless real-time communication between users.",
    //   tech: ["Socket.io,React.js", "Node.js", "Express.js", "MongoDB"],
    //   liveLink: "https://talk-with-me-dun.vercel.app/chats",
    //   features: ["Real-time Messaging","User Authentication","Group & Private Chats","Online/Offline Status","Scalable Architecture"],
    //   // image: "/public/assets/shop.avif"
    // },

    {
      name: "Water Quality Monitoring System",
      description: "A full-stack platform for reporting and managing water contamination issues. Citizens can submit complaints, while admins review, track, and analyze them with real-time insights.",
      tech: ["Spring Boot", "Java", "MySQL", "React.js", "REST APIs", "Chart.js"],
      liveLink: "https://water-quality-monitoring-eight.vercel.app/",
      features: [
        "User Complaint Submission Portal",
        "Admin Dashboard for Review & Actions",
        "Accept/Reject Workflow for Complaints",
        "Secure Login with Custom Authentication API",
        "Real-time Status Charts (Accepted/Rejected/Pending)",
        "MySQL Database Integration with JPA",
        "Smooth React–Spring Boot Connectivity (Axios + CORS)"
      ],
      image: "/assets/wqm.png"
    },


    {
      name: "Talk-With-Me",
      description: "A full-stack real-time chat platform built using Java Spring Boot WebSockets and React. Supports one-to-one chats, group conversations, and live status updates.",
      tech: ["Spring Boot", "Java", "MySQL", "React.js", "WebSockets", "JWT"],
      liveLink: "https://talk-with-me-dun.vercel.app/chats",
      features: [
        "Real-time Messaging (WebSockets)",
        "User Authentication (JWT)",
        "Private & Group Chats",
        "Online/Offline Presence",
        "Scalable Modular Architecture"
      ],
      image: "/assets/talk.png"
    },

    {
      name: "Hungryy - Online Food Ordering App",
      description: "A full-stack food ordering platform built with Java Spring Boot and React. Users can browse menus, place orders, track them in real time, and complete payments securely.",
      tech: ["Spring Boot", "Java", "MySQL", "React.js", "REST APIs", "JWT Security"],
      liveLink: "https://mern-hungry-app-ggs4.vercel.app/",
      features: [
        "Secure User Authentication (JWT)",
        "Menu Browsing & Cart System",
        "Real-time Order Tracking (WebSockets)",
        "Integrated Payment Flow",
        "Admin Panel for Orders & Inventory"
      ],
      image: "/assets/hungry.png"
    },


    
    {
  name: "Shopping Web App",
  description: "A full-stack e-commerce platform built with Java Spring Boot and React. It provides a product catalog, secure user authentication, a shopping cart system, and end-to-end order management.",
  tech: ["Spring Boot", "Java", "MySQL", "React.js", "REST APIs", "JWT Security"],
  liveLink: "https://shopping-web-app-ten.vercel.app/",
  features: [
    "Product Catalog with Search & Filters",
    "Shopping Cart with Real-time Updates",
    "Order Management System",
    "User Authentication & Reviews"
  ],
  image: "/assets/sh.png"
},
{
  name: "Netflix Clone",
  description: "A Netflix-inspired streaming platform with movie browsing, search functionality, and user profiles.",
  tech: ["React.js", "Node.js", "MongoDB", "TMDB API"],
  liveLink: "https://netflixclone-cyan-six.vercel.app/",  
  features: ["Movie Streaming", "Search & Filter", "User Profiles", "Responsive Design"],
    image: "/assets/net.png"

},
    // {
    //   name: "Shopping Web App",
    //   description: "An e-commerce platform with product catalog, shopping cart, and order management system.",
    //   tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    //   liveLink: "https://shopping-web-app-ten.vercel.app/",
    //   features: ["Product Catalog", "Shopping Cart", "Order Management", "User Reviews"],
    //   // image: "/public/assets/shop.avif"
    // },

    {
  name: "JSON Tree Visualizer",
  description: "An interactive web application that visualizes JSON data in a structured tree format, helping developers easily explore and understand nested objects and arrays. Built with a responsive and intuitive UI for smooth navigation.",
  tech: ["React.js", "Node.js", "Express.js", "MongoDB", "HTML", "CSS", "JavaScript"],
  liveLink: "https://json-visualizer-tree.vercel.app/",
  features: [
    "Visualize JSON data as expandable and collapsible trees",
    "Paste or upload JSON data in real-time",
    "Responsive and developer-friendly user interface",
    "Backend powered by Node.js, Express.js, and MongoDB",
    "Deployed on Vercel for fast and secure access"
  ],
  // image: "/public/assets/json-tree-visualizer.jpg"
},

    {
  name: "MERN Dashboard",
  description: "A full-stack admin dashboard application built using the MERN stack, featuring data visualization, user management, and theme customization with light and dark modes.",
  tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Recharts", "Tailwind CSS"],
  liveLink: "https://mern-dashboard-self.vercel.app/",
  features: [
    "Interactive data visualization using Recharts",
    "User authentication and role-based access control",
    "Dynamic theme switching (light/dark mode)",
    "CRUD operations for users and data entities",
    "Responsive and modern UI built with Tailwind CSS",
    "Secure backend with JWT authentication and Express API"
  ],
  // image: "/public/assets/mern-dashboard.jpg"
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
              <div className="project-image-wrapper">
                <img 
                  src={projects[activeProject].image} 
                  alt={projects[activeProject].name}
                  className="project-image"
                />
              </div>
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

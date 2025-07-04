// App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import CodingProfiles from "./components/CodingProfiles";
import Contact from "./components/Contact";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <CodingProfiles />
      <Contact />
    </>
  );
};

export default App;















// import React from 'react';
// import './App.css';
// import { Link } from 'react-scroll';
// import Typical from 'react-typical';

// function App() {
//   return (
//     <div className="App">
//       {/* Navbar */}
//       <nav className="navbar">
//         <ul className="nav-links">
//           <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
//           <li><Link to="about" smooth={true} duration={500}>About</Link></li>
//           <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
//           <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
//           <li><Link to="education" smooth={true} duration={500}>Education</Link></li>
//           <li><Link to="experience" smooth={true} duration={500}>Experience</Link></li>
//           <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
//         </ul>
//       </nav>

//       {/* Hero Section */}
//       <section id="home" className="section hero">
//         <h1>Bandaru Jaya Lova Raju</h1>
//         <h2>Aspiring Full Stack Developer</h2>
//         <Typical
//           steps={["Building modern web apps using the MERN stack.", 2000]}
//           loop={Infinity}
//           wrapper="p"
//         />
//       </section>

//       {/* About Section */}
//       <section id="about" className="section about">
//         <img src="profile.jpg" alt="Profile" className="profile-img" />
//         <p>
//           I am a B.Tech student in AI & Data Science at Eluru College of Engineering and Technology.
//           Passionate about building modern web applications and solving real-world problems using code.
//         </p>
//         <a href="resume.pdf" download className="btn">Download Resume</a>
//       </section>

//       {/* Skills Section */}
//       <section id="skills" className="section skills">
//         <h2>Skills</h2>
//         <div className="skill-category">
//           <h3>Frontend</h3>
//           <p>HTML, CSS, JavaScript, React</p>
//         </div>
//         <div className="skill-category">
//           <h3>Backend</h3>
//           <p>Node.js, Express</p>
//         </div>
//         <div className="skill-category">
//           <h3>Database</h3>
//           <p>MongoDB</p>
//         </div>
//         <div className="skill-category">
//           <h3>Others</h3>
//           <p>Git, GitHub, REST APIs</p>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section id="projects" className="section projects">
//         <h2>Projects</h2>
//         <div className="project-card">
//           <h3>Task Manager App</h3>
//           <p>MERN stack task management app with auth and task CRUD.</p>
//           <a href="#">GitHub</a> | <a href="#">Live Demo</a>
//         </div>
//         <div className="project-card">
//           <h3>Food Ordering App</h3>
//           <p>React-based frontend with backend APIs for ordering food.</p>
//           <a href="#">GitHub</a> | <a href="#">Live Demo</a>
//         </div>
//         <div className="project-card">
//           <h3>Portfolio Website</h3>
//           <p>This personal portfolio built with React.</p>
//           <a href="#">GitHub</a> | <a href="#">Live Demo</a>
//         </div>
//       </section>

//       {/* Education Section */}
//       <section id="education" className="section education">
//         <h2>Education</h2>
//         <p>Eluru College of Engineering and Technology (2021–2025) – B.Tech in AI & DS</p>
//         <p>Viveka Junior College (2019–2021) – MPC stream</p>
//       </section>

//       {/* Experience Section */}
//       <section id="experience" className="section experience">
//         <h2>Internship/Experience</h2>
//         <p>Frontend Developer Intern @ Internite Corporation</p>
//         <p>Machine Learning Intern @ Verzeo / Zebo.AI</p>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="section contact">
//         <h2>Contact Me</h2>
//         <form onSubmit={(e) => e.preventDefault()}>
//           <input type="text" placeholder="Your Name" required />
//           <input type="email" placeholder="Your Email" required />
//           <textarea placeholder="Your Message" required></textarea>
//           <button type="submit">Send</button>
//         </form>
//         <div className="socials">
//           <a href="https://linkedin.com/in/lovaraj02">LinkedIn</a>
//           <a href="https://github.com/lovaraj02">GitHub</a>
//           <a href="mailto:rajubandaru2255@gmail.com">Email</a>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default App;




// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import Dashboard from './pages/Dashboard';


// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/signup" element={<Register />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

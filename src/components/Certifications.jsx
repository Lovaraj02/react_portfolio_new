import React from 'react';

const Certifications = () => {
  const certifications = [
    {
      title: "Oracle Certification",
      issuer: "Oracle",
      icon: <i class="fa-solid fa-file"></i>,
      link: "/certificates/oracle.pdf"
    },
    {
      title: "SQL Certification",
      issuer: "HackerRank",
      icon: <i class="fa-solid fa-file"></i>,
      link: "/certificates/sql.pdf"
    },
    {
      title: "Python Certification",
      issuer: "Kaggle",
      icon: <i class="fa-brands fa-python"></i>,
      link: "/certificates/python.jpg"
    },
    {
      title: "Machine Learning",
      issuer: "Verzeo",
      icon: <i class="fa-solid fa-laptop-code"></i>,
      link: "/certificates/ml.jpg"
    },
    // {
    //   title: "AI & ML Certification",
    //   issuer: "EduSkills",
    //   icon: <i class="fa-solid fa-hexagon-nodes"></i>,
    //   link: "/certificates/aws.pdf"
    // }
  ];

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="certification-card"
            >
              <div className="cert-icon">{cert.icon}</div>
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;







// import React from 'react';

// const Certifications = () => {
//   const certifications = [
//     {
//       title: "Python Certification",
//       issuer: "Kaggle",
//       icon: "🐍"
//     },
//     {
//       title: "Machine Learning",
//       issuer: "Verzeo",
//       icon: "🤖"
//     },
//     {
//       title: "AI & ML Certification",
//       issuer: "EduSkills",
//       icon: "🧠"
//     },
//     {
//       title: "C Programming",
//       issuer: "HackerRank",
//       icon: "💻"
//     },
//     {
//       title: "Java Certification",
//       issuer: "HackerRank",
//       icon: "☕"
//     },
//     {
//       title: "SQL Certification",
//       issuer: "HackerRank",
//       icon: "🗄️"
//     }
//   ];

//   return (
//     <section id="certifications" className="certifications">
//       <div className="container">
//         <h2 className="section-title">Certifications</h2>
//         <div className="certifications-grid">
//           {certifications.map((cert, index) => (
//             <div key={index} className="certification-card">
//               <div className="cert-icon">{cert.icon}</div>
//               <h3>{cert.title}</h3>
//               <p>{cert.issuer}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Certifications;

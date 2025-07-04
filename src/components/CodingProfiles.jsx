
import React from 'react';

const CodingProfiles = () => {
  const profiles = [
    {
      platform: "HackerRank",
      achievement: "5★ Problem Solving",
      description: "Achieved 5-star rating in problem solving with consistent performance",
      link: "https://www.hackerrank.com/profile/lovaraj02",
      icon: "⭐"
    },
    {
      platform: "GeeksforGeeks",
      achievement: "120+ Problems Solved",
      description: "Active problem solver with focus on data structures and algorithms",
      link: "https://www.geeksforgeeks.org/user/raju4502/",
      icon: "💚"
    }
  ];

  return (
    <section id="coding-profiles" className="coding-profiles">
      <div className="container">
        <h2 className="section-title">Coding Profiles</h2>
        <div className="profiles-grid">
          {profiles.map((profile, index) => (
            <div key={index} className="profile-card">
              <div className="profile-icon">{profile.icon}</div>
              <h3>{profile.platform}</h3>
              <h4>{profile.achievement}</h4>
              <p>{profile.description}</p>
              <a href={profile.link} className="profile-link" target="_blank" rel="noopener noreferrer">
                View Profile →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;

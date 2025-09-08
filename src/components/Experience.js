import React from "react";
import "./Experience.scss";

const Experience = ({ resumeBasicInfo, resumeExperience }) => {
  // Add better safety checks
  if (!resumeExperience || resumeExperience.length === 0) {
    return (
      <section id="experience" className="experience">
        <div className="container">
          <h2 className="section-title">Experience</h2>
          <div className="experience-content">
            <p>No experience data available yet.</p>
          </div>
        </div>
      </section>
    );
  }

  // Use safe access with fallbacks
  const sectionName = resumeBasicInfo?.section_name?.experience || "Experience";

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">{sectionName}</h2>
        <div className="experience-content">
          {resumeExperience.map((workItem, i) => (
            <div key={i} className="experience-item">
              <div className="years-opposite">{workItem.years}</div>
              <div className="job-header">
                <h3 className="job-title">{workItem.title}</h3>
              </div>
              <h4 className="company">{workItem.company}</h4>
              
              {/* Show main technologies if available */}
              {workItem.mainTech && workItem.mainTech.length > 0 && (
                <div className="main-tech">
                  <strong>Main Technologies: </strong>
                  {workItem.mainTech.join(", ")}
                </div>
              )}
              
              {/* Show all technologies */}
              {workItem.technologies && workItem.technologies.length > 0 && (
                <div className="tech-grid">
                  {workItem.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-item">{tech}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
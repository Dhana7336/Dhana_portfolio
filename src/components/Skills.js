import React from "react";
import "./Skills.scss";

const skillsData = [
  {
    category: "Full Stack Engineer",
    skills: ["React.js", "Next.js", "Angular", "Node.js", "Express.js", "Spring Boot", "Python", "TypeScript", "REST API", "GraphQL"]
  },
  {
    category: "Data Engineering",
    skills: ["ETL", "PostgreSQL", "MySQL", "PySpark", "Apache Airflow", "Apache Kafka", "Data Pipelines", "Redshift", "Snowflake"]
  },
  {
    category: "Cloud & AI/ML",
    skills: ["AWS", "Azure", "GCP", "TensorFlow", "PyTorch", "LLMs", "RAG", "Model Deployment"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skillsData.map((box, idx) => (
          <div key={idx} className="skills-box">
            <h3>{box.category}</h3>
            <ul>
              {box.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

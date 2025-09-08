import React from "react";
import "./Skills.scss";

const skillsData = [
  {
    category: "Frontend / Full Stack",
    skills: ["React.js", "Angular", "Redux", "Context API", "HTML", "CSS", "Tailwind", "TypeScript", "JavaScript", "Next.js","Jest"]
  },
  {
    category: "Backend / APIs",
    skills: ["Node.js", "Express.js", "Spring Boot", "Java 8/11", "Python", "REST API","GraphQl","JWT","OAuth","PostgreSQL", "MySQL"]
  },
  {
    category: "Data Engineering / ETL",
    skills: ["Python", "PySpark", "Databricks", "Apache Airflow", "Apache Kafka","AWS Glue", "AWS Lambda", "Kinesis", "Redshift", "Snowflake"]
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

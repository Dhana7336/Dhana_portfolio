import React from "react";
import "./Skills.scss";

const skillsData = [
  {
    category: "Full Stack Engineer",
    skills: [
"React",
"Next.js",
"TypeScript",
"Node.js",
"Python",
"Go",
"Ruby on Rails",
"Java",
"REST APIs",
"GraphQL",
"Microservices"
]
  },
  {
    category: "AI & Data Systems",
    skills: [
"LLMs",
"LangChain",
"RAG Pipelines",
"Vector Databases",
"OpenAI",
"Gemini",
"Hugging Face",
"Ollama",
"Embeddings",
"Prompt Engineering",
"ETL Pipelines",
"Apache Airflow"
]
  },
  {
    category: "Cloud & Infrastructure",
    skills: [
"AWS Lambda",
"AWS Bedrock",
"Azure Blob Storage",
"GCP",
"Docker",
"Kubernetes",
"CI/CD",
"Apache Kafka",
"Snowflake",
"PostgreSQL",
"Redis"
]
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

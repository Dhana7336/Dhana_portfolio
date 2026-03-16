import React, { useState, useEffect } from "react";
import "./About.scss";
import profileImage from "../assets/myProfile.png";

const About = () => {
  const [portfolioData, setPortfolioData] = useState(null);

  useEffect(() => {
    const data = {
      basic_info: {
        description_header: "WHAT I DO?",
        about: 
        `I’m an AI and full-stack engineer focused on building intelligent, production grade systems that combine modern software engineering with applied AI. I’ve worked across both corporate environments and startup teams, designing and shipping end-to-end products from scalable backend services and data pipelines to intuitive front-end interfaces and real-time dashboards while owning the full software lifecycle including architecture, development, testing, deployment, and system reliability.

         My recent work includes developing AI-powered applications using LLMs such as OpenAI and Gemini, building conversational chat and voice interfaces, and integrating AI into operational systems. I’ve built platforms such as a multi-channel Order Management system and a Property Valuation analytics dashboard, using technologies like Python, Go, Java, TypeScript, React, and cloud infrastructure to create scalable tools that improve decision-making and automate complex workflows.`,
        whatido: [
          {
            title: "Full-Stack Engineering",
            description: "Design and build end-to-end applications using React, TypeScript, and modern backend frameworks such as Node.js, Python, and Go. I develop scalable APIs, distributed services, and full-stack platforms across fintech, e-commerce systems, and LegalTech systems including order management,financial transaction processing, analytics platforms, and operational tools that support high-volume real-time workflows.",
            icon: "💻"
          },
          {
            title: "AI Engineering",
            description: "Design and develop AI-powered applications using LLMs such as OpenAI and Gemini, building conversational chat and voice interfaces, RAG pipelines, AI-driven automation workflows. I work with frameworks such as LangChain and vector databases to integrate embeddings, semantic retrieval, and intelligent agents into production systems that enhance decision-making and automate complex business processes.",
            icon: "🤖"
          },
          {
            title: "Backend & Platform Engineering",
            description: "Build scalable backend platforms and microservices architectures with event-driven systems, data pipelines, and high-performance APIs. I focus on reliability, observability, and cloud-native infrastructure to support large-scale production systems across financial, commerce, and analytics platforms.",
            icon: "⚙️"
          }
        ]
      }
    };
    setPortfolioData(data);
  }, []);

  if (!portfolioData) return <div className="loading">Loading...</div>;

  const { description_header, about, whatido } = portfolioData.basic_info;

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">{description_header}</h2>
        
        <div className="about-content-wrapper">
          {/* Left: Profile Image */}
          <div className="about-image">
            <img src={profileImage} alt="Profile" />
          </div>
          
          {/* Right: Professional Summary */}
          <div className="about-content">
            <p className="about-text">{about}</p>
          </div>
        </div>
        
        {/* Expertise Boxes */}
        <div className="expertise-section">
          <h3 className="sub-title">My Expertise</h3>
          <div className="expertise-cards">
            {whatido.map((item, index) => (
              <div key={index} className="expertise-card">
                <div className="expertise-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
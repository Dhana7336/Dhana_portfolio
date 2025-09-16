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
        `With a strong foundation in full-stack development and data engineering, I build intelligent, scalable systems that merge software engineering with AI/ML technologies. I specialize in designing intuitive front-end experiences, architecting robust back-end services, and building data pipelines that enable real-time insights, automation, and seamless product scalability. My work focuses on performance, maintainability, and user-centric design turning complex problems into reliable, production-ready solutions.
        
        I’m currently focused on developing next-generation AI-driven applications, integrating LLM, RAG frameworks, conversational AI to power chatbots and domain-specific systems. Leveraging tools like TensorFlow, PyTorch, and cloud platforms including AWS, Azure,  GCP, I create scalable, secure, and resilient architectures. I’m passionate about bridging cloud-native systems, data workflows, and AI/ML models to deliver impactful, intelligent products that accelerate innovation and business growth.`,
        whatido: [
          {
            title: "Full-Stack Development",
            description: "Built responsive, high-performance front-end applications using React.js and TypeScript, and architected robust back-end APIs with Node.js, Python (Flask/FastAPI), and Spring Boot for banking clients. Delivered scalable systems supporting 500K+ daily transactions, improving performance by 40% and reducing operational errors by 25%.",
            icon: "💻"
          },
          {
            title: "Data Engineering",
            description: "Designed and implemented intelligent data pipelines for financial workflows, enabling real-time analytics, fraud detection, and reporting. Optimized PostgreSQL databases, improved query performance, and ensured data integrity across transaction systems, increasing processing throughput by 30%.",
            icon: "📊"
          },
          {
            title: "Cloud Architecture",
            description: "Deployed and managed cloud-native solutions on AWS and Azure to ensure reliability, autoscaling, and secure operations for high-volume banking applications. Integrated advanced AI/ML models, including LLMs and RAG-based conversational AI, into SaaS platforms, enabling intelligent chatbots and domain-specific insights that enhanced user engagement by 35%.",
            icon: "☁️"
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
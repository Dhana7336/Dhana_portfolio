import React, { useState, useEffect } from "react";
import "./About.scss";
import profileImage from "../assets/myProfile.png";
const About = () => {
  const [portfolioData, setPortfolioData] = useState(null);

  useEffect(() => {
    const data = {
      basic_info: {
        description_header: "What I Do?",
        about: "Full-Stack and Data Engineer specializing in comprehensive solution delivery - from intuitive React.js front-ends and Spring Boot microservices to real-time data pipelines, creating cohesive systems for leading financial clients.",
        whatido: [
          {
            title: "Full-Stack Development",
            description: "⚡ Delivered enterprise-grade applications handling 500K+ daily transactions using React.js, Node.js, and Spring Boot, achieving 40% performance improvement and 25% error reductionBuilding responsive, scalable web applications using React.js, Node.js, Spring Boot & Express.js.\n⚡ Implemented cloud-native solutions on AWS that enhanced system reliability by 20% and enabled seamless autoscaling for high-volume financial applicationsCreating intuitive, accessible UIs and integrating secure REST APIs.\n⚡ Created reusable component libraries and testing frameworks that accelerated UI development by 30% while ensuring WCAG accessibility compliance Delivering end-to-end solutions with modern cloud-native architectures.",
            tech: [
              { icon: "devicon-react-original colored", name: "React.js" },
              { icon: "devicon-html5-plain-wordmark colored", name: "HTML5" },
              { icon: "devicon-css3-plain-wordmark colored", name: "CSS3" },
              { icon: "devicon-nodejs-plain colored", name: "Node.js" },
              { icon: "devicon-angularjs-plain colored", name: "Angular" },
              { icon: "devicon-java-plain colored", name: "Java" },
              { icon: "devicon-spring-plain colored", name: "Spring Boot" },
              { icon: "devicon-postgresql-plain colored", name: "PostgreSQL" }
            ]
          },
          {
            title: "Data Engineering",
            description: "⚡ Developed AI-powered data pipelines that improved processing throughput by 30% and enabled real-time analytics for fraud detection and customer insights pelines and real-time streaming workflows.\n⚡  Optimized Snowflake and Redshift data models that cut query latency by 30% and powered 3+ successful marketing campaigns increasing engagement by 20%.\n⚡ Built regulatory-compliant data systems for KYC/FATCA requirements across multiple jurisdictions, ensuring data accuracy and audit readiness for financial clients.",
            tech: [
              { icon: "devicon-amazonwebservices-plain-wordmark colored", name: "AWS" },
              { icon: "devicon-azure-plain-wordmark colored", name: "Azure" },
              { icon: "devicon-python-plain colored", name: "Python" },
              { icon: "devicon-apache-line-wordmark colored", name: "Airflow" },
              { icon: "devicon-apachekafka-original colored", name: "Kafka" },
              { icon: "devicon-snowflake-plain colored", name: "Snowflake" },
              { icon: "devicon-amazonwebservices-plain-wordmark colored", name: "Redshift" }
            ]
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
          <div className="about-content-wrapper">
            {/* Left: Profile Image */}
            <div className="about-image">
              <img src={profileImage} alt="Profile" />
            </div>
            

          {/* Right: Info */}
          <div className="about-content">
            <h2 className="section-title">
              {description_header}
            </h2>
            <p className="about-text">
              {about}
            </p>

            {/* What I Do Section */}
            <div className="whatido">
              <h3 className="sub-title">My Expertise</h3>
              <div className="whatido-cards">
                {whatido.map((item, index) => (
                  <div key={index} className="whatido-card">
                    <h4>{item.title}</h4>
                    <p>
                      {item.description.split("\n").map((line, i) => (
                        <span key={i}>
                          {line}
                          <br />
                        </span>
                      ))}
                    </p>
                    
                    {/* Tech Icons */}
                    <div className="tech-icons">
                      {item.tech.map((tech, i) => (
                        <div key={i} className="tech-icon">
                          <i className={tech.icon}></i>
                          <span>{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
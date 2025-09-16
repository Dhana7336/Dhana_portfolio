// Header.js - REMOVED MOVING TEXT
import React, { Component } from "react";
import "./Header.scss";

class Header extends Component {
  constructor() {
    super();
    this.state = { 
      isScrolled: false,
      activeSection: "home",
      currentTitleIndex: 0,
      showTitle: true
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll(); // Initial check
  this.titleInterval = setInterval(() => {
    this.setState(prevState => ({
      showTitle: false
    }), () => {
      setTimeout(() => {
        this.setState(prevState => ({
          currentTitleIndex: (prevState.currentTitleIndex + 1) % 4,
          showTitle: true
        }));
      }, 500);
    });
  }, 3000);
}

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    clearInterval(this.titleInterval);
  }

  handleScroll = () => {
    const scrollTop = window.pageYOffset;
    
    // Update scrolled state
    if (scrollTop > 50) {
      this.setState({ isScrolled: true });
    } else {
      this.setState({ isScrolled: false });
    }

    // Update active section based on scroll position
    const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
    const currentSection = sections.find(section => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      }
      return false;
    });

    if (currentSection && currentSection !== this.state.activeSection) {
      this.setState({ activeSection: currentSection });
    }
  };

  scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.setState({ activeSection: sectionId });
    }
  }

  isActive(section) {
    return this.state.activeSection === section;
  }
  render(){
    const jobTitles = [
      "Software Engineer",
      "Full Stack Developer", 
      "Data Engineer",
      "Frontend Developer"
    ];
  

    return (
      <>
        {/* Sticky Top Navigation Bar */}
        <nav className={`sticky-nav ${this.state.isScrolled ? 'scrolled' : ''}`}>
          <div className="nav-container">
            <div className="nav-left">
              <span className="nav-name">DL</span>
            </div>
            
            <div className="nav-links">
              <a 
                href="#about" 
                className={this.isActive('about') ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); this.scrollToSection('about'); }}
              >
                About
              </a>
              <a 
                href="#experience" 
                className={this.isActive('experience') ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); this.scrollToSection('experience'); }}
              >
                Experience
              </a>
              <a 
                href="#skills" 
                className={this.isActive('skills') ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); this.scrollToSection('skills'); }}
              >
                Skills
              </a>
              <a 
                href="#projects" 
                className={this.isActive('projects') ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); this.scrollToSection('projects'); }}
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className={this.isActive('contact') ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); this.scrollToSection('contact'); }}
              >
                Contact
              </a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        {/* Hero Section */}
<section id="home" className="hero-section">
  <div className="hero-content">
    <h1>Hi, I'm Dhana Lakshmi Parupudi</h1>
    
<div className="animated-title-container">
  <h2 className={`animated-title ${this.state.showTitle ? 'show' : 'hide'}`}>
    {jobTitles[this.state.currentTitleIndex]}
  </h2>
</div>

    {/* Intro line */}
    <p className="hero-intro">
    Blending sleek software engineering with cutting-edge AI/ML to craft impactful, real-world solutions. I build intuitive front-end interfaces, scalable back-end systems, and intelligent data pipelines that power innovation and accelerate growth.
    </p>

    {/* Headline */}
    
    {/* Action Buttons */}
<div className="hero-actions">
  <a
    href="#projects"
    className="btn btn-gradient-primary"
    onClick={(e) => {
      e.preventDefault();
      this.scrollToSection("projects");
    }}
  >
    View My Work
  </a>
  <a
    href="#contact"
    className="btn btn-gradient-secondary"
    onClick={(e) => {
      e.preventDefault();
      this.scrollToSection("contact");
    }}
  >
    Get In Touch
  </a>
</div>

    {/* Social Links */}
    <div className="hero-social-links">
      <a href="https://github.com/Dhana7336" className="social-link">
        <span className="iconify" data-icon="akar-icons:github-fill"></span>
      </a>
      <a href="https://www.linkedin.com/in/dhanaparupudi/" className="social-link">
        <span className="iconify" data-icon="akar-icons:linkedin-fill"></span>
      </a>
      <a href="https://x.com" className="social-link">
        <span className="iconify" data-icon="akar-icons:twitter-fill"></span>
      </a>
      <a href="mailto:dhanaparupudi1@gmail.com" className="social-link">
        <span className="iconify" data-icon="ic:baseline-email"></span>
      </a>
    </div>
  </div>
</section>

      </>
    );
  }
}
export default Header;
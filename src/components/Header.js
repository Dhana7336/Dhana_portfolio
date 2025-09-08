// Header.js - REMOVED MOVING TEXT
import React, { Component } from "react";
import "./Header.scss";

class Header extends Component {
  constructor() {
    super();
    this.state = { 
      isScrolled: false,
      activeSection: "home"
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll(); // Initial check
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
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

  render() {
    if (this.props.sharedData) {
      var name = this.props.sharedData.name;
    }

    return (
      <>
        {/* Sticky Top Navigation Bar */}
        <nav className={`sticky-nav ${this.state.isScrolled ? 'scrolled' : ''}`}>
          <div className="nav-container">
            <div className="nav-left">
              <span className="nav-name">Dhana</span>
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
    <span className="iconify header-icon" data-icon="la:laptop-code" data-inline="false"></span>
    <h1>Hi, I'm {name}</h1>

    {/* Intro line */}
    <p className="hero-intro">
    A Full-Stack Developer and Data Engineer passionate about building impactful solutions that solve real-world problems. I specialize in creating intuitive front-end experiences, robust back-end architectures, and reliable data pipelines that empower teams and drive business success
    </p>

    {/* Headline */}
    <p className="hero-headline">
      Building Scalable Web Apps & Reliable Data Pipelines
    </p>

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
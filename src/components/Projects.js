// Projects.js - Updated with proper grid layout
import React, { Component } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";
import "./Projects.scss";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
    };
  }

  render() {
    const detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };

    const detailsModalClose = () => this.setState({ detailsModalShow: false });

    const sectionName =
      this.props.resumeBasicInfo?.section_name?.projects || "Projects";

    // Use placeholder images for now
    const placeholderImg =
      "https://via.placeholder.com/400x230.png?text=Project+Image";

    const projects = this.props.resumeProjects?.slice(0, 8).map((project) => {
      const tools = project.technologies?.slice(0, 3).map((t) => t.name);
      return (
        <div className="project-card" key={project.title}>
          <div className="project-img-container" onClick={() => detailsModalShow(project)}>
            <img
              src={project.images?.[0] || placeholderImg}
              alt={project.title}
              className="project-img"
            />
            <div className="project-overlay">
              <span className="view-project">View Project</span>
            </div>
          </div>
          <div className="project-info">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">
              {project.description.length > 100
                ? `${project.description.substring(0, 100)}...`
                : project.description}
            </p>
            <div className="project-tools">
              {tools &&
                tools.map((tool, index) => (
                  <span key={index} className="tool-tag">
                    {tool}
                  </span>
                ))}
              {project.technologies?.length > 3 && (
                <span className="tool-tag">
                  +{project.technologies.length - 3} more
                </span>
              )}
            </div>
            <div className="project-links">
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <i className="fab fa-github"></i> GitHub
                </a>
              )}
              <button 
                className="project-details-btn"
                onClick={() => detailsModalShow(project)}
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      );
    });

    return (
      <section id="projects" className="projects-section">
        <div className="container">
          <h2 className="section-title">{sectionName}</h2>
          <p className="section-subtitle">Check out some of my recent work</p>
          <div className="projects-grid">
            {projects}
          </div>
          <ProjectDetailsModal
            show={this.state.detailsModalShow}
            onHide={detailsModalClose}
            data={this.state.deps}
          />
        </div>
      </section>
    );
  }
}

export default Projects;
// Projects.js - Fixed version
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
    // This function is used to show the details modal, passing in the project data
    const detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };

    // This function is used to close the details modal
    const detailsModalClose = () => this.setState({ detailsModalShow: false });

    // Get the section name from the resume data
    const sectionName =
      this.props.resumeBasicInfo?.section_name?.projects || "Projects";

    // Use placeholder images for now
    const placeholderImg =
      "https://via.placeholder.com/400x230.png?text=Project+Image";

    // Map the projects from the resume data and create components for each one
    const projects = this.props.resumeProjects?.slice(0, 8).map((project) => {
      // Get the 3 most recent tools the project used
      const tools = project.technologies?.slice(0, 4).map((t) => t.name);

      // Set the image source. If the project has an image, use that, otherwise use a placeholder
      
      // Fixed image path handling
      let imageSrc = placeholderImg;
      if (project.images?.[0]) {
        // Handle image paths. If the image path starts with 'images/', add the public URL prefix
        imageSrc = project.images[0].startsWith('images/') 
          ? `${process.env.PUBLIC_URL}/${project.images[0]}`
          : project.images[0];
      }

      // Return the project card component
      
      return (
        <div className="project-card" key={project.title}>

          <div className="project-img-container" onClick={() => detailsModalShow(project)}>
            <img
              src={imageSrc}
              alt={project.title}
              className="project-img"
              // If the image fails to load, show a placeholder image
              onError={(e) => {
                e.target.src = placeholderImg;
              }}
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
                  // Each tool is a span with the tool name
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

    // Return the projects section
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
import React, { Component } from "react";
import $ from "jquery";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ErrorBoundary from "./components/ErrorBoundary";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {
        basic_info: {},
        experience: [],
        projects: []
      },
      sharedData: {
        basic_info: {},
        skills: {}
      },
    };
  }

  componentDidMount() {
    this.loadSharedData();
    this.loadResumeFromPath('res_primaryLanguage.json');
  }
  getPath(filename){
    if(process.env.NODE_ENV === 'production'){
      return `${process.env.PUBLIC_URL}/${filename}`;
    } else {
      return filename;
    }
  }

  loadResumeFromPath(path) {
    $.ajax({
      url: path,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error("Error loading resume data:", err);
      },
    });
  }

  loadSharedData() {
    const path = this.getPath('portfolio_shared_data.json');
    $.ajax({
      url: `path`,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ sharedData: data });
        document.title = `${data.basic_info?.name || 'Portfolio'}`;
      }.bind(this),
      error: function (xhr, status, err) {
        console.error("Error loading shared data:", err);
      },
    });
  }

  render() {
    return (
      <div>
        <Header sharedData={this.state.sharedData.basic_info} />
        <div className="main-content-wrapper">
          <ErrorBoundary>
            <About
              resumeBasicInfo={this.state.resumeData.basic_info}
              sharedBasicInfo={this.state.sharedData.basic_info}
            />
          </ErrorBoundary>
          
          <ErrorBoundary>
            <Experience
              resumeExperience={this.state.resumeData.experience || []}
              resumeBasicInfo={this.state.resumeData.basic_info}
            />
          </ErrorBoundary>
          
          <ErrorBoundary>
            <Skills
              sharedSkills={this.state.sharedData.skills}
              resumeBasicInfo={this.state.resumeData.basic_info}
            />
          </ErrorBoundary>
          
          <ErrorBoundary>
            <Projects
              resumeProjects={this.state.resumeData.projects || []}
              resumeBasicInfo={this.state.resumeData.basic_info}
            />
          </ErrorBoundary>
          
          <ErrorBoundary>
            <Contact
              resumeBasicInfo={this.state.resumeData.basic_info}
              sharedBasicInfo={this.state.sharedData.basic_info}
            />
          </ErrorBoundary>
          
          <Footer sharedBasicInfo={this.state.sharedData.basic_info} />
        </div>
      </div>
    );
  }
}

// Make sure this default export is at the end
export default App;
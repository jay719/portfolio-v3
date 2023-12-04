import React from "react";
import ProjectsHeading from "./ProjectsHeading";
import ProjectContainer from "./ProjectContainer,";
import { projectsData } from "data/dummyData";
import "../../styles/Projects.css";
const ProjectsSection = () => {
  return (
    <div className="case-studies-section">
      <ProjectsHeading />
      <ProjectContainer projects={projectsData} />
    </div>
  );
};

export default ProjectsSection;

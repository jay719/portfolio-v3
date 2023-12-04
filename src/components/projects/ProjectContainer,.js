import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectContainer = ({ projects }) => {
  return (
    <div className="project-container">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectContainer;

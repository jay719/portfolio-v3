import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.imageUrl} alt={project.projectTitle} />
      <div className="project-details">
        <h3>{project.projectTitle}</h3>
        <p>{project.projectTags}</p>
      </div>
    </div>
  );
};

export default ProjectCard;

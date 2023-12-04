import React from "react";
import CaseStudiesHeading from "./CaseStudiesHeading";
import ProjectContainer from "./ProjectContainer,";
import { projectsData } from "data/dummyData";
import "../../styles/Projects.css";
const CaseStudiesSection = () => {
  return (
    <div className="case-studies-section">
      <CaseStudiesHeading />
      <ProjectContainer projects={projectsData} />
    </div>
  );
};

export default CaseStudiesSection;

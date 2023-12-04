import React from "react";
import "../../styles/Experience.css";
import { ReactComponent as MyIcon } from "../../svgs/pf_arrow-right-up-line 6.svg";
import ExperienceBorders from "./ExperienceBorder";

const ExperienceItem = ({ title, subheading, timePeriod, link, icon }) => (
  <a
    href={link}
    target="_blank"
    className="experience-item-wrapper w-inline-block"
  >
    <div className="experience-item-heading-and-subheading-wrapper">
      <div className="experience-item-heading-wrapper">
        <h5 className="experience-item-heading-text">{title}</h5>
      </div>
      <div className="experience-item-subheading-wrapper">
        <div className="text-block _18px">{subheading}</div>
      </div>
    </div>
    <div className="experience-arrow-and-time-period-wrapper">
      <div className="experience-time-period-wrapper">
        <div className="text-block _18px">{timePeriod}</div>
      </div>
      <div className="experience-arrow-wrapper">
        <MyIcon />
      </div>
    </div>
    <ExperienceBorders />
  </a>
);

const EducationSection = ({ educationList }) => (
  <div className="experience-left-wrapper">
    <div className="experience-heading-wrapper">
      <h3>📚 &nbsp;Education</h3>
    </div>
    <div className="experience-items-container">
      {educationList.map((education) => (
        <ExperienceItem {...education} />
      ))}
    </div>
  </div>
);

const WorkExperienceSection = ({ workExperienceList }) => (
  <div className="experience-right-wrapper">
    <div className="experience-heading-wrapper">
      <h3>💼 &nbsp;Work Experience</h3>
    </div>
    <div className="experience-items-container">
      {workExperienceList.map((work) => (
        <ExperienceItem {...work} />
      ))}
    </div>
  </div>
);

const ExperienceContainer = ({ educationList, workExperienceList }) => (
  <div className="experience-section">
    <div className="wrapper experience">
      <EducationSection educationList={educationList} />
      <WorkExperienceSection workExperienceList={workExperienceList} />
    </div>
  </div>
);

export default ExperienceContainer;

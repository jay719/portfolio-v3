import React from "react";
import { motion } from "framer-motion";
import "../../styles/Experience.css";
import { ReactComponent as MyIcon } from "../../svgs/pf_arrow-right-up-line 6.svg";
import ExperienceBorders from "./ExperienceBorder";
import { useInView } from "react-intersection-observer";

const ExperienceItem = ({ title, subheading, timePeriod, link, icon }) => {
  const [itemRef, itemInView] = useInView({
    triggerOnce: true,
  });

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const delayForItem = 0.5; // Adjust the delay for each item

  return (
    <motion.a
      href={link}
      target="_blank"
      className="experience-item-wrapper w-inline-block"
      variants={itemVariants}
      initial="hidden"
      animate={itemInView ? "visible" : "hidden"}
      transition={{ duration: 0.5, delay: delayForItem }}
      ref={itemRef}
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
    </motion.a>
  );
};

const EducationSection = ({ educationList }) => (
  <div className="experience-left-wrapper">
    <div className="experience-heading-wrapper">
      <h3>📚 &nbsp;Education</h3>
    </div>
    <motion.div
      className="experience-items-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {educationList.map((education, index) => (
        <ExperienceItem key={index} {...education} />
      ))}
    </motion.div>
  </div>
);

const WorkExperienceSection = ({ workExperienceList }) => (
  <div className="experience-right-wrapper">
    <div className="experience-heading-wrapper">
      <h3>💼 &nbsp;Work Experience</h3>
    </div>
    <motion.div
      className="experience-items-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {workExperienceList.map((work, index) => (
        <ExperienceItem key={index} {...work} />
      ))}
    </motion.div>
  </div>
);

const ExperienceContainer = ({ educationList, workExperienceList }) => (
  <div className="experience-section" id="Experience">
    <div className="wrapper experience">
      <EducationSection educationList={educationList} />
      <WorkExperienceSection workExperienceList={workExperienceList} />
    </div>
  </div>
);

export default ExperienceContainer;

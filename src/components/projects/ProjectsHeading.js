import React from "react";
import { motion } from "framer-motion";
import { projectHeadingData } from "data/dummyData";
import { useInView } from "react-intersection-observer";

const CaseStudiesHeading = () => {
  const [headingRef, headingInView] = useInView({
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="wrapper case-studies-heading"
      initial="hidden"
      animate={headingInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.5, delay: 0.7 }}
      ref={headingRef}
    >
      <div className="case-study-heading-and-subtext-wrapper">
        <div className="case-studies-subtext-wrapper">
          <h6>{projectHeadingData.subtext}</h6>
        </div>
        <div className="case-study-heading-wrapper">
          <h2>
            {projectHeadingData.heading1} <br />
            {projectHeadingData.heading2}
          </h2>
        </div>
        <a href="/projects" className="button w-inline-block">
          <div className="button-up">
            <div className="button-text">{projectHeadingData.button}</div>
          </div>
          <div className="button-behind">
            <div className="button-text no-opacity">
              {projectHeadingData.buttonAlt}
            </div>
          </div>
        </a>
      </div>
    </motion.div>
  );
};

export default CaseStudiesHeading;

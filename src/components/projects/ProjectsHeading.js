import React from "react";
import { motion } from "framer-motion";
import { projectHeadingData } from "data/dummyData";
import { useInView } from "react-intersection-observer";
import ColorButton from "components/ColorButton";

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
      <div className="projects-heading-and-subtext-wrapper">
        <div className="case-studies-subtext-wrapper">
          <h6>{projectHeadingData.subtext}</h6>
        </div>
        <div className="projects-heading-wrapper">
          <h2>
            {projectHeadingData.heading1} <br />
            {projectHeadingData.heading2}
          </h2>
        </div>

        <ColorButton href="/projects" text={projectHeadingData.button} />
      </div>
    </motion.div>
  );
};

export default CaseStudiesHeading;

// AboutUI.js (Presentational/UI Component)

import React from "react";
import { motion } from "framer-motion";
import "../../styles/About.css";
import "../../styles/App.css";

const AboutUI = ({
  refTitle,
  refDesc,
  refPhoto,
  controlsTitle,
  controlsDesc,
  controlsPhoto,
}) => {
  return (
    <div className="about-container">
      <motion.div
        className="about-top-container"
        ref={refTitle}
        initial={{ opacity: 0, y: 100 }}
        animate={controlsTitle}
        transition={{ duration: 0.8 }}
      >
        <h2 className="about-title">About Me</h2>
      </motion.div>
      <div className="ab-bottom-container">
        <motion.div
          className="ab-bottom-container-top"
          initial={{ opacity: 0, x: 50 }}
          animate={controlsPhoto}
          transition={{ duration: 0.8 }}
          ref={refPhoto}
        >
          <div className="about-photo-container ">
            <div className="profile-photo"></div>
          </div>
        </motion.div>
        <motion.div
          className="ab-bottom-container-bottom"
          initial={{ opacity: 0, x: -50 }}
          animate={controlsDesc}
          transition={{ durtion: 1 }}
          ref={refDesc}
        >
          Hello 👋🏾. I am a Full Stack developer with a passion for utilizing
          Python and JavaScript/React to build accessible and impactful code.
          With my background as a Quality, Service, and Software engineer I have
          what it takes to meet both company expectations as well as customer
          needs.
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUI;

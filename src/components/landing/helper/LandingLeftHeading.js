import React from "react";
import { motion } from "framer-motion";

const LandingLeftHeading = ({ headingInView, headingRef }) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="landing-hero-heading-wrapper">
      <motion.h1
        className="heading"
        variants={variants}
        initial="hidden"
        animate={headingInView ? "visible" : "hidden"}
        transition={{ duration: 0.5, delay: 0.2 }}
        ref={headingRef}
      >
        I craft <span className="highlight">websites/apps</span> that are
        <br />
        <span className="highlight">accessible </span> and{" "}
        <span className="highlight">user friendly. </span>
        <br />
      </motion.h1>
    </div>
  );
};

export default LandingLeftHeading;

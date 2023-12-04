import React from "react";
import { motion } from "framer-motion";

const LandingLeftParagraph = ({ paragraphInView, paragraphRef }) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="landing-hero-paragraph-wrapper"
      variants={variants}
      initial="hidden"
      animate={paragraphInView ? "visible" : "hidden"}
      transition={{ duration: 0.5, delay: 0.4 }}
      ref={paragraphRef}
    >
      <p className="paragraph _22px">
        Hi! I’m Javaria, a FullStack Developer based in Colorado. My previous
        clients range from small startups getting their feet off the ground, to
        big enterprises!
        <br />
      </p>
    </motion.div>
  );
};

export default LandingLeftParagraph;

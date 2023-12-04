import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import "../../styles/Landing.css";
import profilePic from "../../images/profile.jpg";
const LandingRight = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }} // Initial zoom-out state
      animate={{ opacity: 1, scale: 1 }} // Zoom-in animation
      transition={{ duration: 0.6 }}
      className="landing-hero-image-wrapper"
    >
      <img className="image landing-hero" src={profilePic} alt="profile" />
    </motion.div>
  );
};

export default LandingRight;

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
    <div className="landing-hero-image-wrapper">
      <img className="image landing-hero" src={profilePic} alt="profile" />
    </div>
  );
};

export default LandingRight;

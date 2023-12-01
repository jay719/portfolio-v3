import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import "../../styles/Landing.css";
import "../../styles/App.css";
import LandingLeft from "./LandingLeft";
import LandingRight from "./LandingRight";
// import pdf from "../JavariaBrascomResume.pdf";
export default function Landing() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={controls}
      transition={{ duration: 0.1, ease: "easeIn" }}
    >
      <div className="landing-hero-section">
        <div className="wrapper landing-hero">
          <LandingLeft />
          <LandingRight />
        </div>
      </div>
    </motion.div>
  );
}

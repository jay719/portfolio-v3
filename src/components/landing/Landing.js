import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import "../../styles/Landing.css";
import "../../styles/App.css";
import LandingLeft from "./LandingLeft";
import LandingRight from "./LandingRight";
export default function Landing() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);
  return (
    <div className="wrapper landing-hero">
      <LandingLeft />

      <LandingRight />

      {/* </motion.div> */}
    </div>
  );
}

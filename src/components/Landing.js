import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import "../styles/Landing.css";
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
      <div id="Landing">Landing PAGEEE</div>{" "}
    </motion.div>
  );
}

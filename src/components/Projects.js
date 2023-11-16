import "../styles/Projects.css";
import "../styles/App.css";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

export default function Projects() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={controls}
      transition={{ duration: 0.8 }}
    >
      <div className="projects neon-mios">
        <h2>Projects</h2>
        <div className="projectGrid">
          <div className="projectCard">
            <img src="../public/project2.jpg" alt="Project 1" />
            <h3>Project 1</h3>
            <p>Description of Project 1 goes here...</p>
          </div>
          <div className="projectCard">
            <img src="../public/project2.jpg" alt="Project 2" />
            <h3>Project 2</h3>
            <p>Description of Project 2 goes here...</p>
          </div>
          <div className="projectCard">
            <img src="../public/project2.jpg" alt="Project 3" />
            <h3>Project 3</h3>
            <p>Description of Project 3 goes here...</p>
          </div>
          <div className="projectCard">
            <img src="../public/project2.jpg" alt="Project 4" />
            <h3>Project 4</h3>
            <p>Description of Project 4 goes here...</p>
          </div>
          {/* Add more project cards as needed */}
        </div>
      </div>
    </motion.div>
  );
}

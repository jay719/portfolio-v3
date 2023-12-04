import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { useInView } from "react-intersection-observer";

const ProjectContainer = ({ projects }) => {
  const [containerRef, containerInView] = useInView({
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="project-container"
      variants={variants}
      initial="hidden"
      animate={containerInView ? "visible" : "hidden"}
      transition={{ duration: 0.5 }}
      ref={containerRef}
    >
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </motion.div>
  );
};

export default ProjectContainer;

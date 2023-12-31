import React from "react";
import { motion } from "framer-motion";
import "../../styles/Projects.scss";
import { useInView } from "react-intersection-observer";
import { ReactComponent as BlackRightArrow } from "../../svgs/right-arrow.svg";
const ViewProjectLink = () => {
  return (
    <div className="view-project-div" aria-hidden="true">
      <motion.div
        className="text-block _18px"
        aria-hidden="true"
        style={{ color: "rgb(0, 0, 0)" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 1 }}
      >
        View Project
      </motion.div>
      <div className="view-project-arrow-wrapper">
        <BlackRightArrow className="view-project-arrow" />
      </div>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  const [cardRef, cardInView] = useInView({
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const delayForCard = 0.5;

  return (
    <motion.div
      className="project-card"
      variants={variants}
      initial="hidden"
      animate={cardInView ? "visible" : "hidden"}
      transition={{ duration: 1.5 }}
      ref={cardRef}
    >
      <motion.img
        src={project.imageUrl}
        alt={project.projectTitle}
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1.5, delay: delayForCard }}
        className="project-img"
      />
      <motion.div
        className="project-details"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1.5, delay: delayForCard }}
      >
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: delayForCard + 0.3 }}
        >
          {project.projectTitle}
        </motion.h3>

        {project.projectTags.map((tag, index) => (
          <motion.p
            className="project-small-txt"
            key={index} // Add a unique key prop
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: delayForCard + 0.6 }}
          >
            {tag}
          </motion.p>
        ))}
      </motion.div>
      <motion.div
        className="view-project-link"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1.5, delay: delayForCard + 0.9 }}
      >
        <a href={`/projects/${project.id}`}>
          <ViewProjectLink />
        </a>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;

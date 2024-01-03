import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import "../../styles/NavigationModal.css";

import React from "react";
import { Link } from "components/GeneralComponents";

export default function BottomIcons() {
  const iconVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.4 } },
  };
  return (
    <motion.div
      className="bottom-icon-row"
      variants={iconVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="icon-container">
        <Link
          href="https://www.linkedin.com/in/javaria-brascom/"
          className="icon-link"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className="icon" />
        </Link>
      </div>
      <div className="icon-container">
        <Link
          href="https://github.com/jay719"
          className="icon-link"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </Link>
      </div>
      <div className="icon-container">
        <Link
          href="https://medium.com/@javariab17"
          className="icon-link"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faMedium} className="icon" />
        </Link>
      </div>
    </motion.div>
  );
}

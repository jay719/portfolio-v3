import "../../styles/NavigationModal.css";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faUser,
  faFileAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const NavigationModal = ({ isOpen, onClose }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
  };

  const modalVariants = {
    hidden: { y: "-100%" },
    visible: { y: 0, transition: { duration: 1 } },
  };

  const columnVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } },
  };

  const iconVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.4 } },
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timeoutId); // Cleanup the timeout on unmount
  }, []); // Run the effect only once on mount

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          className="modal-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            className="modal-content"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {/* Navigation links with text */}
            <motion.div
              className="nav-column"
              variants={columnVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="nav-item-container">
                <FontAwesomeIcon icon={faHome} className="nav-item-icon" />
                <span className="nav-item-text">Home</span>
              </div>
              <div className="nav-item-container">
                <FontAwesomeIcon icon={faUser} className="nav-item-icon" />
                <span className="nav-item-text">About</span>
              </div>
              <div className="nav-item-container">
                <FontAwesomeIcon icon={faFileAlt} className="nav-item-icon" />
                <span className="nav-item-text">Resume</span>
              </div>
              <div className="nav-item-container">
                <FontAwesomeIcon icon={faEnvelope} className="nav-item-icon" />
                <span className="nav-item-text">Contact</span>
              </div>
            </motion.div>

            {/* Horizontal line */}
            <div className="line"></div>

            {/* Icons for LinkedIn, GitHub, Medium with text */}
            <motion.div
              className="bottom-icon-row"
              variants={iconVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="icon-container">
                <FontAwesomeIcon icon={faLinkedin} className="icon" />
              </div>
              <div className="icon-container">
                <FontAwesomeIcon icon={faGithub} className="icon" />
              </div>
              <div className="icon-container">
                <FontAwesomeIcon icon={faMedium} className="icon" />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavigationModal;

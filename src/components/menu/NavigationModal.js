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
import { HashLink } from "react-router-hash-link";
import "../../styles/NavigationModal.css";

const NavigationModal = ({ isOpen, onClose, handleClick }) => {
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
            <motion.div
              className="top-section"
              variants={columnVariants}
              initial="hidden"
              animate="visible"
            >
              <ul className="nav-list">
                <li>
                  <h6>
                    <HashLink
                      className="modal-link"
                      smooth
                      to="#Services"
                      onClick={handleClick}
                    >
                      Services
                    </HashLink>
                  </h6>
                </li>
                <li>
                  <h6>
                    <HashLink
                      className="modal-link"
                      smooth
                      to="#Projects"
                      onClick={handleClick}
                    >
                      Projects
                    </HashLink>
                  </h6>
                </li>
                <li>
                  <h6>
                    <HashLink
                      className="modal-link"
                      smooth
                      to="#Blog"
                      onClick={handleClick}
                    >
                      Blog
                    </HashLink>
                  </h6>
                </li>
                <li>
                  <h6>
                    <HashLink
                      className="modal-link"
                      smooth
                      to="#Experience"
                      onClick={handleClick}
                    >
                      Experience
                    </HashLink>
                  </h6>
                </li>
                <li>
                  <h6>
                    <HashLink
                      className="modal-link"
                      smooth
                      to="/contact"
                      onClick={handleClick}
                    >
                      Contact
                    </HashLink>
                  </h6>
                </li>
              </ul>
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

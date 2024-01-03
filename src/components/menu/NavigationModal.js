import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faHome,
  faUser,
  faFileAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { HashLink } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";
import "../../styles/NavigationModal.css";
import BottomIcons from "./BottomIcons";

const NavigationModal = ({ isOpen, onClose, handleClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

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

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, []);

  const handleScrollToSection = (sectionId) => {
    handleClick();
    if (sectionId === "contact") {
      navigate(`/contact`);
    } else {
      navigate(`/`);
      document.getElementById(sectionId)?.scrollIntoView();
    }
  };

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
                  <h6 onClick={() => handleScrollToSection("Services")}>
                    Services
                  </h6>
                </li>
                <li>
                  <h6 onClick={() => handleScrollToSection("Projects")}>
                    Projects
                  </h6>
                </li>
                <li>
                  <h6 onClick={() => handleScrollToSection("Blog")}>Blog</h6>
                </li>
                <li>
                  <h6 onClick={() => handleScrollToSection("Experience")}>
                    Experience
                  </h6>
                </li>
                <li>
                  <h6 onClick={() => handleScrollToSection("contact")}>
                    Contact
                  </h6>
                </li>
              </ul>
            </motion.div>

            {/* Horizontal line */}
            <div className="line"></div>

            {/* Icons for LinkedIn, GitHub, Medium with text */}
            <BottomIcons />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavigationModal;

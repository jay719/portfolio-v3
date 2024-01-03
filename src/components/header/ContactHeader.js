import React, { useState } from "react";
import "../../styles/Header.css";
import { HashLink } from "react-router-hash-link";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import MotionMenuBtn from "../menu/MenuBtn";

const ContactHeader = ({
  isSmallScreen,
  handleClick,
  isOpen,
  clicked,
  setClicked,
}) => {
  const navigate = useNavigate();

  const handleScrollToSection = (sectionId) => {
    if (sectionId === "contact") {
      navigate(`/contact`);
    } else {
      navigate(`/`);
      document.getElementById(sectionId)?.scrollIntoView();
    }
  };
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, animationDelay: 0.8 }}
    >
      <div className="wrapper header">
        <div id="header-top">
          <div className="h-left">
            {isSmallScreen ? (
              <span className="highlight">
                <Link className="header-title" to="/">
                  Javaria Brascom(under construction)
                </Link>
              </span>
            ) : (
              <Link className="header-title" to="/">
                Javaria Brascom(under construction)
              </Link>
            )}
          </div>

          <div className="h-right">
            {isSmallScreen ? (
              <MotionMenuBtn
                handleClick={handleClick}
                clicked={clicked}
                setClicked={setClicked}
              />
            ) : (
              <span className="highlight">
                {" "}
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
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default ContactHeader;

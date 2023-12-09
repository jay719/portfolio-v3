import React, { useState } from "react";
import "../../styles/Header.css";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import MotionMenuBtn from "../menu/MenuBtn";

const Header = ({
  isSmallScreen,
  handleClick,
  isOpen,
  clicked,
  setClicked,
}) => {
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
              <span className="hero-gradient-heading">
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
              <span className="hero-gradient-heading">
                {" "}
                <ul className="nav-list">
                  <li>
                    <h6>
                      <HashLink smooth to="#Services">
                        Services
                      </HashLink>
                    </h6>
                  </li>
                  <li>
                    <h6>
                      <HashLink smooth to="#Projects">
                        Projects
                      </HashLink>
                    </h6>
                  </li>
                  <li>
                    <h6>
                      <HashLink smooth to="#Blog">
                        Blog
                      </HashLink>
                    </h6>
                  </li>
                  <li>
                    <h6>
                      <HashLink smooth to="#Experience">
                        Experience
                      </HashLink>
                    </h6>
                  </li>
                  <li>
                    <h6>
                      <Link to="/contact">Contact</Link>
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

export default Header;

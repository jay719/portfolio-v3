import React, { useState } from "react";
import "../styles/Header.css";
// import "../styles/NavMenu.css";

import { motion, useCycle } from "framer-motion";
import MotionMenuBtn from "./MenuComponents/MenuBtn";
import sidebar from "../data/sidebar";
import SideNavWhole from "./MenuComponents/SideNavWhole";

const Header = ({ isSmallScreen, handleClick, isOpen }) => {
  const [clicked, setClicked] = useState(false);

  const navVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  return (
    <header>
      <div id="header-top">
        <div className="h-left">
          <MotionMenuBtn
            handleClick={handleClick}
            clicked={clicked}
            setClicked={setClicked}
          />
        </div>
        <div className="h-right">
          <a>javaria brascom</a>
        </div>
      </div>

      {/* <div id="header-bottom">
        {" "}
        <SideNavWhole
          clicked={clicked}
          setClicked={setClicked}
          isOpen={isOpen}
        />
      </div> */}
      <motion.div
        id="header-bottom"
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={navVariants}
      >
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
          <li>Item 5</li>
        </ul>
      </motion.div>
    </header>
  );
};

export default Header;

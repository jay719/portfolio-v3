import React, { useState } from "react";
import "../../styles/Header.css";
// import "../styles/NavMenu.css";

import { motion, useCycle } from "framer-motion";
import MotionMenuBtn from "../menu-components/MenuBtn";
import sidebar from "../../data/sidebar";
import SideNavWhole from "../menu-components/NotUsing/SideNavWhole";

const Header = ({ isSmallScreen, handleClick, isOpen }) => {
  const [clicked, setClicked] = useState(false);

  const navVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
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
      </div>
    </motion.header>
  );
};

export default Header;

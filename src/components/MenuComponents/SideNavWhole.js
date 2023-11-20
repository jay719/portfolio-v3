import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Spin as Hamburger } from "hamburger-react";
import sidebar from "../../data/sidebar";
import { Navigation } from "./Navigation";
// import "../../styles/NavMenu.css";

const SideNavWhole = ({ clicked, setClicked, isOpen }) => {
  const containerRef = useRef(null);

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      ref={containerRef}
    >
      <motion.div className="background" variants={sidebar} />
      <Navigation />
    </motion.nav>
  );
};

export default SideNavWhole;

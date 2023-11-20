import React, { useEffect, useRef, useState } from "react";
import { motion, useCycle } from "framer-motion";
import { Navigation } from "./Navigation";
import MotionMenuBtn from "./MenuBtn";
import sidebar from "../../data/sidebar";

export default function SideNavWhole() {
  const [clicked, setClicked] = useState(false);
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const handleClick = () => {
    setClicked(!clicked);
    toggleOpen();
  };

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
      <MotionMenuBtn
        handleClick={() => handleClick()}
        clicked={clicked}
        setClicked={setClicked}
      />
    </motion.nav>
  );
}

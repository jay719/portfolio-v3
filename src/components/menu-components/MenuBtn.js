import React, { useState } from "react";
import { motion } from "framer-motion";
import { Spin as Hamburger } from "hamburger-react";

const MotionMenuBtn = ({ handleClick, clicked, setClicked }) => {
  const [hovered, setHovered] = useState(false);
  const hoverStyles = {
    scale: hovered ? 1.2 : 1,
  };

  return (
    <motion.div
      className="menu-button"
      onClick={() => handleClick()} // Ensure to use an arrow function here
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      initial={false}
      whileHover={hoverStyles}
    >
      <Hamburger
        size={30}
        toggled={clicked}
        toggle={setClicked}
        duration={0.8}
        color="black"
      />
    </motion.div>
  );
};

export default MotionMenuBtn;

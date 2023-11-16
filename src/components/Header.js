import React, { useEffect, useState } from "react";
import "../styles/App.css";
import { motion } from "framer-motion";
import { Spin as Hamburger } from "hamburger-react";

export default function Header() {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const hoverStyles = {
    scale: hovered ? 1.2 : 1, // Adjust the scale factor as needed
  };
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <header>
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0, animationDelay: 0.8 }}
        transition={{ delay: 0.6 }}
      >
        <div className="h-left">
          <a>javaria brascom</a>
        </div>
        <div className="h-right">
          <motion.div
            className="hamburger-icon"
            onClick={handleClick}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            initial={false}
            whileHover={hoverStyles}
          >
            <a>
              <Hamburger
                size={30}
                toggled={clicked}
                toggle={setClicked}
                duration={0.8}
              />
            </a>
          </motion.div>
        </div>
      </motion.header>
    </header>
  );
}

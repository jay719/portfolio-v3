import React from "react";
import { motion } from "framer-motion";

const ColorButton = ({ text, href }) => {
  const handleButtonClick = (event) => {
    // Prevent the default behavior of the link
    event.preventDefault();

    // Add your animation logic here (using a library like Framer Motion or pure CSS animations)
    // For example, using Framer Motion:
    // animate({ /* Your animation properties */ });

    // Simulate an asynchronous delay for the animation
    setTimeout(() => {
      // Once the animation is complete, trigger the navigation manually
      window.location.href = href;
    }, 500); // Adjust the delay time as needed
  };

  return (
    <>
      <a
        href={href}
        className="button w-inline-block"
        onClick={handleButtonClick}
      >
        <div className="button-up">
          <div className="button-text">{text}</div>
        </div>
        <div className="button-behind">
          <div className="button-text no-opacity">Let’s talk now!</div>
        </div>
      </a>
    </>
  );
};
export default ColorButton;

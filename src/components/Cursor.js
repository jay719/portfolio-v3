import React, { useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import AnimatedCursor from "react-animated-cursor";

const BlendCursor = () => {
  return (
    <AnimatedCursor
      color="255,255,255"
      innerSize={8}
      outerSize={35}
      innerScale={1}
      outerScale={2}
      outerAlpha={1}
      hasBlendMode={true}
      outerStyle={{
        mixBlendMode: "exclusion",
      }}
      innerStyle={{
        backgroundColor: "#fff",
        mixBlendMode: "exclusion",
      }}
      clickables={["p", "span", "h1", "h2", "h6"]}
    />
  );
};

export default BlendCursor;

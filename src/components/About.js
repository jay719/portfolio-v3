import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      className="neon-mist"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={controls}
      transition={{ duration: 0.8 }}
    >
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec urna
        et risus fringilla bibendum. Integer volutpat justo et metus feugiat, eu
        fermentum felis posuere.
      </p>
    </motion.div>
  );
};

export default About;

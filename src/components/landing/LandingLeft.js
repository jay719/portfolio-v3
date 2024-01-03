import React from "react";
import { motion } from "framer-motion";
import "../../styles/Landing.css";
import { useInView } from "react-intersection-observer";
import { ReactComponent as BlackRightArrow } from "../../svgs/right-arrow.svg";

import pdf from "../../assets/javaria-brascom.pdf";
import ColorButton from "components/ColorButton";

const LandingLeft = () => {
  // Ref and inView state for heading
  const [headingRef, headingInView] = useInView({
    triggerOnce: true,
  });

  // Ref and inView state for paragraph
  const [paragraphRef, paragraphInView] = useInView({
    triggerOnce: true,
  });

  // Ref and inView state for button and link
  const [buttonLinkRef, buttonLinkInView] = useInView({
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="landing-hero-content-wrapper">
      <div className="landing-hero-heading-wrapper">
        <motion.h1
          className="heading"
          variants={variants}
          initial="hidden"
          animate={headingInView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.2 }} // Adjust the delay for the heading
          ref={headingRef}
        >
          Crafting <span className="highlight">Accessible</span> and{" "}
          <span className="highlight">User-Friendly</span> Experiences through{" "}
          <span className="highlight">Code</span>.
        </motion.h1>
      </div>

      <motion.div
        className="landing-hero-paragraph-wrapper"
        variants={variants}
        initial="hidden"
        animate={paragraphInView ? "visible" : "hidden"}
        transition={{ duration: 0.5, delay: 0.4 }} // Adjust the delay for the paragraph
        ref={paragraphRef}
      >
        <p className="paragraph _22px">
          Hi! I'm a FullStack Developer based in Colorado. My previous employers
          consists of fast growing statups and indusry leading enterprises.
          <br />
        </p>
      </motion.div>

      <motion.div
        className="landing-hero-button-wrapper"
        variants={variants}
        initial="hidden"
        animate={buttonLinkInView ? "visible" : "hidden"}
        transition={{ duration: 1, delay: 0.6 }} // Adjust the delay for the button
        ref={buttonLinkRef}
      >
        <ColorButton href="/contact" text="Book a call" />

        <a
          href={pdf}
          target="_blank"
          rel="noreferrer"
          className="landing-hero-link-wrapper w-inline-block"
        >
          <div className="landing-hero-link-text">Download CV </div>
          <div className="landing-hero-arrow-wrapper">
            <BlackRightArrow />
          </div>
        </a>
      </motion.div>
    </div>
  );
};

export default LandingLeft;

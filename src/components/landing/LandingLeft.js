import React from "react";
import { motion } from "framer-motion";
import "../../styles/Landing.css";
import { useInView } from "react-intersection-observer";

import pdf from "../../assets/javaria-brascom.pdf";

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
          I craft <span className="hero-gradient-heading">websites/apps</span>{" "}
          that are
          <br />
          <span className="hero-gradient-heading">accessible </span> and{" "}
          <span className="hero-gradient-heading">user friendly. </span>
          <br />
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
          Hi! I’m Javaria, a FullStack Developer based in Colorado. My previous
          clients range from small startups getting their feet off the ground,
          to big enterprises!
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
        <a href="/contact" className="button w-inline-block">
          <div className="button-up">
            <div className="button-text">Book a call</div>
          </div>
          <div className="button-behind">
            <div className="button-text no-opacity">Let’s talk now!</div>
          </div>
        </a>

        <a
          href={pdf}
          target="_blank"
          rel="noreferrer"
          className="landing-hero-link-wrapper w-inline-block"
        >
          <div className="landing-hero-link-text">Download CV </div>
          <div className="landing-hero-arrow-wrapper">
            <img
              src="https://assets.website-files.com/5fef5619b640934b33c2385e/5ff019fc559a4200eda62273_Vector.svg"
              loading="lazy"
              alt=""
              className="image contain"
            />
          </div>
        </a>
      </motion.div>
    </div>
  );
};

export default LandingLeft;

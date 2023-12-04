import React from "react";
import { motion } from "framer-motion";
import "../../styles/Landing.css";
const LandingLeft = () => {
  return (
    <div className="landing-hero-content-wrapper">
      <div className="landing-hero-heading-wrapper">
        <h1 className="heading">
          I craft <span className="hero-gradient-heading">websites/apps</span>{" "}
          that are
          <br />
          <span className="hero-gradient-heading">accessible </span> and{" "}
          <span className="hero-gradient-heading">user friendly. </span>
          <br />
        </h1>
      </div>
      <div className="landing-hero-paragraph-wrapper">
        <p className="paragraph _22px">
          Hi! I’m Javaria, a FullStack Developer based in Colorado. My previous
          clients range from small startups getting their feet off the ground,
          to big enterprises!
          <br />
        </p>
      </div>
      <div className="landing-hero-button-wrapper">
        <a href="/contact" className="button w-inline-block">
          <div className="button-up">
            <div className="button-text">Book a call</div>
          </div>
          <div className="button-behind">
            <div className="button-text no-opacity">Let’s talk now!</div>
          </div>
        </a>
        <a
          href="http://localhost:3000/JavariaBrascomResume.pdf"
          download="http://localhost:3000/JavariaBrascomResume.pdf"
          target="_blank"
          className="landing-hero-link-wrapper w-inline-block"
        >
          <div className="landing-hero-link-text">Download CV fix meeeee</div>
          <div className="landing-hero-arrow-wrapper">
            <img
              src="https://assets.website-files.com/5fef5619b640934b33c2385e/5ff019fc559a4200eda62273_Vector.svg"
              loading="lazy"
              alt=""
              className="image contain"
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default LandingLeft;

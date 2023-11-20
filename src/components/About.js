import { motion, useAnimation } from "framer-motion";
import "../styles/About.css"; // Make sure to import your CSS file
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const About = () => {
  const controlsTitle = useAnimation();
  const controlsDesc = useAnimation();
  const controlsPhoto = useAnimation();

  const [refTitle, inViewTitle] = useInView({ triggerOnce: true });
  const [refDesc, inViewDesc] = useInView({ triggerOnce: true });
  const [refPhoto, inViewPhoto] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inViewTitle) {
      controlsTitle.start({ opacity: 1, y: 0 });
    }
    if (inViewDesc) {
      controlsDesc.start({ opacity: 1, x: 0 });
    }
    if (inViewPhoto) {
      controlsPhoto.start({ opacity: 1, x: 0 });
    }
  }, [
    controlsTitle,
    inViewTitle,
    controlsDesc,
    inViewDesc,
    controlsPhoto,
    inViewPhoto,
  ]);

  return (
    <div className="about-container">
      <motion.div
        className="about-top-container"
        ref={refTitle}
        initial={{ opacity: 0, y: 100 }}
        animate={controlsTitle}
        transition={{ duration: 0.8 }}
      >
        <h2 className="about-title">About Me</h2>
      </motion.div>
      <div className="ab-bottom-container">
        <motion.div
          className="ab-bottom-container-left-desc"
          initial={{ opacity: 0, x: -50 }}
          animate={controlsDesc}
          transition={{ durtion: 1 }}
          ref={refDesc}
        >
          Hello 👋🏾. I am a Full Stack developer with a passion for utilizing
          Python and JavaScript/React to build accessible and impactful code.
          With my background as a Quality, Service, and Software engineer I have
          what it takes to meet both company expectations as well as customer
          needs.
        </motion.div>
        <motion.div
          className="ab-bottom-container-right-photo"
          initial={{ opacity: 0, x: 50 }}
          animate={controlsPhoto}
          transition={{ duration: 0.8 }}
          ref={refPhoto}
        >
          <div className="about-photo-container"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

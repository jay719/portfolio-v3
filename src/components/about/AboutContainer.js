import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import AboutUI from "./AboutUI.js";

const AboutContainer = () => {
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
    <AboutUI
      refTitle={refTitle}
      refDesc={refDesc}
      refPhoto={refPhoto}
      controlsTitle={controlsTitle}
      controlsDesc={controlsDesc}
      controlsPhoto={controlsPhoto}
    />
  );
};

export default AboutContainer;

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Service = ({ imgSrc, heading, paragraph, points }) => {
  const [serviceRef, serviceInView] = useInView({
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="service-wrapper"
      variants={variants}
      initial="hidden"
      animate={serviceInView ? "visible" : "hidden"}
      transition={{ duration: 0.5 }}
      ref={serviceRef}
    >
      <div className="service-item-icon-wrapper">
        <img src={imgSrc} loading="lazy" alt="" className="image contain" />
      </div>
      <div className="service-item-heading-wrapper">
        <motion.h5>{heading}</motion.h5>
      </div>
      <div className="service-item-paragraph-wrapper">
        <motion.p className="paragraph _18px">{paragraph}</motion.p>
      </div>
      <div className="service-pointer-wrapper">
        {points.map((point, index) => (
          <motion.div
            key={index}
            className="service-pointer-item"
            variants={variants}
            initial="hidden"
            animate={serviceInView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
          >
            <div className="service-pointer">
              <div className="service-bullet-point"></div>
              <div className="service-pointer-trigger-text-wrapper">
                <div className="service-pointer-trigger-text">{point}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Service;

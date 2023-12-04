import React from "react";
import { motion } from "framer-motion";
import ServiceHeader from "./ServiceHeader.js";
import ServicesGrid from "./ServiceGrid.js";
import "../../styles/Services.css";
import "../../styles/App.css";
import { useInView } from "react-intersection-observer";

const Services = () => {
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
  });

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      id="Services"
      className="services-section"
      initial="hidden"
      animate={sectionInView ? "visible" : "hidden"}
      variants={sectionVariants}
      transition={{ duration: 0.5 }}
      ref={sectionRef}
    >
      <div className="wrapper services">
        <ServiceHeader />
        <ServicesGrid />
      </div>
    </motion.div>
  );
};

export default Services;

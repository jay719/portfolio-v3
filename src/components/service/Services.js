import React, { useState } from "react";
import { motion } from "framer-motion";
import ServiceHeader from "./ServiceHeader.js";
import ServicesGrid from "./ServiceGrid.js";
import "../../styles/Services.scss";
import "../../styles/App.scss";
import { useInView } from "react-intersection-observer";
import ProfessionalGrid from "./ProfessionalGrid.js";
import TechContainer from "components/technology/TechContainer.js";

const Services = () => {
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
  });

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  const [employerView, setEmployerView] = useState(true);
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
        <TechContainer />
        <div>
          {employerView ? (
            <p
              className="highlight2"
              onClick={() => {
                setEmployerView(!employerView);
              }}
            >
              Potential Employer?
            </p>
          ) : (
            <p
              className="highlight2"
              onClick={() => {
                setEmployerView(!employerView);
              }}
            >
              Local Buisness | Potential Client ?
            </p>
          )}
        </div>

        {employerView ? <ServicesGrid /> : <ProfessionalGrid />}
      </div>
    </motion.div>
  );
};

export default Services;

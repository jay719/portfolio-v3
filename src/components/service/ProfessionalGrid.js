import React from "react";
import { motion } from "framer-motion";
import Service from "./Service";
import { useInView } from "react-intersection-observer";

const ProfessionalGrid = () => {
  const [gridRef, gridInView] = useInView({
    triggerOnce: true,
  });

  const gridVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const professionalData = [
    {
      heading: "Technical Skills",
      paragraph:
        "Proficient in various technologies and tools to deliver high-quality solutions.",
      points: [
        "Languages: JavaScript, React, TypeScript, HTML, CSS, SQL",
        "Tools: Sketch, Webflow, Figma, Mocha, Cypress, Jest",
        "Frameworks: React Native, Expo, Ruby on Rails",
        "Databases: PostgreSQL, MariaDB, Firebase",
      ],
    },
    {
      heading: "Professional Background",
      paragraph:
        "Experienced Full-Stack Developer passionate about using JavaScript and React to create accessible and impactful code.",
      points: [
        "Expertise in software automation, UI issue resolution, and enhancing user experiences.",
        "Proven track record in maintaining stability and scalability of CI/CD pipelines, databases, and containers.",
        "Collaborative work with cross-functional teams to enhance design and sprint planning.",
      ],
    },
    {
      heading: "Soft Skills",
      paragraph:
        "In addition to technical proficiency, I bring strong soft skills to contribute effectively to collaborative spaces.",
      points: [
        "Effective Communication",
        "Adaptability to Change",
        "Problem-solving and Critical Thinking",
        "Team Collaboration and Leadership",
      ],
    },
  ];

  return (
    <motion.div
      className="professional-grid"
      variants={gridVariants}
      initial="hidden"
      animate={gridInView ? "visible" : "hidden"}
      transition={{ duration: 0.5 }}
      ref={gridRef}
    >
      {professionalData.map((service, index) => (
        <motion.div
          key={index}
          variants={gridVariants}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.1 * index }}
        >
          <Service {...service} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProfessionalGrid;

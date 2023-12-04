import React from "react";
import { motion } from "framer-motion";
import Service from "./Service";
import { useInView } from "react-intersection-observer";

const ServicesGrid = () => {
  const [gridRef, gridInView] = useInView({
    triggerOnce: true,
  });

  const gridVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const servicesData = [
    {
      imgSrc:
        "https://assets.website-files.com/5fef5619b640934b33c2385e/5fef584362e74acfa6b75398_Group%2051.svg",
      heading: "What I can do for you",
      paragraph:
        "Faster, better products that your users love. Here's all the services I provide:",
      points: [
        "Design Strategy",
        "Web and Mobile App Design",
        "Front-end Development",
      ],
    },
    {
      imgSrc:
        "https://assets.website-files.com/5fef5619b640934b33c2385e/5fef5843b6409375f7c23f2b_Group%2017.svg",
      heading: "Applications I'm fluent in",
      paragraph:
        "Every designer needs the right tools to do the perfect job. Thankfully, I'm multilingual.",
      points: ["Sketch", "Webflow", "Figma"],
    },
    {
      imgSrc:
        "https://assets.website-files.com/5fef5619b640934b33c2385e/5fef58435ceaed068dde60ca_Group%2016.svg",
      heading: "What you can expect",
      paragraph:
        "I design products that are more than pretty. I make them shippable and usable.",
      points: [
        "Clean and functional",
        "Device and user friendly",
        "Efficient and maintainable",
      ],
    },
    // Add more services here...
  ];

  return (
    <motion.div
      className="services-grid"
      variants={gridVariants}
      initial="hidden"
      animate={gridInView ? "visible" : "hidden"}
      transition={{ duration: 0.5 }}
      ref={gridRef}
    >
      {servicesData.map((service, index) => (
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

export default ServicesGrid;

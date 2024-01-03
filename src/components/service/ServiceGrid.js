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
      imgSrc: "https://your-image-url.com",
      heading: "Tailored Website Solutions",
      paragraph:
        "Crafting unique and custom websites that YOU own to elevate your brand. From initial concept to the final product, I ensure your online presence reflects your business identity.",
      points: [
        "Comprehensive Business Website Development",
        "Cross-Platform Compatibility",
        "Intuitive User Experience Design",
      ],
    },
    {
      imgSrc: "https://your-image-url.com",
      heading: "Search Engine Optimization",
      paragraph:
        "Optimizing your website to rank higher on search engines. I implement proven SEO strategies to enhance your online visibility and attract quality traffic.",
      points: [
        "Strategic Keyword Integration",
        "Performance-driven Optimization",
        "Actionable Analytics Insights",
      ],
    },
    {
      imgSrc: "https://your-image-url.com",
      heading: "Social Media Integration",
      paragraph:
        "Enhance your brand's online influence through strategic social media engagement. Build a strong online community and connect with your target audience effectively.",
      points: [
        "Customized Social Media Strategy",
        "Engaging Content Creation (Ex: Blog, Newsletter, etc.)",
        "Interactive Audience Engagement",
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

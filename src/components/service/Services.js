// components/Services.js
import React from "react";
import Service from "./Service";
import "../../styles/Services.css";
import "../../styles/App.css";
const Services = () => {
  // Add your services data here
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
    <div id="Services" className="services-section">
      <div className="wrapper services">
        <div className="service-heading-and-subtext-wrapper">
          <div className="services-sub-text-wrapper">
            <h6>Services</h6>
          </div>
          <div className="service-heading-wrapper">
            <h2>Design that solves problems, one product at a time.</h2>
          </div>
        </div>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <Service key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

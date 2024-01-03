import React from "react";
import "../../styles/TechContainer.css";
import { faReact, faJs, faPython } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TechContainer() {
  const techData = [
    { icon: faReact, label: "React" },
    { icon: faJs, label: "Javascript" },
    { icon: faPython, label: "Python" },
    { icon: faReact, label: "React" },
    // Add more items as needed
  ];

  return (
    <div className="wrapper" id="Tech">
      {/* <h6>My Tools / Tech</h6> */}
      <div className="grid-container">
        {techData.map((tech, index) => (
          <div key={index} className={`item wave-${index + 1}`}>
            <FontAwesomeIcon icon={tech.icon} className="tech-icon" />
            <p>{tech.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

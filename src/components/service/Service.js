// components/Service.js
import React from "react";

const Service = ({ imgSrc, heading, paragraph, points }) => {
  return (
    <div className="service-wrapper">
      <div className="service-item-icon-wrapper">
        <img src={imgSrc} loading="lazy" alt="" className="image contain" />
      </div>
      <div className="service-item-heading-wrapper">
        <h5>{heading}</h5>
      </div>
      <div className="service-item-paragraph-wrapper">
        <p className="paragraph _18px">{paragraph}</p>
      </div>
      <div className="service-pointer-wrapper">
        {points.map((point, index) => (
          <div key={index} className="service-pointer-item">
            <div className="service-pointer">
              <div className="service-bullet-point"></div>
              <div className="service-pointer-trigger-text-wrapper">
                <div className="service-pointer-trigger-text">{point}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;

import { caseStudiesHeadingData } from "data/dummyData";
import React from "react";

const CaseStudiesHeading = () => {
  return (
    <div className="wrapper case-studies-heading">
      <div className="case-study-heading-and-subtext-wrapper">
        <div className="case-studies-subtext-wrapper">
          <h6>{caseStudiesHeadingData.subtext}</h6>
        </div>
        <div className="case-study-heading-wrapper">
          <h2>
            {caseStudiesHeadingData.heading1} <br />
            {caseStudiesHeadingData.heading2}
          </h2>
        </div>
        <a href="/projects" className="button w-inline-block">
          <div className="button-up">
            <div className="button-text">{caseStudiesHeadingData.button}</div>
          </div>
          <div className="button-behind">
            <div className="button-text no-opacity">
              {caseStudiesHeadingData.buttonAlt}
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default CaseStudiesHeading;

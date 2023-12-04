import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Landing from "components/landing/Landing";
import ContactFormContainer from "components/contact/ContactFormContainer";
import Services from "components/service/Services";
import TestimonialSection from "components/testimonials/TestimonialSection";
import ExperienceContainer from "components/experience/ExperienceContainer";
import {
  testimonials,
  educationList,
  workExperienceList,
} from "data/dummyData.js";
import BlogContainer from "components/blog/BlogContainer";
import ProjectsSection from "components/projects/ProjectsSection";

const AppRouter = () => {
  const HomeComponents = () => {
    return (
      <>
        <Landing />
        <Services />

        <ProjectsSection />
        <BlogContainer />
        <ExperienceContainer
          educationList={educationList}
          workExperienceList={workExperienceList}
        />
        {/* <TestimonialSection testimonials={testimonials} /> */}
      </>
    );
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeComponents />} />
        <Route path="/contact" element={<ContactFormContainer />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default AppRouter;

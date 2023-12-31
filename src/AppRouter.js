import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.scss";
import Landing from "components/landing/Landing";
import ContactFormContainer from "components/contact/ContactFormContainer";
import Services from "components/service/Services";
import ExperienceContainer from "components/experience/ExperienceContainer";
import { educationList, workExperienceList } from "data/dummyData.js";
import BlogContainer from "components/blog/BlogContainer";
import ProjectsSection from "components/projects/ProjectsSection";
import Header from "components/header/Header";
import { useCycle } from "framer-motion";
import NavigationModal from "components/menu/NavigationModal";
import ContactHeader from "components/header/ContactHeader";

const AppRouter = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
  const [clicked, setClicked] = useState(false);
  const [isOpen, toggleOpen] = useCycle(false, true);

  const date = new Date().getFullYear();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1000px)");

    const handleMediaQueryChange = (event) => {
      setIsSmallScreen(event.matches);
    };

    // Initial check on component mount
    setIsSmallScreen(mediaQuery.matches);

    // Listen for changes in the media query
    mediaQuery.addListener(handleMediaQueryChange);

    return () => {
      // Remove the listener when the component unmounts
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleClick = () => {
    setClicked(!clicked);
    toggleOpen();
  };

  const ContactComponents = () => {
    return (
      <>
        <ContactHeader
          isSmallScreen={isSmallScreen}
          handleClick={() => handleClick()}
          isOpen={isOpen}
          clicked={clicked} // Pass the clicked state to the Header component
          setClicked={setClicked}
        />
        <ContactFormContainer />
      </>
    );
  };

  const HomeComponents = () => {
    return (
      <>
        <Header
          isSmallScreen={isSmallScreen}
          handleClick={() => handleClick()}
          isOpen={isOpen}
          clicked={clicked} // Pass the clicked state to the Header component
          setClicked={setClicked}
        />
        <Landing />
        <Services />
        <ProjectsSection />
        <BlogContainer />
        <ExperienceContainer
          educationList={educationList}
          workExperienceList={workExperienceList}
        />
      </>
    );
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeComponents />} />
        <Route path="/contact" element={<ContactComponents />} />
      </Routes>
      <NavigationModal
        isOpen={isOpen}
        onClose={() => toggleOpen()}
        handleClick={() => handleClick()}
      />
    </Router>
  );
};

export default AppRouter;

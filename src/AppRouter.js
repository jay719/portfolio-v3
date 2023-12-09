import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";
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

const AppRouter = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
  const [clicked, setClicked] = useState(false);
  const [isOpen, toggleOpen] = useCycle(false, true);

  const date = new Date().getFullYear();

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1000);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = () => {
    setClicked(!clicked);
    toggleOpen();
  };

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
      </>
    );
  };

  return (
    <Router>
      <Header
        isSmallScreen={isSmallScreen}
        handleClick={() => handleClick()}
        isOpen={isOpen}
        clicked={clicked} // Pass the clicked state to the Header component
        setClicked={setClicked}
      />
      <Routes>
        <Route path="/" element={<HomeComponents />} />
        <Route path="/contact" element={<ContactFormContainer />} />
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

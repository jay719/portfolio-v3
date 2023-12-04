import React, { useEffect, useState } from "react";
import "./styles/App.css";
import Landing from "./components/landing/Landing";
import { motion, useCycle } from "framer-motion";
import AboutContainer from "./components/about/AboutContainer";

import Header from "./components/header/Header";
import BlendCursor from "./components/Cursor";
import Projects from "./components/Projects";
import SideNavWhole from "./components/menu-components/NotUsing/SideNavWhole";
import NavigationModal from "components/menu-components/NavigationModal";
import ContactFormCotainer from "components/contact/ContactFormContainer";
import AppRouter from "AppRouter";
// import "intersection-observer";
export default function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
  const [clicked, setClicked] = useState(false);
  const [isOpen, toggleOpen] = useCycle(false, true);

  const date = new Date().getFullYear();

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
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

  return (
    <div className="App">
      <BlendCursor />

      <Header
        isSmallScreen={isSmallScreen}
        handleClick={() => handleClick()}
        isOpen={isOpen}
        clicked={clicked}
        setClicked={setClicked}
      />

      <AppRouter />
      <NavigationModal isOpen={isOpen} onClose={() => toggleOpen()} />

      {/* Render SideNavWhole with the necessary props */}
      {/* {isOpen && (
        <SideNavWhole
          clicked={clicked}
          setClicked={setClicked}
          isOpen={isOpen}
        />
      )} */}
      <footer className="footer">
        <p>&copy; {date} Javaria Brascom</p>
      </footer>
    </div>
  );
}

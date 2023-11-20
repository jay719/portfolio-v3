import React, { useEffect, useState } from "react";
import "./styles/App.css";
import Landing from "./components/Landing";
import { motion, useCycle } from "framer-motion";
import About from "./components/About";
import { ReactComponent as MenuIcon } from "./svgs/hamburger-menu.svg";
import { Divide as Hamburger } from "hamburger-react";
import Header from "./components/Header";
import BlendCursor from "./components/Cursor";
import Projects from "./components/Projects";
import SideNavWhole from "./components/MenuComponents/SideNavWhole";
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
      <motion.div className="home-layout">
        <header>
          <Header
            isSmallScreen={isSmallScreen}
            handleClick={() => handleClick()}
            isOpen={isOpen}
            clicked={clicked}
            setClicked={setClicked}
          />
        </header>
        <div>
          <Landing />
          <About />
          <Projects />
          <footer className="footer">
            <p>&copy; {date} Javaria Brascom</p>
          </footer>
        </div>
      </motion.div>
      {/* Render SideNavWhole with the necessary props */}
      {/* {isOpen && (
        <SideNavWhole
          clicked={clicked}
          setClicked={setClicked}
          isOpen={isOpen}
        />
      )} */}
    </div>
  );
}

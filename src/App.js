import React, { useEffect, useState } from "react";
import "./styles/App.css";
import Landing from "./components/Landing";
import { motion } from "framer-motion";
import About from "./components/About";
import { ReactComponent as MenuIcon } from "./svgs/hamburger-menu.svg";
import { Divide as Hamburger } from "hamburger-react";
import Header from "./components/Header";
import BlendCursor from "./components/Cursor";
import Projects from "./components/Projects";
// import "intersection-observer";
export default function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
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
  return (
    <div className="App">
      <BlendCursor />
      <header>
        <Header isSmallScreen={isSmallScreen} />
      </header>
      <Landing />
      <About />
      <Projects />
      <footer className="footer">
        <p>&copy; {date} Javaria Brascom</p>
      </footer>
    </div>
  );
}

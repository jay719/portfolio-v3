import React, { useEffect, useState } from "react";
import "./styles/App.scss";
import { motion, useCycle } from "framer-motion";

import Header from "./components/header/Header";
import BlendCursor from "./components/Cursor";
import SideNavWhole from "./components/menu/NotUsing/SideNavWhole";
import NavigationModal from "components/menu/NavigationModal";
import AppRouter from "AppRouter";
// import "intersection-observer";
export default function App() {
  const date = new Date().getFullYear();

  return (
    <div className="App">
      <BlendCursor />

      <AppRouter />

      {/* Render SideNavWhole with the necessary props */}
      {/* {isOpen && (
        <SideNavWhole
          clicked={clicked}
          setClicked={setClicked}
          isOpen={isOpen}
        />
      )} */}
      <footer className="footer">
        <p>&copy; {date} Javaria Brascom | Built With React</p>
      </footer>
    </div>
  );
}

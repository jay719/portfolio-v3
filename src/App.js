import React, { useEffect, useState } from "react";
import "./styles/App.scss";

import BlendCursor from "./components/Cursor";

import AppRouter from "AppRouter";
import BottomIcons from "components/menu/BottomIcons";
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
        Lets Connect: <BottomIcons />
        <p>&copy; {date} Javaria Brascom | Built With React</p>
      </footer>
    </div>
  );
}

import React, { useEffect, useRef, useState } from "react";
import "../styles/Header.css";

import SideNavWhole from "./MenuComponents/SideNavWhole";

export default function Header(isSmallScreen) {
  return (
    <header>
      <div id="header-top">
        <div className="h-left">
          <SideNavWhole />
        </div>
        <div className="h-right">
          <a>javaria brascom</a>
        </div>
      </div>
      <div id="header-bottom"></div>
    </header>
  );
}

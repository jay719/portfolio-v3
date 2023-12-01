import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Landing from "components/landing/Landing";
import ContactFormContainer from "components/contact/ContactFormContainer";
import Services from "components/service/Services";

const AppRouter = () => {
  const HomeComponents = () => {
    return (
      <>
        <Landing />
        <Services />
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

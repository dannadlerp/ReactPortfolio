import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import ContactInfo from "./Pages/ContactInfo";

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contactinfo" element={<ContactInfo />} />
        </Routes>
        <h1> hello</h1>
      </React.Fragment>
    </Router>
  );
};

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import AboutMe from "./Pages/AboutMe";
import Projects from "./Pages/Projects";
import ContactInfo from "./Pages/ContactInfo";
import Resume from "./Pages/Resume";
import gitHubLogo from "./assets/githubicon.svg";
import emailLogo from "./assets/emailicon.png";
import linkedInLogo from "./assets/LinkedIn_icon.png";
import stackoverflowLogo from "./assets/stackoverflowicon.png";

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <header>
          <NavbarComponent />
        </header>
        <Routes>
          {<Route path="/" element={<AboutMe />} />}
          <Route path="/projects" element={<Projects />} />
          <Route path="/contactinfo" element={<ContactInfo />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <footer className="footer">
          <div className="logo-container">
            <a href="mailto:dan.nadlerp@gmail.com">
              <img className="footer-logo" src={emailLogo} alt="Email icon" />
            </a>
            <a href="https://www.linkedin.com/in/dan-nadler-372b7b81/">
              <img
                className="footer-logo"
                src={linkedInLogo}
                alt="LinkedInicon"
              />
            </a>
            <a href="https://github.com/dannadlerp">
              <img className="footer-logo" src={gitHubLogo} alt="GitHubicon" />
            </a>
            <a href="https://stackoverflow.com/users/15065966/dan-nadler">
              <img
                className="footer-logo"
                src={stackoverflowLogo}
                alt="stackoverflowicon"
              />
            </a>
          </div>
          © 2024 Dan Nadler
        </footer>
      </React.Fragment>
    </Router>
  );
};

export default App;

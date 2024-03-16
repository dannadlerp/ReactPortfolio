import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

const NavbarComponent = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/"></a>
          <header>React Project Portfolio</header>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleLinks}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${showLinks ? "show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="../Pages/projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="../Pages/contactinfo">
                  Contact Info
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavbarComponent;

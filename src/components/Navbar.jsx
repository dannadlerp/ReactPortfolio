import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const NavbarComponent = () => {
  const [showLinks, setShowLinks] = useState(false);
  const location = useLocation();

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  // Effect to close the links dropdown when the location changes
  useEffect(() => {
    setShowLinks(false);
  }, [location]);

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleLinks}
          >
            <img
              src="https://icons.veryicon.com/png/o/miscellaneous/big-data-regular-monochrome-icon/sidebar-4.png"
              alt="Toggle Button"
              style={{ width: "30px", height: "30px" }}
            />
          </button>

          <header> React Project Portfolio</header>
          <div
            className={`collapse navbar-collapse ${showLinks ? "show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    location.pathname === "/" && "active"
                  }`}
                  href="/"
                >
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    location.pathname === "/projects" && "active"
                  }`}
                  href="/projects"
                >
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    location.pathname === "/contactinfo" && "active"
                  }`}
                  href="/contactinfo"
                >
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    location.pathname === "/resume" && "active"
                  }`}
                  href="/resume"
                >
                  Resume
                </a>
              </li>
              <li className="nav-title"> Dan Nadler</li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavbarComponent;

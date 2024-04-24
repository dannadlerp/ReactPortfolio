import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/logo.png";
import "./Navbar.css";

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
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        style={{ borderBottom: "2px solid #fff" }}
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleLinks}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link to="/" className="navbar-brand">
            <img
              src={logo}
              className="logo-image"
              alt="site logo"
              height={20}
              width={20}
            />
            Dan Nadler
          </Link>
          <div
            className={`collapse navbar-collapse ${showLinks ? "show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  to="/"
                  className={`nav-link ${
                    location.pathname === "/" && "active"
                  }`}
                >
                  About Me
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/projects"
                  className={`nav-link ${
                    location.pathname === "/projects" && "active"
                  }`}
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contactinfo"
                  className={`nav-link ${
                    location.pathname === "/contactinfo" && "active"
                  }`}
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/resume"
                  className={`nav-link ${
                    location.pathname === "/resume" && "active"
                  }`}
                >
                  Resume
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavbarComponent;

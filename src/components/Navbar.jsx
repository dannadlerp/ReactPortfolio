import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const NavbarComponent = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contactinfo">
                  Contact Info
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/resume">
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

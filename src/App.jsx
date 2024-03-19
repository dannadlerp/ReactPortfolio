import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarComponent from "./components/Navbar";
/* import Home from "./Pages/Home";
 */ import Projects from "./Pages/Projects";
import ContactInfo from "./Pages/ContactInfo";
import Resume from "./Pages/Resume";
import headShot from "./assets/headshot.png";

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <header>
          <NavbarComponent />
        </header>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/contactinfo" element={<ContactInfo />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <div className="centered">
          <h1>Dan Nadler</h1>
          <img className="headshot" src={headShot} alt="headshot image" />
          <p className="home-content">
            My name is Dan Nadler and I am a Full Stack Developer. I am
            currently finishing my Full Stack Web Development Bootcamp at the
            University of Toronto. I am looking for a position as a Full Stack
            Developer. I am proficient in HTML, CSS, JavaScript, Node.js,
            Express.js, SQL, MongoDB, and React.
          </p>
          <footer className="footer"> © 2024 Dan Nadler</footer>
        </div>
      </React.Fragment>
    </Router>
  );
};

export default App;

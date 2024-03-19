import projectImage1 from "../assets/weathertrackerapiscreenshot.png";
import projectImage2 from "../assets/cliemployeetrackerscreenshot.png";
import projectImage3 from "../assets/notetakerappscreenshot.png";
import projectImage4 from "../assets/PWAtexteditorScreenshot.png";
/* import "../App.css"; */
function Projects() {
  /*   const imgHeight = "500px";
  const imgWidth = "100%"; */
  return (
    <div className="Page">
      <div className="projects"></div>
      <h1 className="title">Projects</h1>

      <div className="centered">
        <div className="project">
          <img
            className="project-image"
            src={projectImage1}
            alt="Weather API image"
            /*             height={imgHeight}
            width={imgWidth} */
            style={{ marginBottom: "50px", marginRight: "50px" }}
          />
          <div className="project-description">
            <a href="https://github.com/dannadlerp/weatherTracker/">
              <strong>Weather API</strong>
            </a>
            <p className="projects">
              Given a city input, current and future weather info is gathered
              and displayed dynamically using a RESTFUL API structure.
            </p>
          </div>
        </div>

        <div className="project">
          <img
            className="project-image"
            src={projectImage2}
            alt="Employee Tracker CLI image"
            /*             height={imgHeight}
            width={imgWidth} */
            style={{ marginBottom: "50px", marginRight: "50px" }}
          />
          <div className="project-description">
            <a href="https://github.com/dannadlerp/employeeTracker">
              <strong>Command Line Interface Employee Tracker</strong>
            </a>
            <p className="projects">
              Using SQL and Express. A Node based command line interface that
              manages an employee database. Including adding and updating all
              tables including departments, roles, employees.
            </p>
          </div>
        </div>

        <div className="project">
          <img
            className="project-image"
            src={projectImage3}
            alt="Note Taker app image"
            /*             height={imgHeight}
            width={imgWidth} */
            style={{ marginBottom: "50px", marginRight: "50px" }}
          />
          <div className="project-description">
            <a href="https://github.com/dannadlerp/NoteTaker">
              <strong>Note Taker</strong>
            </a>
            <p className="projects">
              Heroku deployed Note Taking app that allows adding, editing, and
              deleting notes dynamically.
            </p>
          </div>
        </div>

        <div className="project">
          <img
            className="project-image"
            src={projectImage4}
            alt="PWAText Editor image"
            style={{ marginBottom: "50px", marginRight: "50px" }}
          />
          <div className="project-description">
            <a href="https:/https://github.com/dannadlerp/PWATextEditor">
              <strong>PWA Text Editor</strong>
            </a>
            <p className="projects">
              Heroku deployed Text editor. Using Webpack, Service workers, and
              is available to use offline.
            </p>
          </div>
        </div>

        <br />
      </div>
    </div>
  );
}

export default Projects;

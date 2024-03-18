import projectImage1 from "../assets/weathertrackerapiscreenshot.png";
import projectImage2 from "../assets/cliemployeetrackerscreenshot.png";
import projectImage3 from "../assets/notetakerappscreenshot.png";
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
            <p className="projects">Some info about my projects</p>
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
            <p className="projects">Some info about my projects</p>
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
            <p className="projects">Some info about my projects</p>
          </div>
        </div>

        <br />
      </div>
    </div>
  );
}

export default Projects;

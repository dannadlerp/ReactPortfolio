import projectImage1 from "../assets/weathertrackerapiscreenshot.png";
import projectImage2 from "../assets/cliemployeetrackerscreenshot.png";
import projectImage3 from "../assets/notetakerappscreenshot.png";
import projectImage4 from "../assets/PWAtexteditorScreenshot.png";
import projectImage5 from "../assets/downtofitnessScreenshot.png";
import projectImage6 from "../assets/readmegeneratorScreenshot.png";
function Projects() {
  return (
    <div className="Page">
      <div className="projects"></div>
      <div className="page-content">
        <div className="title-container">
          <h1 className="title">Projects</h1>
        </div>
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
                <strong>Weather API (Git Repo) - </strong>
              </a>
              <a href="https://dannadlerp.github.io/weatherTracker/">
                <strong>Weather API (Deployed)</strong>
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
                <strong>Employee Management App (Git Repo) - </strong>
              </a>
              <strong>Type of app cannot be deployed</strong>

              <p className="projects">
                A command line employee management app that allows users to
                manage staff, salaries, roles, departments, etc
              </p>
            </div>
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
              <strong>Note Taker (Git Repo) - </strong>
            </a>
            <a href="https://note-taker-ui-92c981d5ea87.herokuapp.com/">
              <strong>Note Taker (Deployed)</strong>
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
              <strong>PWA Text Editor (Git Repo) - </strong>
            </a>
            <a href="https://pwatexteditor01-d4ef03e6c4aa.herokuapp.com/">
              <strong>PWA Text Editor (Deployed)</strong>
            </a>
            <p className="projects">
              Heroku deployed Text editor. Using Webpack, Service workers, and
              is available to use offline.
            </p>
          </div>
        </div>
        <div className="project">
          <img
            className="project-image"
            src={projectImage5}
            alt="down to fitness app image"
            /*             height={imgHeight}
            width={imgWidth} */
            style={{ marginBottom: "50px", marginRight: "50px" }}
          />
          <div className="project-description">
            <a href="https://github.com/dannadlerp/DownToFitness">
              <strong>
                Down To Fitness - Workout buddy finder app (Git Repo) -{" "}
              </strong>
            </a>
            <strong>Type of app cannot be deployed</strong>

            <p className="projects">
              Sign in app that allows users to find available fitness partners
              in their area
            </p>
          </div>
        </div>
        <div className="project">
          <img
            className="project-image"
            src={projectImage6}
            alt="Readme Generator app image"
            /*             height={imgHeight}
            width={imgWidth} */
            style={{ marginBottom: "50px", marginRight: "50px" }}
          />
          <div className="project-description">
            <a href="https://github.com/dannadlerp/professionalReadmeGenerator">
              <strong>Professional README Generator (Git Repo) - </strong>
            </a>
            <strong>Type of app cannot be deployed</strong>

            <p className="projects">
              Using Node.js, MySQL, and Inquirer, this CLI app allows for a
              quick, and professional way to generate a README.md file for any
              project.
            </p>
          </div>
        </div>

        <br />
      </div>
    </div>
  );
}

export default Projects;

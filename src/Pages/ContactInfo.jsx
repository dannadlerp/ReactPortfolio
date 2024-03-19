import gitHubLogo from "../../src/assets/githubicon.svg";
import emailLogo from "../../src/assets/emailicon.png";

function ContactInfo() {
  return (
    <div className="Page">
      <div className="contact">
        <h1 className="title">Contacts</h1>

        <div className="centered">
          <main className="contact-info">
            <img className="first-image" src={emailLogo} alt="Email icon" />
            <a href="mailto:dan.nadlerp@gmail.com">
              {/* dan.nadlerp@gmail.com */}
            </a>
            <br />
            <img src={gitHubLogo} alt="GitHubicon" />
            <a href="https://github.com/dannadlerp">
              {/* https://github.com/dannadlerp */}
            </a>
          </main>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;

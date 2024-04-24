import headShot from "../assets/headshot.png";

function Home() {
  return (
    <div className="Page">
      <div className="aboutme-container">
        {/* <div className="headshot-container"> */}
        <h1 className="title">About Me</h1>
        <img className="headshot" src={headShot} alt="headshot image" />
        <p className="aboutme-content">
          My name is Dan Nadler and I am a Full Stack Developer.
          <br />
          <br />I am looking for a position as a Full Stack Developer. I am
          proficient in HTML, CSS, JavaScript, Node.js, Express.js, SQL,
          MongoDB, and React.
          <br />
          <br />I have completed my Full Stack Web Development Bootcamp at the
          University of Toronto.
        </p>
      </div>
    </div>
    /* </div> */
  );
}

export default Home;

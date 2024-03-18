function ContactInfo() {
  return (
    <div className="Page">
      <div className="contact"></div>
      <h1 className="title">Contacts</h1>

      <div className="centered">
        <p className="contact-info">
          <strong>Email:</strong>{" "}
          <a href="mailto:dan.nadlerp@gmail.com">dan.nadlerp@gmail.com</a>
          <br />
          <strong>GitHub:</strong>{" "}
          <a href="https://github.com/yourusername">
            https://github.com/yourusername
          </a>
        </p>
      </div>
    </div>
  );
}

export default ContactInfo;

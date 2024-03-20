import React, { useState } from "react";

function ContactInfo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Function to handle input change for name, email, and message
  const handleChange = (event, setStateFunction) => {
    setStateFunction(event.target.value); // Update the state with the input
  };

  const sendMessage = () => {
    console.log("Sending message...");
    console.log("Message:", message);
  };

  return (
    <React.Fragment>
      <div className="Page">
        <div className="contact">
          <h1 className="title">Contact</h1>

          <div className="centered">
            <main className="contact-info">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(event) => handleChange(event, setName)}
                placeholder="Enter your name"
              />

              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(event) => handleChange(event, setEmail)}
                placeholder="Enter your email"
              />
              <label htmlFor="message">Message:</label>
              <input
                type="text"
                id="message"
                value={message}
                onChange={(event) => handleChange(event, setMessage)}
                style={{ width: "400px", height: "200px" }} //increase size of message box
                placeholder="Enter your message"
              />
              <button onClick={sendMessage}>Send Message</button>
            </main>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ContactInfo;

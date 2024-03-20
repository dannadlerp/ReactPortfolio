import React from "react";
import resume from "../../src/assets/Resume.pdf";

function Resume() {
  const handleDownload = () => {
    window.open(resume, "_blank");
  };

  return (
    <React.Fragment>
      <div className="Page">
        <div className="resume">
          <h1 className="title">Resume</h1>

          <div className="centered">
            <div className="resume-info">
              Resume Summary
              <br />
              <br />
              EDUCATION
              <br />
              <br />
              UNIVERSITY OF TORONTO - 2024
              <br />
              SCHOOL OF INFORMATION TECHNOLOGY Toronto, Ontario
              <br />
              - Full Stack web development (Front End and Back End development)
              <br />
              - Usage of HTML, CSS, Javascript, languages Use of Node, REST API,
              SQL, NOSQL, MongoDB, REACT, MERN, Webpack, Heroku, Github
              <br />
              <br />
              {/* CORNELL UNIVERSITY - 2015
            <br />
            SCHOOL OF HOSPITALITY Mississauga. Ontario
            <br />
            - Financial Statement preparation/analysis (income statement/Cash
            flow statement/Balance sheets)
            <br />
            - Team development analysis
            <br />- Manage length of stay controls Predict market trends/demand
            <br />- Prepare and accurately predict comparative rates with
            competitors
            <br />
            <br /> HUMBER INSTITUTE OF TECHNOLOGY - 2006 – 2008
            <br />
            SCHOOL OF HOSPITALITY Toronto. Ontario (First Year Honours)
            <br />
            - Built foundations for Business Management including:
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-Revenue Management
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-Housekeeping
            Management
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-Rooms Division
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-F&B functions
            <br />
            - Proper Management of ADR, Yield %, and REVPAR in hotel budgets
            <br />- Hospitality law including Human Resources and Risk
            Management
            <br />- PMS training and usage
            <br />- Intermediate Literary, Mathematic, and Accounting skills
            <br />
            <br />
            HUMBER INSTITUTE OF TECHNOLOGY 2004 – 2005
            <br />
            SCHOOL OF MEDIA STUDIES Toronto, Ontario
            <br />
            -Journalism, Videography, Photography Media Presentation and PR
            Basic Literary, Mathematic, and Accounting skills
            <br />
            <br /> */}
              ACHIEVEMENTS/ AWARDS/ CERTIFICATES
              <br /> • Certificate - Complete Python Mastery Jan 2021 – Python
              programming code course – codewithmosh.com
              <br /> • Certificate - Clean Coding and Refactoring Jan 2021
              <br /> – • Certificate - Clean Coding/Syntax course –
              codewithmosh.com <br /> <br />
              SKILLS <br />
              Upbeat and personable, quick learner, team oriented, determined,
              able to manage transactions quickly and accurately, punctual,
              responsible, works well with new programs, friendly, approachable,
              able to motivate self and others. Leads others effectively and
              efficiently. Projects friendly but firm disposition.
              <div className="centered">
                <button onClick={handleDownload}>Download Resume</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Resume;

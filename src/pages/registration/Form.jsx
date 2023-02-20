import { useState } from "react";
import "./form.css";
import il from "./register-illustration.svg";
import $ from 'jquery';
export default function Form() {
  const [data, setData] = useState({ type: "STARTUP" });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setStartup({ ...startup, [e.target.name]: e.target.value })
    setInvestor({ ...investor, [e.target.name]: e.target.value })
    setStudent({ ...student, [e.target.name]: e.target.value })
  };

  // Startup
  const [startup, setStartup] = useState({
    StartupName: "",
    StartupSector: "",
    StartupDescription: "",
    StartupFounder: "",
    StartupTeam: "",
    StartupFoundingYear: "",
    StartupStage: "",
    StartupContactNumber: "",
    StartupEmail: "",
    StartupPitchDeck: "",
    StartupExpectation: "",

  })

  // Investor
  const [investor, setInvestor] = useState({
    InvestorName: "",
    InvestorSector: "",
    InvestorPOC: "",
    InvestorContactNumber: "",
    InvestorEmail: "",
    InvestorBrochure: "",
  })

  // Student
  const [student, setStudent] = useState({
    StudentName: "",
    StudentRole: "",
    StudentSector: "",
    StudentResume: "",
    StudentCoverLetter: "",
    StudentContactNumber: "",
    StudentEmail: "",
    StudentExpectation: "",
  })

  const handleStartupSubmit = () => {
    var url_submit = [
      `e/1FAIpQLSd5R3-t-bIwx10q16-KKfqnD7ly42f_XS-YdTKQcCcXqhPDQg/formResponse`,
      `entry.535314717=${startup.StartupName},`
        `&entry.1090363457=${startup.StartupSector},`
        `&entry.38898020=${startup.StartupDescription},`
        `&entry.1338890337=${startup.StartupFounder},`
        `&entry.1663912699=${startup.StartupTeam},`
        `&entry.1656134199=${startup.StartupFoundingYear},`
        `&entry.2075787728=${startup.StartupStage},`
        `&entry.1134524373=${startup.StartupContactNumber},`
        `&entry.1926536251=${startup.StartupEmail},`
        `&entry.732962329=${startup.StartupPitchDeck},`
        `&entry.1505003120=${startup.StartupExpectation},`
        `&submit=Submit`
    ].join("");

    $.ajax({
      url: url_submit
    });
  }
  const handleInvestorSubmit = () => {
    var url_submit = [
      `https://docs.google.com/forms/d/e/1FAIpQLSdQdQun4YljCBO3TmwgA2J0FuykC1_d9kcKJ75bbWFH9GpSRQ/formResponse?usp=pp_url`,
      `&entry.1364038763=${investor.InvestorName},`
        `&entry.2146736065=${investor.InvestorSector},`
        `&entry.182720934=${investor.InvestorPOC},`
        `&entry.1922781488=${investor.InvestorContactNumber},`
        `&entry.224186363=${investor.InvestorEmail},`
        `&entry.1873153509=${investor.InvestorBrochure},`
        `&submit=Submit`
    ].join("");

    $.ajax({
      url: url_submit
    });
  }
  const handleStudentSubmit = () => {
    var url_submit = [
      `https://docs.google.com/forms/d/e/1FAIpQLSf_9JqZpGDI1RRpTty_wLYICAs2oZd6owQ6u1OEI6M68HZLCw/formResponse?usp=pp_url`,
      `&entry.695027488=${student.StudentName},`
        `&entry.272514873=${student.StudentRole},`
        `&entry.1518059287=${student.StudentSector},`
        `&entry.458522211=${student.StudentResume},`
        `&entry.1694699977=${student.StudentCoverLetter},`
        `&entry.1503772710=${student.StudentContactNumber},`
        `&entry.1199482170=${student.StudentEmail},`
        `&entry.124627410=${student.StudentExpectation},`
        `&submit=Submit`
    ].join("");

    $.ajax({
      url: url_submit
    });
  }

  return (
    <div className="register" id="register">
      <div className="registerIllustration">
        <img src={il} alt="register" />
      </div>
      <div className="registerContents">
        <div className="registerBox">
          <div className="registerHeading1 mb-2">Welcome!</div>
          <div className="registerHeading2 mb-1">Register</div>
          <div className="registerForm mt-4">
            <div className="row g-3">
              <div className="d-flex">
                <div className="form-check mx-1">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="type"
                    id="radio1"
                    value="STARTUP"
                    onChange={handleChange}
                    defaultChecked
                  />
                  <label className="form-check-label" htmlFor="radio1">
                    Startup
                  </label>
                </div>
                <div className="form-check mx-1">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="type"
                    id="radio2"
                    value="INVESTOR"
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="radio1">
                    Investor
                  </label>
                </div>
                <div className="form-check mx-1">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="type"
                    id="radio3"
                    value="STUDENT"
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="radio1">
                    Student
                  </label>
                </div>
              </div>
              {data.type === "STARTUP" && (
                <form>

                  <div className="col-12 mb-2">
                    <label htmlFor="StartupName">Startup Name</label>
                    <input
                      type="text"
                      name="StartupName"
                      className="registerFormInput mt-2 form-control"
                      placeholder="Enter Startup Name"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-12 mb-2">
                    <label htmlFor="StartupSector">Sector</label>
                    <input
                      type="text"
                      name="StartupSector"
                      className="registerFormInput mt-2 form-control"
                      placeholder="Enter Sector"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12 mb-2">
                    <label htmlFor="StartupDescription">Brief Description</label>
                    <input
                      type="text"
                      name="StartupDescription"
                      className="registerFormInput mt-2 form-control"
                      placeholder="Give a brief Description"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12 mb-2">
                    <label htmlFor="StartupFounder">Founder's Name</label>
                    <input
                      type="text"
                      name="StartupFounder"
                      className="registerFormInput mt-2 form-control"
                      placeholder="Founder"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12 mb-2">
                    <label htmlFor="StartupTeam">Founding Team</label>
                    <input
                      type="text"
                      name="StartupTeam"
                      className="registerFormInput mt-2 form-control"
                      placeholder="Founding Team Members"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12 mb-2">
                    <label htmlFor="FoundingYear">Founding year</label>
                    <input
                      type="text"
                      name="FoundingYear"
                      className="registerFormInput mt-2 form-control"
                      placeholder="Year of Foundation"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12 mb-2">
                    <label htmlFor="StartupStage">Stage</label>
                    <input
                      type="text"
                      name="StartupStage"
                      className="registerFormInput mt-2 form-control"
                      placeholder="Stage"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12 mb-2">
                    <label htmlFor="StartupContactNumber">Contact Number</label>
                    <input
                      type="text"
                      name="StartupContactNumber"
                      className="registerFormInput mt-2 form-control"
                      placeholder="Contact Number"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12 mb-2">
                    <label htmlFor="StartupEmail">Email</label>
                    <input
                      type="email"
                      name="StartupEmail"
                      className="registerFormInput mt-2 form-control"
                      placeholder="Email"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12 mb-2">
                    <label htmlFor="StartupPitchDeck">Pitch Deck</label>
                    <input
                      type="text"
                      name="StartupPitchDeck"
                      className="registerFormInput mt-2 form-control"
                      placeholder="Upload Google Drive Link and Give Access"
                      onChange={handleChange}
                    />
                  </div>
                  {/* <div className="col-12 mb-2">
                                    <label htmlFor="pitch">Pitch Deck</label>
                                    <input type="file" name="pitch" className=" mt-2 form-control" placeholder="pitch" />
                                </div> */}
                  <div className="col-12 mb-2">
                    <label htmlFor="StartupExpectation">
                      Any Expectation from SInC?
                    </label>
                    <input
                      type="text"
                      name="StartupExpectation"
                      className="registerFormInput mt-2 form-control"
                      placeholder="Expectation"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12">
                    <button onClick={handleStartupSubmit} className="registerFormSubmit">
                      Register
                    </button>
                  </div>
                </form>
              )}
              {data.type === "INVESTOR" && (
                <form action="https://docs.google.com/forms/d/e/1FAIpQLSdQdQun4YljCBO3TmwgA2J0FuykC1_d9kcKJ75bbWFH9GpSRQ/formResponse">

                  <div className="col-12 mb-2">
                    <label htmlFor="InvestorName">Investor Name</label>
                    <input
                      type="text"
                      name="InvestorName"
                      className="registerFormInput mt-2 form-control"
                      placeholder="Investor Name"
                    />
                  </div>

                  <div className="col-12 mb-2">
                    <label htmlFor="InvestorSector">Sector</label>
                    <input
                      type="text"
                      name="InvestorSector"
                      className="registerFormInput mt-2 form-control"
                      placeholder="Enter Sector"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-12 mb-2">
                    <label htmlFor="InvestorPOC">Point of Contact</label>
                    <input
                      type="text"
                      name="InvestorPOC"
                      className="registerFormInput mt-2 form-control"
                      placeholder="Point of Contact"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12 mb-2">
                    <label htmlFor="InvestorContactNumber">Contact Number</label>
                    <input
                      type="text"
                      name="InvestorContactNumber"
                      className="registerFormInput mt-2 form-control"
                      placeholder="Contact Number"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12 mb-2">
                    <label htmlFor="InvestorEmail">Email</label>
                    <input
                      type="email"
                      name="InvestorEmail"
                      className="registerFormInput mt-2 form-control"
                      placeholder="Email"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12 mb-2">
                    <label htmlFor="InvestorBrochure">Brochure</label>
                    <input
                      type="text"
                      name="InvestorBrochure"
                      className="registerFormInput mt-2 form-control"
                      placeholder="Please upload on Google drive and give access."
                      onChange={handleChange}
                    />
                  </div>
                  {/* <div className="col-12 mb-2">
                                    <label htmlFor="brochure">Brochure</label>
                                    <input type="file" name="brochure" className="mt-2 form-control" placeholder="Brochure" />
                                </div> */}
                  <div className="col-12">
                    <button onClick={handleInvestorSubmit} className="registerFormSubmit">
                      Register
                    </button>
                  </div>
                </form>
              )}
              {data.type === "STUDENT" && (
                <form >

                  <div className="col-12 mb-2">
                    <label htmlFor="StudentName">Student Name</label>
                    <input
                      type="text"
                      name="StudentName"
                      className="registerFormInput mt-2 form-control"
                      placeholder="Student's Name"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-12 mb-2">
                    <label htmlFor="StudentRole">Role</label>
                    <input
                      type="text"
                      name="StudentRole"
                      className="registerFormInput mt-2 form-control"
                      placeholder="Enter Sector"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12 mb-2">
                    <label htmlFor="SutdentSector">Sector</label>
                    <input
                      type="text"
                      name="SutdentSector"
                      className="registerFormInput mt-2 form-control"
                      placeholder="Enter Sector"
                      onChange={handleChange}
                    />
                  </div>
                  {/* <div className="col-12 mb-2">
                                    <label htmlFor="resume">Resume</label>
                                    <input type="file" name="resume" className="mt-2 form-control" />
                                </div> */}
                  <div className="col-12 mb-2">
                    <label htmlFor="StudentResume">Resume</label>
                    <input
                      type="text"
                      name="StudentResume"
                      className="registerFormInput mt-2 form-control"
                      placeholder="Upload on Google Drive and Give Access"
                      onChange={handleChange}
                    />
                  </div>
                  {/* <div className="col-12 mb-2">
                                    <label htmlFor="cover_letter">Cover Letter</label>
                                    <input type="file" name="cover_letter" className="mt-2 form-control" />
                                </div> */}
                  <div className="col-12 mb-2">
                    <label htmlFor="StudentCoverLetter">Cover Letter</label>
                    <input
                      type="text"
                      name="StudentCoverLetter"
                      className="registerFormInput mt-2 form-control"
                      placeholder="Upload on Google Drive and Give Access"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-12 mb-2">
                    <label htmlFor="StudentContactNumber">Contact Number</label>
                    <input
                      type="text"
                      name="StudentContactNumber"
                      className="registerFormInput mt-2 form-control"
                      placeholder="Contact Number"
                      onChange={handleChange}
                    />
                  </div>


                  <div className="col-12 mb-2">
                    <label htmlFor="StudentEmail">Email</label>
                    <input
                      type="email"
                      name="StudentEmail"
                      className="registerFormInput mt-2 form-control"
                      placeholder="Email"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-12 mb-2">
                    <label htmlFor="StudentExpectation">
                      Any Expectation from SInC
                    </label>
                    <input
                      type="text"
                      name="StudentExpectation"
                      className="registerFormInput mt-2 form-control"
                      placeholder="Expectation"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12">
                    <button handleClick={handleStudentSubmit} className="registerFormSubmit">
                      Register
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

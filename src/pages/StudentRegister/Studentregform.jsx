import React from "react";
import "./Studentregform.css";

export default function Studentregform() {
  return (
    <div className="student-registerBox">
      <div className="Registration-head mb-1">Registration</div>
      <div className="Registration-subhead mb-4 text-center">Begin your journey of innovations with SinC</div>
      <form>
        <div className="col-12 mb-2">
          <label htmlFor="StartupName">Startup Name</label>
          <input
            type="text"
            name="StartupName"
            className="registerFormInput mt-2 form-control"
            placeholder="Enter Startup Name"
            //onChange={handleChange}
          />
        </div>

        <div className="col-12 mb-2">
          <label htmlFor="StartupSector">Sector</label>
          <input
            type="text"
            name="StartupSector"
            className="registerFormInput mt-2 form-control"
            placeholder="Enter Sector"
            //onChange={handleChange}
          />
        </div>
        <div className="col-12 mb-2">
          <label htmlFor="StartupDescription">Brief Description</label>
          <input
            type="text"
            name="StartupDescription"
            className="registerFormInput mt-2 form-control"
            placeholder="Give a brief Description"
            //onChange={handleChange}
          />
        </div>
        <div className="col-12 mb-2">
          <label htmlFor="StartupFounder">Founder's Name</label>
          <input
            type="text"
            name="StartupFounder"
            className="registerFormInput mt-2 form-control"
            placeholder="Founder"
            //onChange={handleChange}
          />
        </div>
        <div className="col-12 mb-2">
          <label htmlFor="StartupTeam">Founding Team</label>
          <input
            type="text"
            name="StartupTeam"
            className="registerFormInput mt-2 form-control"
            placeholder="Founding Team Members"
            //onChange={handleChange}
          />
        </div>
        <div className="col-12 mb-2">
          <label htmlFor="FoundingYear">Founder's Email</label>
          <input
            type="email"
            name="StartupEmail"
            className="registerFormInput mt-2 form-control"
            placeholder="Enter Founder's Email ID"
            //onChange={handleChange}
          />
        </div>
        
        <div className="col-12 mb-2">
          <label htmlFor="StartupContactNumber">Founder's Contact Number</label>
          <input
            type="text"
            name="StartupContactNumber"
            className="registerFormInput mt-2 form-control"
            placeholder="Enter Founder's Contact Number"
            //onChange={handleChange}
          />
        </div>
        <div className="col-12 mb-2">
          <label htmlFor="StartupStage">Startup Stage</label>
          <input
            type="text"
            name="StartupStage"
            className="registerFormInput mt-2 form-control"
            placeholder="ideation stage, growth stage etc."
            //onChange={handleChange}
          />
        </div>
        <div className="col-12 mb-2">
          <label htmlFor="StartupPitchDeck">Pitch Deck</label>
          <input
            type="text"
            name="StartupPitchDeck"
            className="registerFormInput mt-2 form-control"
            placeholder="Upload Google Drive Link and Give Access"
            //onChange={handleChange}
          />
           <p style={{textAlign:"right"}}>* Attach Pdf Here</p>
        </div>
       
        
        <div className="col-12 mb-2">
          <label htmlFor="PastAchievements">Past Achievements</label>
          <input
            type="text"
            name="PastAchievements"
            className="registerFormInput mt-2 form-control"
            placeholder="Enter Past Achievements if any"
            //onChange={handleChange}
          />
        </div>

        <div className="col-12 mb-2">
          <label htmlFor="CreatePassword">Create Password *</label>
          <input
            type="text"
            name="CreatePassword"
            className="registerFormInput mt-2 form-control"
            placeholder="Enter Your Password"
            //onChange={handleChange}
          />
        </div>

        <div className="col-12 mb-2">
          <label htmlFor="ConfirmPassword">Confirm Password *</label>
          <input
            type="text"
            name="ConfirmPassword"
            className="registerFormInput mt-2 form-control"
            placeholder="Renter the Password to Confirm"
            //onChange={handleChange}
          />
        </div>


        <div className="col-12">
          <button
            //   onClick={handleStartupSubmit}
            className="registerFormSubmit"
          >
            Register
          </button>
        </div>
      </form>{" "}
    </div>
  );
}

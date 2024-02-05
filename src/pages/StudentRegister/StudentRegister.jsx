import React from "react";
import "./StartupRegister.css";
import student from "../../Resources/studentreg.svg";
import Studentregform from "./Studentregform";

export default function StudentRegister() {
  return (
    <div className="Student-reg-boss-container">
      <div className="student-reg-container">
        <div className="student-reg-lefthalf">
          <div className="student-reg-img">
            <img src={student} alt="rocket" />
          </div>
          <div className="student-reg-text">
            <p>"Nurturing Student Ventures as Startup </p>
            <p>Incubation Cell IIT Delhi”</p>
          </div>
        </div>
        <div className="student-reg-righthalf">
          <Studentregform />
        </div>
      </div>
    </div>
  );
}

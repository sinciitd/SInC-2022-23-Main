import React from "react";
import "./StartupRegister.css";
import student from "../../Resources/studentreg.svg";
import Studentregform from "./Studentregform";
import styled from "styled-components";

const StyledStudentRegister = styled.div`
  .student-reg-img {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 60%;
    height: 89%;
  }
  .student-reg-img img {
    height: 90%;
    width: 220%;
  }
`;

export default function StudentRegister() {
  
  return (
    <StyledStudentRegister className="Student-reg-boss-container">
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
    </StyledStudentRegister>
  );
}

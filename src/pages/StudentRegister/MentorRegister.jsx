import React from "react";
import "./StartupRegister.css";
import mentor from "../../Resources/Investor.svg";
import Mentorregform from "./Mentorregform";
import styled from "styled-components";

const StyledMentorRegister = styled.div`
  .mentor-reg-img {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 60%;
    height: 89%;
  }
  .mentor-reg-img img {
    height: 90%;
    width: 220%;
  }
`;

export default function MentorRegister() {
  return (
    <StyledMentorRegister className="Student-reg-boss-container">
      <div className="student-reg-container">
        <div className="student-reg-lefthalf">
          <div className="mentor-reg-img">
            <img src={mentor} alt="rocket" />
          </div>
          <div className="student-reg-text">
            <p>“Guide, Inspire, Lead: Mentor the Next </p>
            <p>Generation”</p>
          </div>
        </div>
        <div className="student-reg-righthalf">
          <Mentorregform />
        </div>
      </div>
    </StyledMentorRegister>
  );
}

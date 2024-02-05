import React from 'react'
import "./StartupRegister.css";
import investor from "../../Resources/Investor.svg";
import Mentorregform from "./Mentorregform";



export default function MentorRegister() {
    return (
        <div className="Student-reg-boss-container">
          <div className="student-reg-container">
            <div className="student-reg-lefthalf">
              <div className="student-reg-img">
                <img src={investor} alt="rocket" />
              </div>
              <div className="student-reg-text">
                <p>“Guide, Inspire, Lead: Mentor the Next  </p>
                <p >Generation”</p>
              </div>
            </div>
            <div className="student-reg-righthalf">
                <Mentorregform/>
            </div>
          </div>
        </div>
      );
    }

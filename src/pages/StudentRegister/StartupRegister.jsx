import React from "react";
import "./StartupRegister.css";
import rocket from "../../Resources/rocket.svg";



export default function StartupRegister() {
  return (
    <div className="Student-reg-boss-container">
      <div className="student-reg-container">
        <div className="student-reg-lefthalf">
          <div className="student-reg-img">
            <img src={rocket} alt="rocket" />
          </div>
          <div className="student-reg-text">
            <p>Elevate Your Startup with SinC IIT Delhi </p>
            <p>Register & Ignite</p>
          </div>
        </div>
        <div className="student-reg-righthalf">
            <StartupRegister />
        </div>
      </div>
    </div>
  );
}

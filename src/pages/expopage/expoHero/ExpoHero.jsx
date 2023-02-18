import React from "react";
import "./expoHero.css";
import sinc_logo from "./sinc-white-logo.svg"
import tryst_logo from "./logo.webp"
import ExpoHeader from "../expoHeader/ExpoHeader";

export default function ExpoHero() {
  return (
    <>
      <div className="expoHero">
        <ExpoHeader />
        <div className="expoHeroContents">
          <img src={sinc_logo} alt="Sinc logo" width='120px' className="mx-auto mb-4" />
          <div className="expoHeroHeading1 mx-auto">Student Incubation Cell</div>
          <div className="expoHeroHeading2 mx-auto">IIT Delhi</div>
          <div className="expoHeroHeading2 mx-auto">Presents</div>
          <div className="expoHeroHeading3 mx-auto">STARTUP EXPO 2023</div>
          <div className="expoHeroHeading2 mx-auto">in collaboration with</div>
          <img src={tryst_logo} alt="Tryst logo" width='180px' className="mx-auto mt-4" />
          {/* <Link to="/about" className="heroReadMoreBtn mt-4">
            <span className="heroReadMoreBtnText">READ MORE &raquo;</span>
          </Link> */}
        </div>
      </div>
    </>
  );
}

import { Link } from "react-router-dom";
import "./hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <div className="heroContents">
        <div className="heroHeading1 mx-auto">
          <div>WELCOME TO STUDENT INCUBATION CELL</div>
          <div>IIT DELHI</div>
        </div>
        <div className="heroHeading2 mx-auto mt-2">
          <div>IDEAS THAT ARE MADE TO MATTER!</div>
        </div>
        <Link to="/about" className="heroReadMoreBtn mt-4">
          <span className="heroReadMoreBtnText">READ MORE &raquo;</span>
        </Link>
        <Link
          to="/expo"
          className="heroReadMoreBtn mt-4"
          style={{ backgroundColor: "#FFC000" }}
        >
          <span
            className="heroReadMoreBtnText"
            style={{ color: "#000000", fontWeight: "600" }}
          >
            STARTUP EXPO - 2023
          </span>
        </Link>
      </div>
    </div>
  );
}

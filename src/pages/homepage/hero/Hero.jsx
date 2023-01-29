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
        <button className="heroReadMoreBtn mt-4">
          <Link to="/about" className="heroReadMoreBtnText">
            READ MORE &raquo;
          </Link>
        </button>
      </div>
    </div>
  );
}

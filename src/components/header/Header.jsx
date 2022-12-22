import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import logo from "./logo.svg";
// import logo from "./logo.png";

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-blue shadow">
        <img
          className="logo"
          alt="logo"
          src={logo}
          width="50px"
          height="50px"
        ></img>
        <Link className="navbar-brand" to="/">
          Student Incubation Cell
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item active">
              {/* <Link className="nav-link" to="/">
                Home
              </Link> */}
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? "nav-link nav-link-active" : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              {/* <Link className="nav-link" to="/events">
                Events
              </Link> */}
              <NavLink
                to="/events"
                className={({ isActive }) =>
                  isActive ? "nav-link nav-link-active" : "nav-link"
                }
              >
                Events
              </NavLink>
            </li>
            <li className="nav-item">
              {/* <Link className="nav-link" to="/about">
                About Us
              </Link> */}
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "nav-link nav-link-active" : "nav-link"
                }
              >
                About Us
              </NavLink>
            </li>
            <div className="vertical-line"></div>
            <li className="nav-item">
              {/* <Link className="nav-link" to="/contact">
                Contact Us
              </Link> */}
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "nav-link nav-link-active" : "nav-link"
                }
              >
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
              {/* <Link className="nav-link" to="/register">
                Register
              </Link> */}
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive ? "nav-link nav-link-active" : "nav-link"
                }
              >
                Register
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;

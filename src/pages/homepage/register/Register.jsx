// UNUSED

import { useState } from "react";
import "./register.css";
import il from "./register-illustration.svg";

export default function Register() {
  const [pwd1, setPwd1] = useState("");
  const [pwd2, setPwd2] = useState("");
  const [isRevealPwd1, setIsRevealPwd1] = useState(false);
  const [isRevealPwd2, setIsRevealPwd2] = useState(false);

  return (
    <div className="register" id="register">
      <div className="registerIllustration">
        <img src={il} alt="register" />
      </div>
      <div className="registerContents">
        <div className="registerBox">
          <div className="registerHeading1 mb-2">Welcome!</div>
          <div className="registerHeading2 mb-1">Sign Up</div>
          <div className="registerHeading3">To Register your Startup</div>
          <div className="registerForm mt-4">
            <form className="row g-3">
              <div className="col-12 mb-2">
                <label htmlFor="#regEmail">Email</label>
                <input
                  type="email"
                  className="registerFormInput mt-2 form-control"
                  id="regEmail"
                  placeholder="Enter your Email"
                />
              </div>
              <div className="col-12 mb-2">
                <label htmlFor="#regUsername">Username</label>
                <input
                  type="text"
                  className="registerFormInput mt-2 form-control"
                  id="regUsername"
                  placeholder="Create a username"
                />
              </div>
              <div className="col-12 mb-2">
                <label htmlFor="#regPwd1">Password</label>
                <div className="input-group">
                  <input
                    type={isRevealPwd1 ? "text" : "password"}
                    value={pwd1}
                    onChange={(e) => setPwd1(e.target.value)}
                    className="registerFormInput mt-2 form-control"
                    id="regPwd1"
                    placeholder="Create a strong password"
                  />
                  <span
                    onClick={() => setIsRevealPwd1((prevState) => !prevState)}
                    className="registerFormInput mt-2 input-group-text"
                  >
                    <i
                      className={
                        isRevealPwd1 ? "far fa-eye-slash" : "far fa-eye"
                      }
                    ></i>
                  </span>
                </div>
              </div>
              <div className="col-12 mb-2">
                <label htmlFor="#regPwd2">Confirm Password</label>
                <div className="input-group">
                  <input
                    type={isRevealPwd2 ? "text" : "password"}
                    value={pwd2}
                    onChange={(e) => setPwd2(e.target.value)}
                    className="registerFormInput mt-2 form-control"
                    id="regPwd2"
                    placeholder="Re-enter your password"
                  />
                  <span
                    onClick={() => setIsRevealPwd2((prevState) => !prevState)}
                    className="registerFormInput mt-2 input-group-text"
                  >
                    <i
                      className={
                        isRevealPwd2 ? "far fa-eye-slash" : "far fa-eye"
                      }
                    ></i>
                  </span>
                </div>
              </div>
              <div className="col-12">
                <button type="submit" className="registerFormSubmit">
                  Register
                </button>
              </div>
            </form>
          </div>
          <div className="registerHeading4 mt-4">
            <span className="registerText1">Already have an Account? </span>
            <a href="/" className="registerText2">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

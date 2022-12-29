import { useState } from "react";
import "./form.css";
import il from "./register-illustration.svg";



export default function Form() {
    const [data, setData] = useState({ "type": null });
    const [startup, setStartup] = useState({ startup_name: "", sector: "", founder_name: "", description: "", founding_team: "", founding_year: "", stage: "", contact_no: "", email: "", expectation: "" });
    const [investor, setInvestor] = useState({ student_name: "", role: "", sector: "", resume: "", cover_letter: "", contact_no: "", email: "", expectation: "" });
    const [student, setStudent] = useState({ investor_name: "", sector: "", poc: "", brochure: "", contact_no: "", email: "" });
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
        setStartup({ ...startup, [e.target.name]: e.target.value });
        setInvestor({ ...investor, [e.target.name]: e.target.value });
        setStudent({ ...student, [e.target.name]: e.target.value });
    }
    return (
        <div className="register" id="register">
            <div className="registerIllustration">
                <img src={il} alt="register" />
            </div>
            <div className="registerContents">
                <div className="registerBox">
                    <div className="registerHeading1 mb-2">Welcome!</div>
                    <div className="registerHeading2 mb-1">Register</div>
                    <div className="registerForm mt-4">
                        <form className="row g-3">
                            <div className="d-flex">
                                <div class="form-check mx-1">
                                    <input onChange={handleChange} class="form-check-input" type="radio" name="type" id="radio1" value="STARTUP" />
                                    <label class="form-check-label" for="radio1">Startup</label>
                                </div>
                                <div class="form-check mx-1">
                                    <input onChange={handleChange} class="form-check-input" type="radio" name="type" id="radio2" value="INVESTOR" />
                                    <label class="form-check-label" for="radio1">Investor</label>
                                </div>
                                <div class="form-check mx-1">
                                    <input onChange={handleChange} class="form-check-input" type="radio" name="type" id="radio3" value="STUDENT" />
                                    <label class="form-check-label" for="radio1">Student</label>
                                </div>
                            </div>
                            {data.type === "STARTUP" && <div>
                                <div className="col-12 mb-2">
                                    <label htmlFor="startup_name">Startup Name</label>
                                    <input onChange={handleChange} type="text" name="startup_name" className="registerFormInput mt-2 form-control" placeholder="Enter Startup Name" />
                                </div>
                                <div className="col-12 mb-2">
                                    <label htmlFor="description">Sector</label>
                                    <input onChange={handleChange} type="text" name="sector" className="registerFormInput mt-2 form-control" placeholder="Enter Sector" />
                                </div>
                                <div className="col-12 mb-2">
                                    <label htmlFor="sector">Brief Description</label>
                                    <input onChange={handleChange} type="text" name="description" className="registerFormInput mt-2 form-control" placeholder="Give a brief Description" />
                                </div>
                                <div className="col-12 mb-2">
                                    <label htmlFor="founder_name">Founder's Name</label>
                                    <input onChange={handleChange} type="text" name="founder_name" className="registerFormInput mt-2 form-control" placeholder="Founder" />
                                </div>
                                <div className="col-12 mb-2">
                                    <label htmlFor="founding_team">Founding Team</label>
                                    <input onChange={handleChange} type="text" name="founding_team" className="registerFormInput mt-2 form-control" placeholder="Founding Team Members" />
                                </div>
                                <div className="col-12 mb-2">
                                    <label htmlFor="founding_year">Founding year</label>
                                    <input onChange={handleChange} type="text" name="founding_year" className="registerFormInput mt-2 form-control" placeholder="Year of Foundation" />
                                </div>
                                <div className="col-12 mb-2">
                                    <label htmlFor="stage">Stage</label>
                                    <input onChange={handleChange} type="text" name="stage" className="registerFormInput mt-2 form-control" placeholder="Stage" />
                                </div>
                                <div className="col-12 mb-2">
                                    <label htmlFor="contact_no">Contact Number</label>
                                    <input onChange={handleChange} type="text" name="contact_no" className="registerFormInput mt-2 form-control" placeholder="Contact Number" />
                                </div>
                                <div className="col-12 mb-2">
                                    <label htmlFor="email">Email</label>
                                    <input onChange={handleChange} type="email" name="email" className="registerFormInput mt-2 form-control" placeholder="Email" />
                                </div>
                                <div className="col-12 mb-2">
                                    <label htmlFor="pitch">Pitch Deck</label>
                                    <input onChange={handleChange} type="file" name="pitch" className="registerFormInput mt-2 form-control" placeholder="Expectation" />
                                </div>
                                <div className="col-12 mb-2">
                                    <label htmlFor="expectation">Any Expectation from SInC</label>
                                    <input onChange={handleChange} type="text" name="expectation" className="registerFormInput mt-2 form-control" placeholder="Expectation" />
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="registerFormSubmit">
                                        Register
                                    </button>
                                </div>
                            </div>}

                            {data.type === "INVESTOR" && <div>
                                <div className="col-12 mb-2">
                                    <label htmlFor="investor_name">Investor Name</label>
                                    <input onChange={handleChange} type="text" name="investor_name" className="registerFormInput mt-2 form-control" placeholder="Investor Name" />
                                </div>
                                <div className="col-12 mb-2">
                                    <label htmlFor="description">Sector</label>
                                    <input onChange={handleChange} type="text" name="sector" className="registerFormInput mt-2 form-control" placeholder="Enter Sector" />
                                </div>
                                <div className="col-12 mb-2">
                                    <label htmlFor="poc">POC</label>
                                    <input onChange={handleChange} type="text" name="poc" className="registerFormInput mt-2 form-control" placeholder="Point of Contact" />
                                </div>
                                <div className="col-12 mb-2">
                                    <label htmlFor="contact_no">Contact Number</label>
                                    <input onChange={handleChange} type="text" name="contact_no" className="registerFormInput mt-2 form-control" placeholder="Contact Number" />
                                </div>
                                <div className="col-12 mb-2">
                                    <label htmlFor="email">Email</label>
                                    <input onChange={handleChange} type="email" name="email" className="registerFormInput mt-2 form-control" placeholder="Email" />
                                </div>
                                <div className="col-12 mb-2">
                                    <label htmlFor="brochure">Brochure</label>
                                    <input onChange={handleChange} type="file" name="brochure" className="mt-2 form-control" placeholder="Brochure" />
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="registerFormSubmit">
                                        Register
                                    </button>
                                </div>

                            </div>
                            }

                            {data.type === "STUDENT" && <div>
                                <div className="col-12 mb-2">
                                    <label htmlFor="student_name">Student Name</label>
                                    <input onChange={handleChange} type="text" name="student_name" className="registerFormInput mt-2 form-control" placeholder="Student's Name" />
                                </div>
                                <div className="col-12 mb-2">
                                    <label htmlFor="role">Role</label>
                                    <input onChange={handleChange} type="text" name="role" className="registerFormInput mt-2 form-control" placeholder="Enter Sector" />
                                </div>
                                <div className="col-12 mb-2">
                                    <label htmlFor="sector">Sector</label>
                                    <input onChange={handleChange} type="text" name="sector" className="registerFormInput mt-2 form-control" placeholder="Enter Sector" />
                                </div>
                                <div className="col-12 mb-2">
                                    <label htmlFor="resume">Resume</label>
                                    <input onChange={handleChange} type="file" name="resume" className="mt-2 form-control" />
                                </div>
                                <div className="col-12 mb-2">
                                    <label htmlFor="cover_letter">Cover Letter</label>
                                    <input onChange={handleChange} type="file" name="cover_letter" className="mt-2 form-control" />
                                </div>
                                <div className="col-12 mb-2">
                                    <label htmlFor="contact_no">Contact Number</label>
                                    <input onChange={handleChange} type="text" name="contact_no" className="registerFormInput mt-2 form-control" placeholder="Contact Number" />
                                </div>
                                <div className="col-12 mb-2">
                                    <label htmlFor="email">Email</label>
                                    <input onChange={handleChange} type="email" name="email" className="registerFormInput mt-2 form-control" placeholder="Email" />
                                </div>
                                <div className="col-12 mb-2">
                                    <label htmlFor="expectation">Any Expectation from SInC</label>
                                    <input onChange={handleChange} type="text" name="expectation" className="registerFormInput mt-2 form-control" placeholder="Expectation" />
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="registerFormSubmit">
                                        Register
                                    </button>
                                </div>
                            </div>}
                        </form>
                    </div>
                </div>
            </div >
        </div >
    );
}

import { useState } from "react";
import "./form.css";
import il from "./register-illustration.svg";



export default function Form() {
    const [data, setData] = useState({ "type": null });
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
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
                        <div className="row g-3">
                            <div className="d-flex">
                                <div class="form-check mx-1">
                                    <input class="form-check-input" type="radio" name="type" id="radio1" value="STARTUP" onChange={handleChange} />
                                    <label class="form-check-label" for="radio1">Startup</label>
                                </div>
                                <div class="form-check mx-1">
                                    <input class="form-check-input" type="radio" name="type" id="radio2" value="INVESTOR" onChange={handleChange} />
                                    <label class="form-check-label" for="radio1">Investor</label>
                                </div>
                                <div class="form-check mx-1">
                                    <input class="form-check-input" type="radio" name="type" id="radio3" value="STUDENT" onChange={handleChange} />
                                    <label class="form-check-label" for="radio1">Student</label>
                                </div>
                            </div>
                            {data.type === "STARTUP" && <form action="https://docs.google.com/forms/d/e/1FAIpQLSd5R3-t-bIwx10q16-KKfqnD7ly42f_XS-YdTKQcCcXqhPDQg/formResponse">
                                <div className="col-12 mb-2">
                                    <label htmlFor="entry.535314717">Startup Name</label>
                                    <input type="text" name="entry.535314717" className="registerFormInput mt-2 form-control" placeholder="Enter Startup Name" />
                                </div>
                                <div className="col-12 mb-2">
                                    <label htmlFor="entry.1090363457">Sector</label>
                                    <input type="text" name="entry.1090363457" className="registerFormInput mt-2 form-control" placeholder="Enter Sector" />
                                </div>
                                <div className="col-12 mb-2">
                                    <label htmlFor="entry.38898020">Brief Description</label>
                                    <input type="text" name="entry.38898020" className="registerFormInput mt-2 form-control" placeholder="Give a brief Description" />
                                </div>
                                <div className="col-12 mb-2">
                                    <label htmlFor="entry.1338890337">Founder's Name</label>
                                    <input type="text" name="entry.1338890337" className="registerFormInput mt-2 form-control" placeholder="Founder" />
                                </div>
                                <div className="col-12 mb-2">
                                    <label htmlFor="entry.1663912699">Founding Team</label>
                                    <input type="text" name="entry.1663912699" className="registerFormInput mt-2 form-control" placeholder="Founding Team Members" />
                                </div>
                                <div className="col-12 mb-2">
                                    <label htmlFor="entry.1656134199">Founding year</label>
                                    <input type="text" name="entry.1656134199" className="registerFormInput mt-2 form-control" placeholder="Year of Foundation" />
                                </div>
                                <div className="col-12 mb-2">
                                    <label htmlFor="entry.2075787728">Stage</label>
                                    <input type="text" name="entry.2075787728" className="registerFormInput mt-2 form-control" placeholder="Stage" />
                                </div>
                                <div className="col-12 mb-2">
                                    <label htmlFor="entry.1134524373">Contact Number</label>
                                    <input type="text" name="entry.1134524373" className="registerFormInput mt-2 form-control" placeholder="Contact Number" />
                                </div>
                                <div className="col-12 mb-2">
                                    <label htmlFor="entry.1926536251">Email</label>
                                    <input type="email" name="entry.1926536251" className="registerFormInput mt-2 form-control" placeholder="Email" />
                                </div>
                                <div className="col-12 mb-2">
                                    <label htmlFor="entry.732962329">Pitch Deck</label>
                                    <input type="text" name="entry.732962329" className="registerFormInput mt-2 form-control" placeholder="Upload Google Drive Link and Give Access" />
                                </div>
                                {/* <div className="col-12 mb-2">
                                    <label htmlFor="pitch">Pitch Deck</label>
                                    <input type="file" name="pitch" className=" mt-2 form-control" placeholder="pitch" />
                                </div> */}
                                <div className="col-12 mb-2">
                                    <label htmlFor="entry.1505003120">Any Expectation from SInC?</label>
                                    <input type="text" name="entry.1505003120" className="registerFormInput mt-2 form-control" placeholder="Expectation" />
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="registerFormSubmit" >
                                        Register
                                    </button>
                                </div>
                            </form>}
                            {data.type === "INVESTOR" && <form action="https://docs.google.com/forms/d/e/1FAIpQLSdQdQun4YljCBO3TmwgA2J0FuykC1_d9kcKJ75bbWFH9GpSRQ/formResponse">
                                <div className="col-12 mb-2">
                                    <label htmlFor="entry.1364038763">Investor Name</label>
                                    <input type="text" name="entry.1364038763" className="registerFormInput mt-2 form-control" placeholder="Investor Name" />
                                </div>
                                <div className="col-12 mb-2">
                                    <label htmlFor="entry.2146736065">Sector</label>
                                    <input type="text" name="entry.2146736065" className="registerFormInput mt-2 form-control" placeholder="Enter Sector" />
                                </div>
                                <div className="col-12 mb-2">
                                    <label htmlFor="entry.182720934">Point of Contact</label>
                                    <input type="text" name="entry.182720934" className="registerFormInput mt-2 form-control" placeholder="Point of Contact" />
                                </div>
                                <div className="col-12 mb-2">
                                    <label htmlFor="entry.1922781488">Contact Number</label>
                                    <input type="text" name="entry.1922781488" className="registerFormInput mt-2 form-control" placeholder="Contact Number" />
                                </div>
                                <div className="col-12 mb-2">
                                    <label htmlFor="entry.224186363">Email</label>
                                    <input type="email" name="entry.224186363" className="registerFormInput mt-2 form-control" placeholder="Email" />
                                </div>
                                <div className="col-12 mb-2">
                                    <label htmlFor="entry.1873153509">Brochure</label>
                                    <input type="text" name="entry.1873153509" className="registerFormInput mt-2 form-control" placeholder="Please upload on Google drive and give access." />
                                </div>
                                {/* <div className="col-12 mb-2">
                                    <label htmlFor="brochure">Brochure</label>
                                    <input type="file" name="brochure" className="mt-2 form-control" placeholder="Brochure" />
                                </div> */}
                                <div className="col-12">
                                    <button type="submit" className="registerFormSubmit" >
                                        Register
                                    </button>
                                </div>
                            </form>
                            }
                            {data.type === "STUDENT" && <form action="https://docs.google.com/forms/d/e/1FAIpQLSf_9JqZpGDI1RRpTty_wLYICAs2oZd6owQ6u1OEI6M68HZLCw/formResponse">
                                <div className="col-12 mb-2">
                                    <label htmlFor="entry.695027488">Student Name</label>
                                    <input type="text" name="entry.695027488" className="registerFormInput mt-2 form-control" placeholder="Student's Name" />
                                </div>
                                <div className="col-12 mb-2">
                                    <label htmlFor="entry.272514873">Role</label>
                                    <input type="text" name="entry.272514873" className="registerFormInput mt-2 form-control" placeholder="Enter Sector" />
                                </div>
                                <div className="col-12 mb-2">
                                    <label htmlFor="entry.1518059287">Sector</label>
                                    <input type="text" name="entry.1518059287" className="registerFormInput mt-2 form-control" placeholder="Enter Sector" />
                                </div>
                                {/* <div className="col-12 mb-2">
                                    <label htmlFor="resume">Resume</label>
                                    <input type="file" name="resume" className="mt-2 form-control" />
                                </div> */}
                                <div className="col-12 mb-2">
                                    <label htmlFor="entry.458522211">Resume</label>
                                    <input type="text" name="entry.458522211" className="registerFormInput mt-2 form-control" placeholder="Upload on Google Drive and Give Access" />
                                </div>
                                {/* <div className="col-12 mb-2">
                                    <label htmlFor="cover_letter">Cover Letter</label>
                                    <input type="file" name="cover_letter" className="mt-2 form-control" />
                                </div> */}
                                <div className="col-12 mb-2">
                                    <label htmlFor="entry.1694699977">Cover Letter</label>
                                    <input type="text" name="entry.1694699977" className="registerFormInput mt-2 form-control" placeholder="Upload on Google Drive and Give Access" />
                                </div>
                                <div className="col-12 mb-2">
                                    <label htmlFor="entry.1503772710">Contact Number</label>
                                    <input type="text" name="entry.1503772710" className="registerFormInput mt-2 form-control" placeholder="Contact Number" />
                                </div>
                                <div className="col-12 mb-2">
                                    <label htmlFor="entry.1199482170">Email</label>
                                    <input type="email" name="entry.1199482170" className="registerFormInput mt-2 form-control" placeholder="Email" />
                                </div>
                                <div className="col-12 mb-2">
                                    <label htmlFor="entry.124627410">Any Expectation from SInC</label>
                                    <input type="text" name="entry.124627410" className="registerFormInput mt-2 form-control" placeholder="Expectation" />
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="registerFormSubmit" >
                                        Register
                                    </button>
                                </div>
                            </form>}
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
}

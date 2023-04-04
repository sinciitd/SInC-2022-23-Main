import "./contact.css";
import ul from "./heading-underline-vector.svg";
import il from "./contact-illustration.svg";
import ph from "./phone-icon.svg";
import fl from "./flag.svg";
import $ from "jquery";
import { useState } from "react";

export default function Contact() {
  const [contact, setContact] = useState({
    Name: "",
    NatureOfBusiness: "",
    Address: "",
    Pincode: "",
    Email: "",
    ContactNumber: "",
  });

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  const submitToGoogle = () => {
    var url_submit = [
      `https://docs.google.com/forms/d/e/1FAIpQLSeTWYW8pylvja18fsJC67Mx_emSqnjXYrfmeM5s1svqTUyFVg/formResponse?usp=pp_url`,
      `&entry.25455436=${contact.Name}`,
      `&entry.1670574058=${contact.NatureOfBusiness}`,
      `&entry.1936475182=${contact.Address}`,
      `&entry.1929882320=${contact.Pincode}`,
      `&entry.1983097172=${contact.Email}`,
      `&entry.927495026=${contact.ContactNumber}`,
      `&submit=Submit`,
    ].join("");

    $.ajax({
      url: url_submit,
    });
  };
  return (
    <div className="contact" id="contact">
      <div className="contactHeading">
        CONTACT US
        <img src={ul} className="contactHeadingUl" alt="contact" />
      </div>
      <div className="contactContents">
        <div className="contactForm">
          <form className="row g-3" onSubmit={submitToGoogle}>
            <div className="contactFormField col-12 form-floating">
              <label htmlFor="Name">Your Name</label>
              <input
                type="text"
                name="Name"
                className="contactFormInput form-control"
                onChange={handleChange}
              />
            </div>

            <div className="contactFormField col-12 form-floating">
              <label htmlFor="entry.1670574058">Nature of Business</label>
              <input
                type="text"
                className="contactFormInput form-control"
                name="NatureOfBusiness"
                onChange={handleChange}
              />
            </div>

            <div className="contactFormField col-lg-8 form-floating">
              <label htmlFor="entry.1936475182">Address</label>
              <input
                name="Address"
                type="text"
                className="contactFormInput form-control"
                onChange={handleChange}
              />
            </div>

            <div className="contactFormField col-lg-4 form-floating">
              <label htmlFor="entry.1929882320">PIN code</label>
              <input
                type="text"
                name="Pincode"
                className="contactFormInput form-control"
                onChange={handleChange}
              />
            </div>

            <div className="contactFormField col-12 form-floating">
              <label htmlFor="entry.1983097172">Email</label>
              <input
                type="email"
                name="Email"
                className="contactFormInput form-control"
                onChange={handleChange}
              />
            </div>

            <div className="contactFormField col-12 form-floating">
              <label htmlFor="entry.927495026">Contact number</label>
              <input
                type="tel"
                name="ContactNumber"
                className="contactFormInput form-control"
                onChange={handleChange}
              />
            </div>

            <div className="col-12 mt-4">
              <button
                onClick={submitToGoogle}
                className="contactFormSubmit px-3 py-2 rounded"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className="contactIllustration">
          <img className="contactIllustrationImg" src={il} alt="contact" />
          <div className="contactNums">
            <div className="contactNumsHeading">
              <span className="contactNumsHeadingText">
                For Quick Inquiries
              </span>
              <img src={ph} alt="contact" />
            </div>
            <div className="contactNumsList">
              <div className="contactNumsItem">
                <img src={fl} alt="contact" />
                <span
                  className="contactNumsItemText"
                  style={{ fontWeight: "1000" }}
                >
                  <a href="tel:+916261266224" style={{ color: "white" }}>
                    +91 6261266224
                  </a>{" "}
                  (Madhav)
                </span>
              </div>
              <div className="contactNumsItem">
                <img src={fl} alt="contact" />
                <span className="contactNumsItemText">
                  <a href="tel:+917848957757" style={{ color: "white" }}>
                    +91 7848957757
                  </a>{" "}
                  (Satya)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

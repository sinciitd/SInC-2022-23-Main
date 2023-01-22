import "./contact.css";
import ul from "./heading-underline-vector.svg";
import il from "./contact-illustration.svg";
import ph from "./phone-icon.svg";
import fl from "./flag.svg";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="contactHeading">
        CONTACT US
        <img src={ul} className="contactHeadingUl" alt="contact" />
      </div>
      <div className="contactContents">
        <div className="contactForm">
          <form className="row g-3">
            <div className="contactFormField col-12 form-floating">
              <input
                type="text"
                className="contactFormInput form-control"
                id="cfName"
                placeholder=" "
              />
              <label htmlFor="cfName">Your Name</label>
            </div>
            <div className="contactFormField col-12 form-floating">
              <input
                type="text"
                className="contactFormInput form-control"
                id="cfBusiness"
                placeholder=" "
              />
              <label htmlFor="cfBusiness">Nature of Business</label>
            </div>
            <div className="contactFormField col-lg-8 form-floating">
              <input
                type="text"
                className="contactFormInput form-control"
                id="cfAddress"
                placeholder=" "
              />
              <label htmlFor="cfAddress">Address</label>
            </div>
            <div className="contactFormField col-lg-4 form-floating">
              <input
                type="text"
                className="contactFormInput form-control"
                id="cfPIN"
                placeholder=" "
              />
              <label htmlFor="cfPIN">PIN code</label>
            </div>
            <div className="contactFormField col-12 form-floating">
              <input
                type="email"
                className="contactFormInput form-control"
                id="cfEmail"
                placeholder="name@example.com"
              />
              <label htmlFor="cfEmail">Email</label>
            </div>
            <div className="contactFormField col-12 form-floating">
              <input
                type="tel"
                className="contactFormInput form-control"
                id="cfPhone"
                placeholder="name@example.com"
              />
              <label htmlFor="cfPhone">Contact number</label>
            </div>
            <div className="col-12 mt-4">
              <button
                type="submit"
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
                <span className="contactNumsItemText">+91 8827631820 (Madhav - Overall Coordinator)</span>
              </div>
              <div className="contactNumsItem">
                <img src={fl} alt="contact" />
                <span className="contactNumsItemText">+91 8824840647 (Rahul - Core Team Member)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

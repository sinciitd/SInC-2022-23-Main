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
          <form className="row g-3" action="https://docs.google.com/forms/d/e/1FAIpQLSeTWYW8pylvja18fsJC67Mx_emSqnjXYrfmeM5s1svqTUyFVg/formResponse">
            <div className="contactFormField col-12 form-floating">
              <label htmlFor="entry.25455436">Your Name</label>
              <input
                type="text"
                name="entry.25455436"
                className="contactFormInput form-control"
                id="entry.25455436"
                placeholder=" "
              />
            </div>
            <div className="contactFormField col-12 form-floating">
              <input
                type="text"
                className="contactFormInput form-control"
                id="entry.1670574058"
                name="entry.1670574058"
                placeholder=" "
              />
              <label htmlFor="entry.1670574058">Nature of Business</label>
            </div>

            <div className="contactFormField col-lg-8 form-floating">
              <input
                type="text"
                className="contactFormInput form-control"
                id="entry.1936475182"
                name="entry.1936475182"
                placeholder=""
              />
              <label htmlFor="entry.1936475182">Address</label>
            </div>

            <div className="contactFormField col-lg-4 form-floating">
              <input
                type="text"
                className="contactFormInput form-control"
                id="entry.1929882320"
                placeholder=" "
              />
              <label htmlFor="entry.1929882320">PIN code</label>
            </div>
            <div className="contactFormField col-12 form-floating">
              <input
                type="email"
                className="contactFormInput form-control"
                id="entry.1983097172"
                placeholder="name@example.com"
              />
              <label htmlFor="entry.1983097172">Email</label>
            </div>
            <div className="contactFormField col-12 form-floating">
              <input
                type="tel"
                className="contactFormInput form-control"
                id="entry.927495026"
                placeholder="name@example.com"
              />
              <label htmlFor="entry.927495026">Contact number</label>
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
                <span className="contactNumsItemText">+91 9876543210</span>
              </div>
              <div className="contactNumsItem">
                <img src={fl} alt="contact" />
                <span className="contactNumsItemText">+91 9876543210</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

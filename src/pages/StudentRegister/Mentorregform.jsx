import React from "react";
import "./Startuptregform.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export default function Mentorregform() {
 
    const schema = z.object({
    MentorName: z.string().min(1,{ message: "Name is required" }),
    MentorOccupation: z.string().min(1,{ message: "Occupation is required" }),
    MentorEmail: z.string().email({ message: "Invalid Email" }),
    MentorContactNumber: z.string().min(1,{ message: "Contact Number is required" }),
    MentorLinkedIn: z.string().min(1,{ message: "LinkedIn is required" }),
    MentorPortfolioLink: z.string().min(1,{ message: "Portfolio Link is required" }),
    FieldofExpertise: z.string().min(1,{ message: "Field of Expertise is required" }),
    CreatePassword: z.string().min(8,{ message: "Password is required" }),
    ConfirmPassword: z.string().min(8,{ message: "Confirm Password is required" }),
    });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="student-registerBox">
      <div className="Registration-head mb-1">Registration</div>
      <div className="Registration-subhead mb-4 text-center">
        Begin your journey of innovations with SinC
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="col-12 mb-2">
          <label htmlFor="MentorName">Name*</label>
          <input
            {...register("MentorName")}
            type="text"
            name="MentorName"
            className="registerFormInput mt-2 form-control"
            placeholder="Mentor's Name"
            // onChange={handleChange}
          />
          {errors.MentorName && (
            <p className="text-danger mt-2">* {errors.MentorName.message}</p>
          )}
        </div>

        <div className="col-12 mb-2">
          <label htmlFor="MentorOccupation">Current Occupation*</label>
          <input
            {...register("MentorOccupation")}
            type="text"
            name="MentorOccupation"
            className="registerFormInput mt-2 form-control"
            placeholder="Enter your current occupation"
            // onChange={handleChange}
          />
          {errors.MentorOccupation && (
            <p className="text-danger mt-2">
              * {errors.MentorOccupation.message}
            </p>
          )}
        </div>

        <div className="col-12 mb-2">
          <label htmlFor="MentorEmail">Email*</label>
          <input
            {...register("MentorEmail")}
            type="email"
            name="MentorEmail"
            className="registerFormInput mt-2 form-control"
            placeholder="Email"
            // onChange={handleChange}
          />
          {errors.MentorEmail && (
            <p className="text-danger mt-2">* {errors.MentorEmail.message}</p>
          )}
        </div>

        <div className="col-12 mb-2">
          <label htmlFor="MentorContactNumber">Contact Number*</label>
          <input
            {...register("MentorContactNumber")}
            type="text"
            name="MentorContactNumber"
            className="registerFormInput mt-2 form-control"
            placeholder="Contact Number"
            // onChange={handleChange}
          />
          {errors.MentorContactNumber && (
            <p className="text-danger mt-2">
              * {errors.MentorContactNumber.message}
            </p>
          )}
        </div>

        <div className="col-12 mb-2">
          <label htmlFor="MentorLinkedIn">LinkedIn ID*</label>
          <input
            {...register("MentorLinkedIn")}
            type="text"
            name="MentorLinkedIne"
            className="registerFormInput mt-2 form-control"
            placeholder="Provide your LinkedIn ID"
            // onChange={handleChange}
          />
          {errors.MentorLinkedIn && (
            <p className="text-danger mt-2">
              * {errors.MentorLinkedIn.message}
            </p>
          )}
        </div>
        <div className="col-12 mb-2">
          <label htmlFor="MentorPortfolioLink">Portfolio Link*</label>
          <input
            {...register("MentorPortfolioLink")}
            type="text"
            name="MentorPortfolioLink"
            className="registerFormInput mt-2 form-control"
            placeholder="Provide a link to your portfolio (if any)"
            // onChange={handleChange}
          />
        </div>

        <div className="col-12 mb-2">
          <label htmlFor="FieldofExpertise">Field of Expertise*</label>
          <input
            {...register("FieldofExpertise")}
            type="text"
            name="FieldofExpertise"
            className="registerFormInput mt-2 form-control"
            placeholder="Enter your field of expertise"
            // onChange={handleChange}
          />
          {errors.FieldofExpertise && (
            <p className="text-danger mt-2">
              * {errors.FieldofExpertise.message}
            </p>
          )}
        </div>

        <div className="col-12 mb-2">
          <label htmlFor="CreatePassword">Create Password *</label>
          <input
            {...register("CreatePassword")}
            type="text"
            name="CreatePassword"
            className="registerFormInput mt-2 form-control"
            placeholder="Enter Your Password"
            //onChange={handleChange}
          />
          {errors.CreatePassword && (
            <p className="text-danger mt-2">
              * {errors.CreatePassword.message}
            </p>
          )}
        </div>

        <div className="col-12 mb-2">
          <label htmlFor="ConfirmPassword">Confirm Password *</label>
          <input
            {...register("ConfirmPassword")}
            type="text"
            name="ConfirmPassword"
            className="registerFormInput mt-2 form-control"
            placeholder="Renter the Password to Confirm"
            //onChange={handleChange}
          />
          {errors.ConfirmPassword && (
            <p className="text-danger mt-2">
              * {errors.ConfirmPassword.message}
            </p>
          )}
        </div>

        <div className="col-12">
          <button
            className="registerFormSubmit"
            disabled={isSubmitting}
            type="submit"
          >
            {isSubmitting ? "Registering..." : "Register"}
          </button>
        </div>
      </form>{" "}
    </div>
  );
}

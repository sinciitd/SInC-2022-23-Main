import React from "react";
import "./Startuptregform.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export default function Studenttregform() {
  const schema = z.object({
    StudentName: z.string().min(1,{ message: "Name is required" }),
    College: z.string().min(1,{ message: "College is required" }),
    StudentEmail: z.string().email({ message: "Invalid Email" }),
    StudentContactNumber: z.string().min(1,{ message: "Contact Number is required" }),
    StudentDegree: z.string().min(1,{ message: "Degree is required" }),
    StudentYear: z.string().min(1,{ message: "Year is required" }),
    StudentStream: z.string().min(1,{ message: "Stream is required" }),
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
          <label htmlFor="StudentName">Student Name*</label>
          <input
          {...register("StudentName")}
            type="text"
            name="StudentName"
            className="registerFormInput mt-2 form-control"
            placeholder="Student's Name"
           // onChange={handleChange}
          />
          {
            errors.StudentName && (
              <p className="text-danger mt-2">* {errors.StudentName.message}</p>
            )
          }
        </div>

        <div className="col-12 mb-2">
          <label htmlFor="College">College*</label>
          <input
          {...register("College")}
            type="text"
            name="College"
            className="registerFormInput mt-2 form-control"
            placeholder="Enter College Name"
           // onChange={handleChange}
          />
          {
            errors.College && (
              <p className="text-danger mt-2">* {errors.College.message}</p>
            )
          }
        </div>

        <div className="col-12 mb-2">
          <label htmlFor="StudentEmail">Email*</label>
          <input
          {...register("StudentEmail")}
            type="email"
            name="StudentEmail"
            className="registerFormInput mt-2 form-control"
            placeholder="Email"
           // onChange={handleChange}
          />
          {
            errors.StudentEmail && (
              <p className="text-danger mt-2">* {errors.StudentEmail.message}</p>
            )
          }
        </div>

        <div className="col-12 mb-2">
          <label htmlFor="StudentContactNumber">Contact Number*</label>
          <input
          {...register("StudentContactNumber")}
            type="text"
            name="StudentContactNumber"
            className="registerFormInput mt-2 form-control"
            placeholder="Contact Number"
           // onChange={handleChange}
          />
          {
            errors.StudentContactNumber && (
              <p className="text-danger mt-2">* {errors.StudentContactNumber.message}</p>
            )
          }
        </div>

        <div className="col-12 mb-2">
          <label htmlFor="Degree">Degree*</label>
          <input
          {...register("StudentDegree")}
            type="text"
            name="StudentDegree"
            className="registerFormInput mt-2 form-control"
            placeholder="Degree Name (B.Tech, M.Tech, etc.)" 
           // onChange={handleChange}
          />
          {
            errors.StudentDegree && (
              <p className="text-danger mt-2">* {errors.StudentDegree.message}</p>
            )
          }
        </div>
        <div className="col-12 mb-2">
          <label htmlFor="StudentYear">Year of Student*</label>
          <input
          {...register("StudentYear")}
            type="text"
            name="StudentYear"
            className="registerFormInput mt-2 form-control"
            placeholder="Enter Sector"
           // onChange={handleChange}
          />
          {
            errors.StudentYear && (
              <p className="text-danger mt-2">* {errors.StudentYear.message}</p>
            )
          }
        </div>

        <div className="col-12 mb-2">
          <label htmlFor="StudentStream">Stream / Branch*</label>
          <input
          {...register("StudentStream")}
            type="text"
            name="StudentStream"
            className="registerFormInput mt-2 form-control"
            placeholder="Enter Sector"
           // onChange={handleChange}
          />
          {
            errors.StudentStream && (
              <p className="text-danger mt-2">* {errors.StudentStream.message}</p>
            )
          }
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
            <p className="text-danger mt-2">* {errors.CreatePassword.message}</p>
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
            <p className="text-danger mt-2">* {errors.ConfirmPassword.message}</p>
          )}
        </div>

        <div className="col-12">
          <button
            className="registerFormSubmit"
            disabled={isSubmitting} type="submit"
          >
             {isSubmitting ? "Registering..." : "Register"}
          </button>
        </div>
      </form>{" "}
    </div>
  );
}

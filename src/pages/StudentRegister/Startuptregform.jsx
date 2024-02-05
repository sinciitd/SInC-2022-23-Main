import React from "react";
import "./Startuptregform.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export default function Startuptregform() {
  const schema = z.object({
    StartupName: z.string().min(1, { message: "Startup Name cannot be empty" }),
    StartupSector: z.string().min(1, { message: "Sector cannot be empty" }),
    StartupDescription: z
      .string()
      .min(1, { message: "Description cannot be empty" }),
    StartupFounder: z
      .string()
      .min(1, { message: "Founder's Name cannot be empty" }),
    StartupTeam: z.string(),
    StartupEmail: z.string().email({ message: "Invalid email format" }),
    StartupContactNumber: z
      .string()
      .min(1, { message: "Contact Number cannot be empty" }),
    StartupStage: z
      .string()
      .min(1, { message: "Startup Stage cannot be empty" }),
    StartupPitchDeck: z.string(),
    PastAchievements: z.string(),
    CreatePassword: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" }),
    ConfirmPassword: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" }),
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
          <label htmlFor="StartupName">Startup Name *</label>
          <input
            {...register("StartupName")}
            type="text"
            name="StartupName"
            className="registerFormInput mt-2 form-control"
            placeholder="Enter Startup Name"
            //onChange={handleChange}
          />
          {errors.StartupName && (
            <p className="text-danger mt-2">* {errors.StartupName.message}</p>
          )}
        </div>

        <div className="col-12 mb-2">
          <label htmlFor="StartupSector">Sector *</label>
          <input
            {...register("StartupSector")}
            type="text"
            name="StartupSector"
            className="registerFormInput mt-2 form-control"
            placeholder="Enter Sector"
            //onChange={handleChange}
          />
          {errors.StartupSector && (
            <p className="text-danger mt-2">* {errors.StartupSector.message}</p>
          )}
        </div>

        <div className="col-12 mb-2">
          <label htmlFor="StartupDescription">Brief Description *</label>
          <input
            {...register("StartupDescription")}
            type="text"
            name="StartupDescription"
            className="registerFormInput mt-2 form-control"
            placeholder="Give a brief Description"
            //onChange={handleChange}
          />
          {errors.StartupDescription && (
            <p className="text-danger mt-2">
              * {errors.StartupDescription.message}
            </p>
          )}
        </div>

        <div className="col-12 mb-2">
          <label htmlFor="StartupFounder">Founder's Name *</label>
          <input
            {...register("StartupFounder")}
            type="text"
            name="StartupFounder"
            className="registerFormInput mt-2 form-control"
            placeholder="Founder"
            //onChange={handleChange}
          />
          {errors.StartupFounder && (
            <p className="text-danger mt-2">
              * {errors.StartupFounder.message}
            </p>
          )}
        </div>

        <div className="col-12 mb-2">
          <label htmlFor="StartupTeam">Founding Team</label>
          <input
            {...register("StartupTeam")}
            type="text"
            name="StartupTeam"
            className="registerFormInput mt-2 form-control"
            placeholder="Founding Team Members"
            //onChange={handleChange}
          />
          {errors.StartupTeam && (
            <p className="text-danger mt-2">* {errors.StartupTeam.message}</p>
          )}
        </div>

        <div className="col-12 mb-2">
          <label htmlFor="FoundingYear">Founder's Email *</label>
          <input
            {...register("StartupEmail")}
            type="email"
            name="StartupEmail"
            className="registerFormInput mt-2 form-control"
            placeholder="Enter Founder's Email ID"
            //onChange={handleChange}
          />
          {errors.StartupEmail && (
            <p className="text-danger mt-2">* {errors.StartupEmail.message}</p>
          )}
        </div>

        <div className="col-12 mb-2">
          <label htmlFor="StartupContactNumber">
            Founder's Contact Number *
          </label>
          <input
            {...register("StartupContactNumber")}
            type="text"
            name="StartupContactNumber"
            className="registerFormInput mt-2 form-control"
            placeholder="Enter Founder's Contact Number"
            //onChange={handleChange}
          />
          {errors.StartupContactNumber && (
            <p className="text-danger mt-2">
              * {errors.StartupContactNumber.message}
            </p>
          )}
        </div>

        <div className="col-12 mb-2">
          <label htmlFor="StartupStage">Startup Stage *</label>
          <input
            {...register("StartupStage")}
            type="text"
            name="StartupStage"
            className="registerFormInput mt-2 form-control"
            placeholder="ideation stage, growth stage etc."
            //onChange={handleChange}
          />
          {errors.StartupStage && (
            <p className="text-danger mt-2">* {errors.StartupStage.message}</p>
          )}
        </div>

        <div className="col-12 mb-2">
          <label htmlFor="StartupPitchDeck">Pitch Deck</label>
          <input
            {...register("StartupPitchDeck")}
            type="text"
            name="StartupPitchDeck"
            className="registerFormInput mt-2 form-control"
            placeholder="Upload Google Drive Link and Give Access"
            //onChange={handleChange}
          />
          <p style={{ textAlign: "right" }}>* Attach Pdf Here</p>
          {errors.StartupPitchDeck && (
            <p className="text-danger mt-2">
              * {errors.StartupPitchDeck.message}
            </p>
          )}
        </div>

        <div className="col-12 mb-2">
          <label htmlFor="PastAchievements">Past Achievements *</label>
          <input
            {...register("PastAchievements")}
            type="text"
            name="PastAchievements"
            className="registerFormInput mt-2 form-control"
            placeholder="Enter Past Achievements if any"
            //onChange={handleChange}
          />
          {errors.PastAchievements && (
            <p className="text-danger mt-2">
              * {errors.PastAchievements.message}
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

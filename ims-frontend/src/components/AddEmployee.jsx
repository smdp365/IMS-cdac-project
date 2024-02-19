import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import styles from "../css/AddEmployee.module.css";

export default function AddEmployee() {
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitFun = async (data) => {
    try {
      console.log("data is ", data);
      await axios.post("http://localhost:8080/employee", data);
      navigate("/employee");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className={`${styles.container}`}>
      <div className={`row`}>
        <div
          className={`col-md-6 offset-md-3 border rounded p-4 mt-2 shadow ${styles.empForm}`}
        >
          <h2 className="text-center m-3">Register Employee</h2>
          <hr />
          <form onSubmit={handleSubmit(onSubmitFun)}>
            <div className={`mb-3`}>
              <label htmlFor="firstName" className="form-label"></label>
              <input
                type="text"
                className={`form-control ${styles.empFormField} ${
                  errors.firstName ? "is-invalid" : ""
                }`}
                placeholder="Enter first name"
                {...register("firstName", {
                  required: "First name is required",
                  pattern: {
                    value: /^[A-Za-z]+$/,
                    message: "Invalid characters. Only letters are allowed.",
                  },
                })}
              />
              {errors.firstName && (
                <div className="invalid-feedback">
                  {errors.firstName.message}
                </div>
              )}
            </div>

            <div className={`mb-3 `}>
              <label htmlFor="lastName" className="form-label"></label>
              <input
                type="text"
                className={`form-control ${styles.empFormField} ${
                  errors.lastName ? "is-invalid" : ""
                }`}
                placeholder="Enter last name"
                {...register("lastName", {
                  required: "Last name is required",
                  pattern: {
                    value: /^[A-Za-z]+$/,
                    message: "Invalid characters. Only letters are allowed.",
                  },
                })}
              />
              {errors.lastName && (
                <div className="invalid-feedback">
                  {errors.lastName.message}
                </div>
              )}
            </div>

            <div className={`mb-3 `}>
              <label htmlFor="email" className="form-label"></label>
              <input
                type="text"
                className={`form-control ${styles.empFormField} ${
                  errors.email ? "is-invalid" : ""
                }`}
                placeholder="Enter email address"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email.",
                  },
                })}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email.message}</div>
              )}
            </div>

            <div className={`mb-3 `}>
              <label htmlFor="mobNo" className="form-label"></label>
              <input
                type="text"
                className={`form-control ${styles.empFormField} ${
                  errors.mobNo ? "is-invalid" : ""
                }`}
                placeholder="Enter mobile number"
                {...register("mobNo", {
                  required: "Mobile number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message:
                      "Invalid mobile number. It should be a 10-digit number.",
                  },
                })}
              />
              {errors.mobNo && (
                <div className="invalid-feedback">{errors.mobNo.message}</div>
              )}
            </div>

            <button
              type="submit"
              className={`btn ${styles.Btn}`}
              style={{ marginRight: "40px" }}
              to="/employee"
            >
              &#10004;
            </button>
            <Link className={`btn m-2 ${styles.Btn}`} to="/employee">
              &#10006;
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

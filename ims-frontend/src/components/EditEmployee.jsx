import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import styles from "../css/EditEmployee.module.css";

export default function EditEmployee() {
    let navigate = useNavigate();
    const { id } = useParams();
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();

    const [employee, setEmployee] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobNo: "",
    });

    useEffect(() => {
        loadEmployee();
    }, []);

    const onInputChange = (evt) => {
        setEmployee({ ...employee, [evt.target.name]: evt.target.value });
    };

    const onSubmit = async (data) => {
        try {
            await axios.put(`http://localhost:8080/employee/${id}`, data);
            navigate("/employee");
            alert("Employee details has been updated....")
        } catch (error) {
            console.error("Error updating employee:", error);
        }
    };

    const loadEmployee = async () => {
        const result = await axios.get(`http://localhost:8080/employee/${id}`);
        setEmployee(result.data);

        // Set form values after loading employee data
        setValue("firstName", result.data.firstName);
        setValue("lastName", result.data.lastName);
        setValue("email", result.data.email);
        setValue("mobNo", result.data.mobNo);
    };

    return (
        <div className={`${styles.container}`}>
            <div className="row">
                <div
                    className={`col-md-6 offset-md-3 border rounded p-4 mt-2 shadow ${styles.empForm}`}
                >
                    <h2 className="text-center m-3">Edit Employee</h2>
                    <hr />
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                            <label
                                htmlFor="firstName"
                                className="form-label"
                            ></label>
                            <input
                                type="text"
                                className={`form-control ${
                                    styles.empFormField
                                } ${errors.firstName ? "is-invalid" : ""}`}
                                placeholder="Enter your first name"
                                name="firstName"
                                {...register("firstName", {
                                    required: "First name is required",
                                    pattern: {
                                        value: /^[A-Za-z ]+$/,
                                        message:
                                            "Invalid characters. Only letters are allowed.",
                                    },
                                })}
                                onChange={(evt) => onInputChange(evt)}
                            />
                            {errors.firstName && (
                                <div className="invalid-feedback">
                                    {errors.firstName.message}
                                </div>
                            )}
                        </div>

                        <div className="mb-3">
                            <label
                                htmlFor="lastName"
                                className="form-label"
                            ></label>
                            <input
                                type="text"
                                className={`form-control ${
                                    styles.empFormField
                                } ${errors.lastName ? "is-invalid" : ""}`}
                                placeholder="Enter your last name"
                                name="lastName"
                                {...register("lastName", {
                                    required: "Last name is required",
                                    pattern: {
                                        value: /^[A-Za-z ]+$/,
                                        message:
                                            "Invalid characters. Only letters are allowed.",
                                    },
                                })}
                                onChange={(evt) => onInputChange(evt)}
                            />
                            {errors.lastName && (
                                <div className="invalid-feedback">
                                    {errors.lastName.message}
                                </div>
                            )}
                        </div>

                        <div className="mb-3">
                            <label
                                htmlFor="email"
                                className="form-label"
                            ></label>
                            <input
                                type="text"
                                className={`form-control ${
                                    styles.empFormField
                                } ${errors.email ? "is-invalid" : ""}`}
                                placeholder="Enter your email address"
                                name="email"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                        message: "Invalid email.",
                                    },
                                })}
                                onChange={(evt) => onInputChange(evt)}
                            />
                            {errors.email && (
                                <div className="invalid-feedback">
                                    {errors.email.message}
                                </div>
                            )}
                        </div>

                        <div className="mb-3">
                            <label
                                htmlFor="mobNo"
                                className="form-label"
                            ></label>
                            <input
                                type="text"
                                className={`form-control ${
                                    styles.empFormField
                                } ${errors.mobNo ? "is-invalid" : ""}`}
                                placeholder="Enter your mobile number"
                                name="mobNo"
                                {...register("mobNo", {
                                    required: "Mobile number is required",
                                    pattern: {
                                        value: /^\d{10}$/,
                                        message:
                                            "Invalid mobile number. It should be a 10-digit number.",
                                    },
                                })}
                                onChange={(evt) => onInputChange(evt)}
                            />
                            {errors.mobNo && (
                                <div className="invalid-feedback">
                                    {errors.mobNo.message}
                                </div>
                            )}
                        </div>

                        <button
                            type="submit"
                            className={`btn ${styles.Btn}`}
                            style={{ marginRight: "40px" }}
                        >
                            &#10004;
                        </button>
                        <Link
                            className={`btn m-2 ${styles.Btn}`}
                            to="/employee"
                        >
                            &#10006;
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

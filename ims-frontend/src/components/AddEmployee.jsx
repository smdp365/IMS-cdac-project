import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../css/AddEmployee.module.css";

export default function AddEmployee() {
    let navigate = useNavigate();

    //store employee information inside the state
    const [employee, setEmployee] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobNo: "",
    });

    const { firstName, lastName, email, mobNo } = employee;

    const onInputChange = (evt) => {
        setEmployee({ ...employee, [evt.target.name]: evt.target.value });
    };

    const onSubmitFun = async (evt) => {
        evt.preventDefault();

        await axios.post("http://localhost:8080/employee", employee);
        navigate("/");
    };

    return (
        <div className={`${styles.container}`}>
            <div className={`row`}>
                <div
                    className={`col-md-6 offset-md-3 border rounded p-4 mt-2 shadow ${styles.empForm}`}
                >
                    <h2 className="text-center m-3">Register Employee</h2>
                    <hr />
                    <form onSubmit={(evt) => onSubmitFun(evt)}>
                        <div className={`mb-3`}>
                            <lable
                                htmlFor="firstName"
                                className="form-lable"
                            ></lable>
                            <input
                                type="text"
                                className={`form-control ${styles.empFormField}`}
                                placeholder="Enter first name"
                                name="firstName"
                                value={firstName}
                                onChange={(evt) => onInputChange(evt)}
                            />
                        </div>

                        <div className={`mb-3 `}>
                            <lable
                                htmlFor="lastName"
                                className="form-lable"
                            ></lable>
                            <input
                                type="text"
                                className={`form-control ${styles.empFormField}`}
                                placeholder="Enter last name"
                                name="lastName"
                                value={lastName}
                                onChange={(evt) => onInputChange(evt)}
                            />
                        </div>

                        <div className={`mb-3 `}>
                            <lable
                                htmlFor="email"
                                className="form-lable"
                            ></lable>
                            <input
                                type="text"
                                className={`form-control ${styles.empFormField}`}
                                placeholder="Enter email address"
                                name="email"
                                value={email}
                                onChange={(evt) => onInputChange(evt)}
                            />
                        </div>

                        <div className={`mb-3 `}>
                            <lable
                                htmlFor="mobNo"
                                className="form-lable"
                            ></lable>
                            <input
                                type="text"
                                className={`form-control ${styles.empFormField}`}
                                placeholder="Enter mobile number"
                                name="mobNo"
                                value={mobNo}
                                onChange={(evt) => onInputChange(evt)}
                            />
                        </div>

                        <button
                            type="submit"
                            className={`btn ${styles.Btn}`}
                            style={{ marginRight: "40px" }}
                        >
                            &#10004;
                        </button>
                        <Link className={`btn m-2 ${styles.Btn}`} to="/">
                            &#10006;
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "../css/DetailsEmployee.module.css";

export default function DetailsEmployee() {
    const [employee, setEmployee] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobNo: "",
    });

    const { id } = useParams();

    useEffect(() => {
        loadEmployee();
    }, []);

    const loadEmployee = async () => {
        const result = await axios.get(`http://localhost:8080/employee/${id}`);
        setEmployee(result.data);
    };

    return (
        <div className={`container ${styles.container}`}>
            <div className="row">
                <div
                    className={`col-md-6 offset-md-3 border rounded p-4 mt-2 shadow ${styles.empData}`}
                >
                    <h2 className="text-center m-4">Employee Details</h2>
                    <hr />

                    <b>Details of employee id : {employee.id}</b>

                    <ul className="list-group list-group-flush">
                        <li
                            className={`list-group-item ${styles.empDataItem} `}
                            style={{ marginTop: "20px" }}
                        >
                            <b>First Name: </b>
                            {employee.firstName}
                        </li>

                        <li className={`list-group-item ${styles.empDataItem}`}>
                            <b>Last Name: </b>
                            {employee.lastName}
                        </li>

                        <li className={`list-group-item ${styles.empDataItem}`}>
                            <b>Email: </b>
                            {employee.email}
                        </li>

                        <li className={`list-group-item ${styles.empDataItem}`}>
                            <b>Mobile Number: </b>
                            {employee.mobNo}
                        </li>
                    </ul>
                    <Link className={`btn  my-2 ${styles.backBtn}`} to={"/"}>
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}

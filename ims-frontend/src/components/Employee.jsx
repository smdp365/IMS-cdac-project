import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "../css/Employee.module.css";

export default function Employee() {
    const [employees, setEmployees] = useState([]);
    // const { id } = useParams();

    //everytime the page is loaded this part will be shown on the page
    useEffect(() => {
        loadEmployees();
    }, []);

    const loadEmployees = async () => {
        const result = await axios.get("http://localhost:8080/allemployees");
        setEmployees(result.data);
    };

    const deleteEmployee = async (id) => {
        await axios.delete(`http://localhost:8080/employee/${id}`);
        loadEmployees();
    };

    return (
        <div className={`container ${styles.mainContainer}`}>
            <div className="py-4">
                <div className="table-responsive">
                    <table className="table table-primary shadow">
                        <thead>
                            <tr>
                                <th
                                    className={`${styles.tableHeading}`}
                                    scope="col"
                                >
                                    S.No.
                                </th>
                                <th
                                    className={`${styles.tableHeading}`}
                                    scope="col"
                                >
                                    ID
                                </th>
                                <th
                                    className={`${styles.tableHeading}`}
                                    scope="col"
                                >
                                    First Name
                                </th>
                                <th
                                    className={`${styles.tableHeading}`}
                                    scope="col"
                                >
                                    Last Name
                                </th>
                                <th
                                    className={`${styles.tableHeading}`}
                                    scope="col"
                                >
                                    Email
                                </th>
                                <th
                                    className={` ${styles.tableHeading}`}
                                    scope="col"
                                >
                                    Mobile no.
                                </th>
                                <th
                                    className={` ${styles.tableHeading}`}
                                    scope="col"
                                >
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map((employee, index) => (
                                <tr key={employee.id}>
                                    <th
                                        scope="row"
                                        key={index}
                                        className={`${styles.tableRow}`}
                                    >
                                        {index + 1}
                                    </th>
                                    <td
                                        className={`${styles.tableRow}`}
                                        key={employee.id}
                                    >
                                        {employee.id}
                                    </td>
                                    <td className={`${styles.tableRow}`}>
                                        {employee.firstName}
                                    </td>
                                    <td className={`${styles.tableRow}`}>
                                        {employee.lastName}
                                    </td>
                                    <td className={`${styles.tableRow}`}>
                                        {employee.email}
                                    </td>
                                    <td className={`${styles.tableRow}`}>
                                        {employee.mobNo}
                                    </td>
                                    <td className={`${styles.tableRow}`}>
                                        <Link
                                            className={`btn mx-2 ${styles.Btn}`}
                                            to={`/viewEmployee/${employee.id}`}
                                        >
                                            &#x2630;
                                        </Link>
                                        <Link
                                            className={`btn mx-2 ${styles.Btn}`}
                                            to={`/editEmployee/${employee.id}`}
                                        >
                                            &#9998;
                                        </Link>
                                        <button
                                            className={`btn mx-2 ${styles.Btn}`}
                                            onClick={() =>
                                                deleteEmployee(employee.id)
                                            }
                                        >
                                            &#10006;
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

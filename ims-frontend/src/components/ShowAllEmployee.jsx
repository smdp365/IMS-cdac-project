import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function ShowAllEmployee() {
    const [employees, setEmployees] = useState([]);
    const { id } = useParams();

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
        <div className="container">
            <div className="py-4">
                <div className="table-responsive">
                    <table className="table table-success shadow">
                        <thead>
                            <tr>
                                <th scope="col">S.No.</th>
                                <th scope="col">ID</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Mobile no.</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map((employee, index) => (
                                <tr>
                                    <th scope="row" key={index}>
                                        {index + 1}
                                    </th>
                                    <td>{employee.id}</td>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.email}</td>
                                    <td>{employee.mobNo}</td>
                                    <td>
                                        <Link
                                            className="btn btn-success mx-2"
                                            to={`/viewEmployee/${employee.id}`}
                                        >
                                            Detail
                                        </Link>
                                        <Link
                                            className="btn btn-outline-primary mx-2"
                                            to={`/editEmployee/${employee.id}`}
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            className="btn btn-danger mx-2"
                                            onClick={() =>
                                                deleteEmployee(employee.id)
                                            }
                                        >
                                            Delete
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

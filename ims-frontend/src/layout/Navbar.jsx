import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/Navbar.module.css";

export default function Navbar() {
    return (
        <div>
            <nav
                className={`navbar navbar-expand-lg shadow ${styles.navbar}`}
            >
                <div className={`container ${styles.container}`}>
                    <div className={`navbar-brand ${styles.logoContainer}`}>
                        <p className="text-center fs-2">VAAS</p>
                    </div>

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${styles.brand}`}
                                to={"/"}
                            >
                                <h4>Inventory Management System</h4>
                            </Link>
                        </li>
                    </ul>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link
                                    className={`btn btn-outline-light ${styles.addButton}`}
                                    to="/addemployee"
                                >
                                    Add Employee
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className={`btn btn-outline-light ${styles.loginButton}`}
                                    to="/adminlogin"
                                >
                                    Admin Login
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

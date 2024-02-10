import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/Navbar.module.css"; // Import the CSS module

export default function Navbar() {
    return (
        <div>
            <nav
                className={`navbar navbar-expand-sm fixed-top shadow ${styles.navbar}`}
            >
                <div className={`container ${styles.container}`}>
                    {/* Circular Logo */}
                    <div className={styles.logoContainer}>
                        {/* <div className={styles.logo}></div> */}
                        <p className="text-center fs-2">LOGO</p>
                    </div>

                    <Link className={`navbar-brand ${styles.brand}`} to={"/"}>
                        Inventory Management System
                    </Link>
                    <button
                        className="navbar-toggler d-lg-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsibleNavId"
                        aria-controls="collapsibleNavId"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <Link
                        className={`btn btn-outline-light ${styles.addButton}`}
                        to="/addemployee"
                    >
                        Add Employee
                    </Link>
                </div>
            </nav>
        </div>
    );
}

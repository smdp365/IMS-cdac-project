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
                    <div className={styles.logoContainer}>
                        <p className="text-center fs-2">VAAS</p>
                    </div>

                    <Link className={`navbar-brand ${styles.brand}`} to={"/"}>
                        Inventory Management System
                    </Link>

                    <Link
                        className={`btn btn-outline-light ${styles.addButton}`}
                        to="/addemployee"
                    >
                        Add Employee
                    </Link>

                    <Link
                        className={`btn btn-outline-light ${styles.loginButton}`}
                        to="/adminlogin"
                    >
                        Admin Login
                    </Link>
                </div>
            </nav>
        </div>
    );
}

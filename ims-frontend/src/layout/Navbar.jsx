import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../css/Navbar.module.css";
import logo from "../layout/logo.gif";
import { useIsAdmin, useIsLoggedIn } from "../utils/flags";

export default function Navbar() {
    const isLoggedIn = useIsLoggedIn();
    const isAdmin = useIsAdmin();

    const navigate = useNavigate();

    return (
        <div>
            <nav className={`navbar navbar-expand-lg shadow  ${styles.navbar}`}>
                <div className={`container ${styles.container}`}>
                    <div className={`navbar-brand ${styles.logoContainer}`}>
                        <img
                            src={logo}
                            alt="Logo"
                            className={`${styles.logoImage}`}
                        />
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
                            <Link className={`btn ${styles.navBtn}`} to="/">
                                Home
                            </Link>
                            {isLoggedIn && (
                                <li className="nav-item">
                                    {isAdmin && (
                                        <>
                                            <Link
                                                className={`btn ${styles.navBtn}`}
                                                to="/employee"
                                            >
                                                Employee
                                            </Link>
                                            <Link
                                                className={`btn ${styles.navBtn}`}
                                                to="/products"
                                            >
                                                Products
                                            </Link>
                                        </>
                                    )}

                                    <Link
                                        className={`btn ${styles.navBtn}`}
                                        to="/sales"
                                    >
                                        Sales
                                    </Link>
                                </li>
                            )}

                            <Link
                                className={`btn ${styles.navBtn}`}
                                to="/aboutus"
                            >
                                About us
                            </Link>
                            <Link
                                className={`btn ${styles.navBtn}`}
                                to="/contactus"
                            >
                                Contact us
                            </Link>

                            {!isLoggedIn && (
                                <Link
                                    className={`btn ${styles.navBtn}`}
                                    to="/login"
                                >
                                    Login
                                </Link>
                            )}

                            {isLoggedIn && (
                                <button
                                    className={`btn ${styles.navBtn}`}
                                    onClick={() => {
                                        const userConfirmation = window.confirm(
                                            "Are you sure, you want to logout?"
                                        );

                                        if (userConfirmation) {
                                            console.log("Logout clicked");
                                            sessionStorage.setItem(
                                                "isLoggedIn",
                                                "false"
                                            );
                                            sessionStorage.setItem(
                                                "username",
                                                "username"
                                            );
                                            navigate("/");

                                            window.location.reload();
                                        }
                                    }}
                                >
                                    Logout
                                </button>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

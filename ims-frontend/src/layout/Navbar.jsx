import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../css/Navbar.module.css";
import { useEmployeeOptionVisibility } from "../utils/flags";

export default function Navbar() {
  const isEmployeeOptionVisible = useEmployeeOptionVisibility();
  console.log("isEmployeeOptionVisible : ", isEmployeeOptionVisible);
  const navigate = useNavigate();

  return (
    <div>
      <nav className={`navbar navbar-expand-lg shadow  ${styles.navbar}`}>
        <div className={`container ${styles.container}`}>
          <div className={`navbar-brand ${styles.logoContainer}`}>
            <p className="text-center fs-2">VAAS</p>
          </div>

          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className={`nav-link ${styles.brand}`} to={"/"}>
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
              {isEmployeeOptionVisible && (
                <li className="nav-item">
                  {isEmployeeOptionVisible && (
                    <Link className={`btn ${styles.navBtn}`} to="/employee">
                      Employee
                    </Link>
                  )}

                  <Link className={`btn ${styles.navBtn}`} to="/products">
                    Products
                  </Link>

                  <Link className={`btn ${styles.navBtn}`} to="/sales">
                    Sales
                  </Link>
                </li>
              )}

              <Link className={`btn ${styles.navBtn}`} to="/aboutus">
                About us
              </Link>
              <Link className={`btn ${styles.navBtn}`} to="/contactus">
                Contact us
              </Link>

              {!isEmployeeOptionVisible && (
                <Link className={`btn ${styles.navBtn}`} to="/adminlogin">
                  Login
                </Link>
              )}

              {isEmployeeOptionVisible && (
                <button
                  className={`btn ${styles.navBtn}`}
                  onClick={() => {
                    console.log("Logout clicked");
                    localStorage.setItem("isLoggedIn", "false");
                    localStorage.setItem("username", "username");
                    navigate("/");
                    window.location.reload();
                  }}
                >
                  Logout
                </button>
              )}

              {/* <li className="nav-item">
                                <Link
                                    className={`btn btn-outline-light ${styles.loginButton}`}
                                    to="/adminlogin"
                                >
                                    Admin Login
                                </Link>
                            </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

import React, { useState } from "react";
import axios from "axios";
import styles from "../css/AdminLogin.module.css";
import { useNavigate } from "react-router-dom";
import { useUserLogged } from "../utils/flags";

const AdminLogin = () => {
    const [userLogged, setUserLogged] = useUserLogged();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const loginRequest = (username, password) => {
        return axios.post("http://localhost:8080/loginReal", {
            email: username,
            password: password,
        });
    };

    const handleButtonClick = (e) => {
        e.preventDefault();
        console.log("login success ", username, password);

        loginRequest(username, password)
            .then((response) => {
                console.log("Login response:", response.data);

                // Update local storage and state with login status
                localStorage.setItem("isLoggedIn", "true");
                // setUserLogged("true"); // Try updating the state directly here
                localStorage.setItem("username", username);

                console.log("Login successful", userLogged); // This might still show the old value due to closure
                navigate("/");
                window.location.reload();
            })
            .catch((error) => {
                console.error("Error submitting form:", error);
            });
    };

    // Debugging: Check if userLogged is updated after successful login
    console.log("Current userLogged state:", userLogged);

    return (
        <div className={`${styles.container} row`}>
            <div className={`${styles.left} col-sm-12 col-lg-6`}>
                <h2 className={styles.heading}>Inventory Management System</h2>
                <div className={styles.imageDiv}></div>
                <p className={styles.learnText}>
                    Learn how to manage inventory now
                </p>
            </div>
            <div className={`${styles.right} col-sm-12 col-lg-6`}>
                <div className={styles.formContainer}>
                    <h2 className={styles.formHeading}>Admin Login</h2>
                    <form>
                        <input
                            type="text"
                            placeholder="Username"
                            className={styles.inputField}
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className={styles.inputField}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className={styles.forgotPassword}>
                            <a href="#">Forgot Password?</a>
                        </div>
                        <button
                            type="submit"
                            className={styles.loginButton}
                            onClick={handleButtonClick}
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;

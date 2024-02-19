import React, { useState } from "react";
import styles from "../css/EmployeeLogin.module.css";

const EmployeeLogin = () => {
    const [dataToSend, setDataToSend] = useState("");
    const handleOnSubmit = (event) => {
        e.preventDefault();
        console.log(event);
        console.log("admin logged in sucessfully");
    };

    const handleSubmit = () => {
        e.preventDefault();
        handleOnSubmit();
    };

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
                    <h2 className={styles.formHeading}>Employee Login</h2>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <input
                            type="text"
                            placeholder="Username"
                            className={styles.inputField}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className={styles.inputField}
                            // Add validation for password using pattern attribute
                            // pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                            // title="Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character."
                        />
                        <div className={styles.forgotPassword}>
                            <a href="#">Forgot Password?</a>
                        </div>
                        <button type="submit" className={styles.loginButton}>
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EmployeeLogin;

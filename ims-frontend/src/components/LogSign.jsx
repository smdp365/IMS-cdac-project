import { Link } from "react-router-dom";
import styles from "../css/LogSign.module.css";

export default function LogSign() {
    return (
        <>
            <div className={`${styles.mainContainer}`}>
                <Link className={`btn ${styles.buttons}`} to={"/adminlogin"}>
                    Admin Login
                </Link>
                <Link className={`btn ${styles.buttons}`} to={"/employeelogin"}>
                    Employee Login
                </Link>
            </div>
        </>
    );
}

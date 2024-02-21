import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import styles from "../css/ContactUs.module.css";

export default function ContactUs() {
    return (
        <>
            <div>
                <div
                    className={`${styles.firstContainer}`}
                >
                    <h1 className={`${styles.pageHeading}`}>CONTACT US</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-1 "></div>
                <div
                    className="col-5 "
                    style={{
                        backgroundColor: "#fff",
                        padding: "50px",
                        margin: "40px 10px 40px -10px",
                        border: "#023e8a 3px solid",
                        borderRadius: "10px",
                    }}
                >
                    <h5
                        style={{
                            color: "#023e8a",
                            textAlign: "left",
                            fontSize: "25px",
                            marginBottom: "40px",
                        }}
                    >
                        LET'S MAKE IT HAPPEN
                    </h5>
                    <h2 style={{ fontSize: "56px", textAlign: "left" }}>
                        Don't Hesitate To <br />
                        Get in Touch.{" "}
                    </h2>
                    <p style={{ textAlign: "left", marginTop: "40px" }}>
                        Our Contact Us page is designed to provide you with a
                        seamless and efficient way to get in touch with us.
                        Whether you have questions about our products, need
                        assistance with an order, or simply want to provide
                        feedback, we're here to help.
                    </p>
                </div>
                <div className="col-1 "></div>
                <div
                    className="col-4"
                    style={{
                        backgroundColor: "#fff",
                        padding: "50px",
                        margin: "40px 10px 40px -10px",
                        border: "#023e8a 3px solid",
                        borderRadius: "10px",
                    }}
                >
                    <FaMapMarkerAlt
                        style={{
                            fontSize: "2rem",
                            marginTop: "40px",
                            marginBottom: "10px",
                            color: "#023e8a",
                        }}
                    />
                    <h5>
                        CDAC, Electronics City 68, Electronics City Bengaluru -
                        561229 Karnataka (India)
                    </h5>
                    <FaPhone
                        style={{
                            fontSize: "2rem",
                            marginTop: "40px",
                            marginBottom: "10px",
                            color: "#023e8a",
                        }}
                    />
                    <h5>+1123-456-7890</h5>
                    <FaEnvelope
                        style={{
                            fontSize: "2rem",
                            marginTop: "40px",
                            marginBottom: "10px",
                            color: "#023e8a",
                        }}
                    />
                    <h5>vaas@gmail.com</h5>
                </div>
            </div>
        </>
    );
}

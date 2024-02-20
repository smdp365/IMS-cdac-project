import React from "react";
import styles from "../css/Footer.module.css";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import {
    FaFacebook,
    FaGoogle,
    FaInstagramSquare,
    FaTwitter,
} from "react-icons/fa";
export default function Footer() {
    return (
        <>
            <div className={` ${styles.firstRow} row`}>
                <div className={`${styles.firstRowCol} col-sm-4`}>
                    <ul style={{ listStyleType: "none", paddingTop: "20px" }}>
                        <li>
                            <a
                                href="http://localhost:5173/"
                                style={{
                                    color: "#fff",
                                    margin: "7px",
                                    fontFamily: "Playfair Display, serif",
                                }}
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="http://localhost:5173/aboutus"
                                style={{
                                    color: "#fff",
                                    margin: "7px",
                                    fontFamily: "Playfair Display, serif",
                                }}
                            >
                                About Us
                            </a>
                        </li>
                        <li>
                            <a
                                href="http://localhost:5173/products"
                                style={{
                                    color: "#fff",
                                    margin: "7px",
                                    fontFamily: "Playfair Display, serif",
                                }}
                            >
                                Our Products
                            </a>
                        </li>
                        <li>
                            <a
                                href="http://localhost:5173/contactus"
                                style={{
                                    color: "#fff",
                                    margin: "7px",
                                    fontFamily: "Playfair Display, serif",
                                }}
                            >
                                Contact Us
                            </a>
                        </li>
                        <li>
                            <a
                                href="http://localhost:5173/adminlogin"
                                style={{
                                    color: "#fff",
                                    margin: "7px",
                                    fontFamily: "Playfair Display, serif",
                                }}
                            >
                                Login
                            </a>
                        </li>
                    </ul>
                </div>

                <div className={`${styles.firstRowCol} col-sm-4`}>
                    <h2 className={`${styles.logo} `}>
                        Inventory Management System
                    </h2>

                    <div className="socialMedia">
                        <a href="https://shorturl.at/eGJLW">
                            <FaGoogle
                                style={{
                                    color: "#fff",
                                    margin: "15px",
                                    fontSize: "24px",
                                }}
                            />
                        </a>
                        <a href="https://shorturl.at/dBHY3">
                            <FaFacebook
                                style={{
                                    color: "#fff",

                                    margin: "15px",
                                    fontSize: "24px",
                                }}
                            />
                        </a>
                        <a href="https://shorturl.at/HIT69">
                            <FaInstagramSquare
                                style={{
                                    color: "#fff",
                                    margin: "15px",
                                    fontSize: "24px",
                                }}
                            />
                        </a>
                        <a href="https://twitter.com/i/flow/login">
                            <FaTwitter
                                style={{
                                    color: "#fff",
                                    margin: "15px",
                                    fontSize: "24px",
                                }}
                            />
                        </a>
                    </div>
                </div>
                <div className={`${styles.firstRowCol} col-sm-4`}>
                    <ul style={{ listStyleType: "none", paddingTop: "20px" }}>
                        <li>
                            <FaMapMarkerAlt
                                style={{ fontSize: "20px", color: "#fff" }}
                            />
                            <h6
                                style={{
                                    color: "#fff",
                                    fontFamily: "Playfair Display, serif",
                                    // width: "300px",
                                }}
                            >
                                CDAC, Electronics City 68, Electronics City
                                Bengaluru - 561229 Karnataka (India)
                            </h6>
                        </li>
                        <li>
                            <a href="https://accounts.google.com/v3/signin/identifier?ifkv=ATuJsjx6cBg_bxgAERJQbfWuqJ0OpV_ndO0_nxq1fBGSjFCUgMT94uE_CWqt0dpOemyoJ4aTYJxl&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S1292868188%3A1708386938146146&theme=glif">
                                <FaEnvelope
                                    style={{ fontSize: "20px", color: "#fff" }}
                                />
                            </a>
                            <h6
                                style={{
                                    color: "#fff",
                                    fontFamily: "Playfair Display, serif",
                                }}
                            >
                                vaas@gmail.com
                            </h6>
                        </li>
                        <li>
                            <FaPhone
                                style={{ fontSize: "20px", color: "#fff" }}
                            />
                            <h6
                                style={{
                                    color: "#fff",
                                    fontFamily: "Playfair Display, serif",
                                }}
                            >
                                +1123-456-7890
                            </h6>
                        </li>
                    </ul>
                </div>

                <div className={`${styles.fourthRow} row`}>
                    {/* <div className={`${styles.fourthRowCol} col-sm-12`}></div> */}
                    <p className={`${styles.copyright}`}>
                        Group Of VAAS © 2024
                    </p>
                </div>
            </div>
        </>
    );
}

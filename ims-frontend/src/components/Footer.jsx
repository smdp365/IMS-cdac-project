import React from "react";
import styles from "../css/Footer.module.css";
import {
  FaFacebook,
  FaGoogle,
  FaInstagramSquare,
  FaTwitter,
} from "react-icons/fa";
export default function Footer() {
  return (
    <div>
      <div className={`${styles.firstRow} row`}>
        <div className={`${styles.firstRowCol} col-sm-4`}>
          <ul style={{ listStyleType: "none", paddingTop: "20px" }}>
            <li>
              <a
                href="http://localhost:5173/"
                style={{
                  color: "#fff",
                  margin: "7px",
                  fontWeight: "500",
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
                  fontWeight: "500",
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
                  fontWeight: "500",
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
                  fontWeight: "500",
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
                  fontWeight: "500",
                }}
              >
                Login
              </a>
            </li>
          </ul>
        </div>

        <div className={`${styles.firstRowCol} col-sm-4`}>
          <h2 className={`${styles.logo} `}>Inventary Management System</h2>

          <div className="socialMedia">
            <a href="#">
              <FaGoogle
                style={{
                  color: "#fff",
                  margin: "15px",
                  fontSize: "24px",
                }}
              />
            </a>
            <a href="#">
              <FaFacebook
                style={{
                  color: "#fff",

                  margin: "15px",
                  fontSize: "24px",
                }}
              />
            </a>
            <a href="#">
              <FaInstagramSquare
                style={{
                  color: "#fff",
                  margin: "15px",
                  fontSize: "24px",
                }}
              />
            </a>
            <a href="#">
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
              <h6
                style={{
                  color: "#fff",
                }}
              >
                SLN Showroom,near velankani gate,Electronic City,Bangalore
              </h6>
            </li>
            <li>
              <h6
                style={{
                  color: "#fff",
                }}
              >
                ankitathorat501@gmail.com
              </h6>
            </li>
            <li>
              <h6
                style={{
                  color: "#fff",
                }}
              >
                988171880
              </h6>
            </li>
          </ul>
        </div>

        <div className={`${styles.fourthRow} row`}>
          <div className={`${styles.fourthRowCol} col-sm-12`}></div>
          <p className={`${styles.copyright}`}>Group Of VAAS © 2018</p>
        </div>
      </div>
    </div>
  );
}

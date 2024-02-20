import React, { useState } from "react";
import styles from "../css/Home.module.css";
import axios from "axios";
import { FaAward } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import product1 from "../assests/product1.jpg";
import product2 from "../assests/product2.jpg";
import product3 from "../assests/product3.jpg";
import product4 from "../assests/product4.jpg";

// logo maker ---->https://ezgif.com/remove-background/ezgif-1-d605b059ca.gif

export default function Home() {
  const [inquireName, setInquireName] = useState("");
  const [inquireEmail, setInquireEmail] = useState("");
  const [inquireMessage, setInquireMessage] = useState("");
  // const [inquireName, setInquireName] = useState("");

  const handleInquireButtonClick = async (e) => {
    e.preventDefault();
    console.log("inquired");

    try {
      let res = await axios.post("http://localhost:8080/submitInquiry", {
        name: inquireName,
        email: inquireEmail,
        message: inquireMessage,
      });
      console.log(res);
      alert(res.data);
      // navigate("/employee");
    } catch (error) {
      console.error("Error submitting form:", error);
    }

    //To reset the form
    setInquireName("");
    setInquireEmail("");
    setInquireMessage("");
  };

  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={`${styles.container}`}>
      {/* first row */}

      <div className={`${styles.firstRow} row`}>
        <div className={`${styles.firstRowCol} col-sm-12`}>
          <h4>
            Everyone is a buyer, everyone's a potential purchaser and everyone's
            a potential vendor.
          </h4>
          <p className={`${styles.youDemand}`}>- You demand : We supply</p>
        </div>
      </div>

      {/* second row */}

      <div className={`${styles.sliderRow}`}>
        <Slider {...settings}>
          <div className={`${styles.productImage}`}>
            <img src={product1} alt="Product 1" />
            <a href="/" className="text-dark fs-4">Shoes</a>
            {/* <h3>Shoes</h3> */}
          </div>
          <div>
            <img src={product2} alt="Product 2" />
            <a href="/" className="text-dark fs-4">Shoes</a>
          </div>
          <div>
            <img src={product3} alt="Product 3" />
            <a href="/" className="text-dark fs-4">Shoes</a>
          </div>
          <div>
            <img src={product4} alt="Product 4" />
            <a href="/" className="text-dark fs-4">Shoes</a>
          </div>
        </Slider>
      </div>

      {/* third row */}

      <div className={`${styles.fourthRow} row`}>
        <h3 className="text-light">Feedback Form</h3>
        <div className={`${styles.fourthRowCol} col-sm-4`}></div>
        <div className={`${styles.fourthRowColmiddle} col-sm-4`}>
          <div className={`${styles.fourthRowCol} col-sm-4`}></div>
          <form className="inquireform">
            <div className="inquireinput border border-dark mb-3">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder=" Name"
                value={inquireName}
                onChange={(e) => setInquireName(e.target.value)}
              />
            </div>

            <div className="inquireinput border border-dark mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder=" Email"
                value={inquireEmail}
                onChange={(e) => setInquireEmail(e.target.value)}
              />
            </div>

            <div className="inquireinput border border-dark  mb-3">
              <textarea
                className="form-control"
                id="message"
                rows="4"
                placeholder=" Message"
                value={inquireMessage}
                onChange={(e) => setInquireMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button
              onClick={(event) => handleInquireButtonClick(event)}
              type="submit"
              className="btn btn-primary "
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* fourth row */}

      <div className={`${styles.secondRow} row`}>
        <div className={`${styles.secondRowCol} col-sm-12`}>
          <h4 className={`${styles.secondRowColHeading}`}>Why To Choose Us</h4>
          <h3>Four Reasons To People Choosing Us</h3>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "30px",
            }}
          >
            <div className={`${styles.secondRowColCertificate}`}>
              <FaAward
                style={{
                  color: "#0000FF",
                  margin: "15px",
                  fontSize: "40px",
                }}
              />
              <h4 style={{ color: "#A52A2A" }}>Quality Material</h4>
              <p>
                We use only the highest quality materials for our products,
                ensuring durability and customer satisfaction.
              </p>
            </div>
            <div className={`${styles.secondRowColCertificate}`}>
              <MdAccessTime
                style={{
                  color: "#0000FF",
                  margin: "15px",
                  fontSize: "40px",
                }}
              />
              <h4 style={{ color: "#A52A2A" }}>Time Availability</h4>
              <p>
                Our company is fully accredited, ensuring that you can trust the
                quality and reliability of our products and services.
              </p>
            </div>
            <div className={`${styles.secondRowColCertificate}`}>
              <FiPhoneCall
                style={{
                  color: "#0000FF",
                  margin: "15px",
                  fontSize: "40px",
                }}
              />
              <h4 style={{ color: "#A52A2A" }}>Quick Response</h4>
              <p>
                We pride ourselves on our quick response time. Our customer
                support team is here to assist you whenever you need it.
              </p>
            </div>
            <div className={`${styles.secondRowColCertificate}`}>
              <FaRegCircleCheck
                style={{
                  color: "#0000FF",
                  margin: "15px",
                  fontSize: "40px",
                }}
              />
              <h4 style={{ color: "#A52A2A" }}>Accredited</h4>
              <p>
                Our products are always available when you need them. We value
                your time and strive to meet your needs promptly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

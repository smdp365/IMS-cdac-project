import { useState } from "react";
import styles from "../css/Home.module.css";
import axios from "axios";
import { FaAward } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";

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
      {/* <div className={`${styles.secondRow} row`}>
        <div className={`${styles.secondRowCol} col-sm-12`}>
          <h3 className={`${styles.secondRowColHeading}`}>
            Certification & Awards
          </h3>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "30px",
            }}
          >
            <div className={`${styles.secondRowColCertificate}`}></div>
            <div className={`${styles.secondRowColCertificate}`}></div>
            <div className={`${styles.secondRowColCertificate}`}></div>
            <div className={`${styles.secondRowColCertificate}`}></div>
          </div>
        </div>
      </div> */}
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
              <FaAward className={`${styles.icon1}`}/>
              {/* <FaAward 
                                style={{ 
                                       color: "#0000FF", 
                                       margin: "15px",
                                       fontSize: "40px"
                                     }} 
                                     />        */}
              <h4 style={{ color: "#A52A2A" }}>Quality Material</h4>
              <p>
                Lorem ipsum dolor sit This is paraghraph res sit deleniti
                reiciendis atque.
              </p>
            </div>
            <div className={`${styles.secondRowColCertificate}`}>
              <MdAccessTime />
              {/* <MdAccessTime 
                            style={{ 
                                   color: "#0000FF", 
                                   margin: "15px",
                                   fontSize: "40px"
                                 }} 
                                 />        */}
              <h4 style={{ color: "#A52A2A" }}>Time Availability</h4>
              <p>
                Lorem ipsum dolor sit This is paraghraph res sit deleniti
                reiciendis atque.
              </p>
            </div>
            <div className={`${styles.secondRowColCertificate}`}>
              <FiPhoneCall />
              {/* <FiPhoneCall 
                            style={{ 
                                   color: "#0000FF", 
                                   margin: "15px",
                                   fontSize: "40px"
                                 }} 
                                 />        */}
              <h4 style={{ color: "#A52A2A" }}>Quick Response</h4>
              <p>
                Lorem ipsum dolor sit This is paraghraph res sit deleniti
                reiciendis atque.
              </p>
            </div>
            <div className={`${styles.secondRowColCertificate}`}>
              <FaRegCircleCheck />
              {/* <FaRegCircleCheck 
                            style={{ 
                                   color: "#0000FF", 
                                   margin: "15px",
                                   fontSize: "40px"
                                 }} 
                                 />        */}
              <h4 style={{ color: "#A52A2A" }}>Accredited</h4>
              <p>
                Lorem ipsum dolor sit This is paraghraph res sit deleniti
                reiciendis atque.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* third row */}
      <div
        className="row"
        style={{
          backgroundColor: "#023E8A",
          color: "#FFFFFF",
          padding: "2%",
          height: "100px",
        }}
      >
        <h3>Our Products</h3>
      </div>
      <div className={`${styles.thirdRow} row`}>
        <div className={`${styles.thirdRowCol} col-sm-12`}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "20px",
            }}
            className={`${styles.thirdRowCol} col-sm-12`}
          >
            <div className={`${styles.thirdRowColProduct}`}></div>
            <div className={`${styles.thirdRowColProduct}`}></div>
            <div className={`${styles.thirdRowColProduct}`}></div>
            <div className={`${styles.thirdRowColProduct}`}></div>
          </div>
        </div>
      </div>
      {/* fourth row */}
      <div
        className="row"
        style={{
          backgroundColor: "#023E8A",
          color: "#FFFFFF",
          padding: "3%",
          height: "100px",
        }}
      >
        <h3>Inquire Us</h3>
      </div>
      <div className={`${styles.fourthRow} row`}>
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
    </div>
  );
}

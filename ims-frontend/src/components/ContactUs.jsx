// import styles from "../css/ContactUs.module.css";

// export default function ContactUs() {
//     return (
//         <>
//             <div className={`${styles.head}`}>
//                 <h1>This is the Contact Us page</h1>
//             </div>
//         </>
//     );
// }

import bgimg from "../assests/img-tab.png";
import "../css/ContactUs.css";

export default function ContactUs() {
    return (
        <>
            <div>
                <img src={bgimg} alt="Image" className="bg-image" />
                <div className="text-on-image">
                    <h1 className="contacthero mb-5">CONTACT US</h1>
                </div>
            </div>
            <div className="row center-row m-5 ">
                <div className="contactleft  col-md-5">
                    <h2 class="contacthead pb-4">WE'RE READY, LET'S TALK.</h2>
                    <form>
                        <div className="form-group pt-3 pb-3">
                            <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                            />
                        </div>
                        <div className="form-group pt-3 pb-3">
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Password"
                            />
                        </div>
                        <div className="form-group pt-3 pb-3">
                            <textarea
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                rows="4"
                                placeholder="Message"
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Send Message
                        </button>
                    </form>
                </div>

                <div className="contactright  col-md-5">
                    <h2 className="contactinfo pb-5">CONTACT INFO</h2>
                    <h4 className="contactadd ">Address</h4>
                    <p>SLN Showroom , doddhathogur, Electronic City</p>
                    <h4 className="contactemail ">Email Us</h4>
                    <p>ankitathorat501@gmail.com</p>
                    <h4 className="contactcall ">Call Us</h4>
                    <p>9881714880</p>
                </div>
            </div>
        </>
    );
}

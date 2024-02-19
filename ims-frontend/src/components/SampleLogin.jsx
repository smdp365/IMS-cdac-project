import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; 

const NewLogin = () => {
    const [dataToSend, setDataToSend] = useState("");

    const handleButtonClick = async (e) => {
        e.preventDefault();
        console.log("login success ", dataToSend);
        try {
            let res = await axios.post("http://localhost:8080/login", {
                email: dataToSend,
            });
            console.log(res);
            alert(res.data);
            // navigate("/employee");
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <form>
            {/* Your form inputs go here */}

            <input
                type="text"
                placeholder="enter email"
                value={dataToSend}
                onChange={(e) => setDataToSend(e.target.value)}
            />
            {/* <input type="text" /> */}

            <button
                onClick={(event) => handleButtonClick(event)}
                type="submit"
                className="btn btn-outline btn-border"
            >
                Login
            </button>
        </form>
    );
};

export default NewLogin;

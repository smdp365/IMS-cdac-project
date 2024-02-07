import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Adduser() {
  let navigate = useNavigate();

  //store user information inside the state
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobNo: "",
  });

  const { firstName, lastName, email, mobNo } = user;

  const onInputChange = (evt) => {
    setUser({ ...user, [evt.target.name]: evt.target.value });
  };

  const onSubmitFun = async (evt) => {
    evt.preventDefault();

    await axios.post("http://localhost:8080/user", user);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>
          <hr />
          <form onSubmit={(evt) => onSubmitFun(evt)}>
            <div className="mb-3">
              <lable htmlFor="firstName" className="form-lable">
                First Name
              </lable>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your first name"
                name="firstName"
                value={firstName}
                onChange={(evt) => onInputChange(evt)}
              />
            </div>

            <div className="mb-3">
              <lable htmlFor="lastName" className="form-lable">
                Last Name
              </lable>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your last name"
                name="lastName"
                value={lastName}
                onChange={(evt) => onInputChange(evt)}
              />
            </div>

            <div className="mb-3">
              <lable htmlFor="email" className="form-lable">
                Email
              </lable>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your email address"
                name="email"
                value={email}
                onChange={(evt) => onInputChange(evt)}
              />
            </div>

            <div className="mb-3">
              <lable htmlFor="mobNo" className="form-lable">
                Mobile Number
              </lable>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your mobile number"
                name="mobNo"
                value={mobNo}
                onChange={(evt) => onInputChange(evt)}
              />
            </div>

            <button type="submit" className="btn btn-outline-success">
              Submit
            </button>
            <Link className="btn btn-outline-danger m-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

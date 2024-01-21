import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-success">
                <div className="container">
                    <Link className="navbar-brand" to={"/"}>
                        Spring React CRUD Application
                    </Link>
                    <button
                        className="navbar-toggler d-lg-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsibleNavId"
                        aria-controls="collapsibleNavId"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <Link className="btn btn-outline-light" to="/adduser">
                        Add user
                    </Link>
                </div>
            </nav>
        </div>
    );
}

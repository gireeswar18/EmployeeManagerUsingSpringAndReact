import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">
          Auth App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="ms-auto">
          <Link className="btn btn-primary me-3" to="/login">Login</Link>
          <Link className="btn btn-primary" to="/register">Register</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [user, setUser] = useState({
    userName: "",
    email: "",
    phoneNumber: 0,
    role: "",
    password: "",
  });

  const { userName, email, phoneNumber, role, password } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const onSubmitForm = async (e) => {
    try {
      e.preventDefault();
      await axios.post("http://localhost:8080/user/register", user);
      alert("Registered Successfully!");
      navigate("/login");
    } catch (e) {
      alert("Email already registered! Try to login or use a different email!");
    }
  };

  return (
    <div className="container-fluid mt-3">
      <div className="loginContent border shadow rounded col-md-6 offset-md-3 mt-3 p-5">
        <h2>Register</h2>
        <form className="mt-4" onSubmit={(e) => onSubmitForm(e)}>
          <div class="mb-3">
            <label for="userName" class="form-label">
              Username
            </label>
            <input
              type="text"
              class="form-control"
              id="userName"
              name="userName"
              value={userName}
              onChange={(e) => onInputChange(e)}
            ></input>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
            ></input>
          </div>
          <div class="mb-3">
            <label for="phoneNumber" class="form-label">
              Phone Number
            </label>
            <input
              type="number"
              class="form-control"
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => onInputChange(e)}
            ></input>
          </div>
          <div class="mb-3">
            <label for="role" class="form-label">
              Role
            </label>
            <input
              type="text"
              class="form-control"
              id="role"
              name="role"
              value={role}
              onChange={(e) => onInputChange(e)}
            ></input>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="password"
              name="password"
              value={password}
              onChange={(e) => onInputChange(e)}
            ></input>
          </div>

          <button type="submit" class="btn btn-primary me-3 mt-2">
            Register
          </button>
          <Link className="btn btn-outline-danger mt-2" to="/">
            Cancel
          </Link>
        </form>
      </div>
    </div>
  );
}

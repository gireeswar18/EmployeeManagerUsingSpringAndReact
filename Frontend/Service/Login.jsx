import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();


  const onSubmitForm = async (e) => {
    e.preventDefault();
    try
    {
      const res = await axios.post("http://localhost:8080/user/login", user);
      console.log(res.data);
      alert(`Hi ${res.data.userName}! Login Successful!`);
      navigate("/profile", {state: {id: res.data.id, userName: res.data.userName, email: res.data.email, phoneNumber: res.data.phoneNumber, role: res.data.role}});
    }
    catch(e)
    {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="container-fluid mt-5">
      <div className="loginContent border shadow rounded col-md-6 offset-md-3 mt-3 p-5">
        <h2>Login</h2>
        <form className="mt-4" onSubmit={(e) => onSubmitForm(e)}>
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
            Login
          </button>
          <Link className="btn btn-outline-danger mt-2" to="/">
            Cancel
          </Link>
        </form>
      </div>
    </div>
  );
}

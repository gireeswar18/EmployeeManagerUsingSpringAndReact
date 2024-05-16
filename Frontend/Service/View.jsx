import axios from "axios";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function View() {
  const location = useLocation();
  const navigate = useNavigate();

  const deleteUser = async () => {
    if (window.confirm("Do you want to delete the account?"))
      {
        try {
          const res = await axios.delete(`http://localhost:8080/user/deleteUser/${location.state.id}`);
          console.log(res.data);
          alert("User Deleted Successfully!");
          navigate("/");
        }
        catch (err)
        {
          alert("Error! User Not Deleted!");
        }
      }
  }

  return (
    <div className="container-fluid mt-3">
      <div className="userContent border shadow rounded col-md-6 offset-md-3 mt-3 p-5">
        <h3 className="mb-5">Profile Page</h3>
        <table className="table table-borderless mb-4">
          <tbody>
            <tr>
              <td>Name:</td>
              <td>{location.state.userName}</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>{location.state.email}</td>
            </tr>
            <tr>
              <td>Phone Number:</td>
              <td>{location.state.phoneNumber}</td>
            </tr>
            <tr>
              <td>Role:</td>
              <td>{location.state.role}</td>
            </tr>
          </tbody>
        </table>
		<Link className="btn btn-primary me-3" to={`/edit/${location.state.id}`}>Edit User</Link>
		<button className="btn btn-danger me-3" onClick={deleteUser}>Delete User</button>
		<Link className="btn btn-outline-danger" to="/">Back to Home</Link>
      </div>
    </div>
  );
}

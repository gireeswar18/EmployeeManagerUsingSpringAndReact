import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Admin() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const res = await axios.get("http://localhost:8080/user/getAllUsers");
    setUsers(res.data);
  };


  const deleteUser = async (id) => {
    if (window.confirm("Do you want to delete the account?"))
      {
        try {
          const res = await axios.delete(`http://localhost:8080/user/deleteUser/${id}`);
          console.log(res.data);
          alert("User Deleted Successfully!");
          loadUsers();
        }
        catch (err)
        {
          alert("Error! User Not Deleted!");
        }
      }
  }

  return (
    <div className="container-fluid">
      <h3 className="m-5 text-center">Admin Dashboard</h3>

      {users.map((user, index) => (
        <div className="border shadow rounded col-md-6 offset-md-3 mt-3 p-5">
          <table className="table table-borderless mb-4">
            <tbody>
              <tr>
                <td>Id:</td>
                <td>{user.id}</td>
              </tr>
              <tr>
                <td>Name:</td>
                <td>{user.userName}</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>{user.email}</td>
              </tr>
              <tr>
                <td>Phone Number:</td>
                <td>{user.phoneNumber}</td>
              </tr>
              <tr>
                <td>Role:</td>
                <td>{user.role}</td>
              </tr>
              <tr>
                <td><Link className="btn btn-primary" to={`/editAdmin/${user.id}`}>Edit User</Link></td>
                <td><button className="btn btn-outline-danger" onClick={() => deleteUser(user.id)}>Delete User</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

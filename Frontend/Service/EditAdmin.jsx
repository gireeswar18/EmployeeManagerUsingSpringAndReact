import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'

export default function EditAdmin() {

	const {id} = useParams();
	const [userName, setUserName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState(0);
	const [role, setRole] = useState("");

	useEffect (() => {
		loadDetails()
	}, [])

	const loadDetails = async () => {
		const res = await axios.get(`http://localhost:8080/user/getUserById/${id}`);
		setUserName(res.data.userName);
		setPhoneNumber(res.data.phoneNumber);
		setRole(res.data.role);
	}

	const navigate = useNavigate();

	const onSubmitForm = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.put(`http://localhost:8080/user/editUser/${id}`, {
				userName : userName,
				phoneNumber : phoneNumber,
				role : role
			})
			alert("User Information Updated Successfully");
			navigate("/admin");
		}
		catch (err)
		{
			alert("Update Unsuccessful");
			navigate("/admin");
		}

	}

  return (
	<div className="container-fluid mt-3">
	<div className="loginContent border shadow rounded col-md-6 offset-md-3 mt-3 p-5">
	  <h2>Update User</h2>
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
			onChange={(e) => {setUserName(e.target.value)}}
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
			onChange={(e) => setPhoneNumber(e.target.value)}
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
			onChange={(e) => setRole(e.target.value)}
		  ></input>
		</div>


		<button type="submit" class="btn btn-primary me-3 mt-2">
		  Update
		</button>
		<Link className="btn btn-outline-danger mt-2" to="/">
		  Cancel
		</Link>
	  </form>
	</div>
  </div>
  )
}

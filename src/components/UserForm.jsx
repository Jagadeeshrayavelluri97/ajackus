import React, { useState } from 'react';
import '../styles/App.css';

const UserForm = ({ addUser }) => {
  const [user, setUser] = useState({
    id: "",
    firstname: "",
    lastname: "",
    email: "",
    department: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.firstname && user.lastname && user.email && user.department) {
      addUser({ ...user, id: Date.now().toString() });
      setUser({ id: "", firstname: "", lastname: "", email: "", department: "" });
    } else {
      alert("All fields are required.");
    }
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="firstname">First Name</label>
        <input
          type="text"
          name="firstname"
          placeholder="First Name"
          value={user.firstname}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastname">Last Name</label>
        <input
          type="text"
          name="lastname"
          placeholder="Last Name"
          value={user.lastname}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="department">Department</label>
        <input
          type="text"
          name="department"
          placeholder="Department"
          value={user.department}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <button type="submit" className="add-user-button">Add User</button>
    </form>
  );
};

export default UserForm;
import React, { useState } from 'react';
import '../styles/App.css';

const UserEditModal = ({ user, updateUser, closeModal }) => {
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      editedUser.firstname &&
      editedUser.lastname &&
      editedUser.email &&
      editedUser.department
    ) {
      updateUser(editedUser);
      closeModal();
    } else {
      alert('All fields are required.');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Edit User</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={editedUser.firstname}
              onChange={handleChange}
              placeholder="First Name"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={editedUser.lastname}
              onChange={handleChange}
              placeholder="Last Name"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={editedUser.email}
              onChange={handleChange}
              placeholder="Email"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="department">Department</label>
            <input
              type="text"
              id="department"
              name="department"
              value={editedUser.department}
              onChange={handleChange}
              placeholder="Department"
              className="form-control"
            />
          </div>
          <div className="modal-actions">
            <button type="submit" className="save-button">
              Save
            </button>
            <button type="button" className="cancel-button" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserEditModal;
import React from "react";
import "../styles/App.css";

const UserList = ({ users, deleteUser, startEditUser }) => {
  return (
    <div className="user-list">
      <div className="user-list-header">
        <span>ID</span>
        <span>First Name</span>
        <span>Last Name</span>
        <span>Email</span>
        <span>Department</span>
        <span>Actions</span>
      </div>
      {users.length > 0 ? (
        users.map((user) => (
          <div className="user-list-item" key={user.id}>
            <span>{user.id}</span>
            <span>{user.firstname}</span>
            <span>{user.lastname}</span>
            <span>{user.email}</span>
            <span>{user.department}</span>
            <div>
              <button className="edit-button" onClick={() => startEditUser(user)}>Edit</button>
              <button className="delete-button" onClick={() => deleteUser(user.id)}>Delete</button>
            </div>
          </div>
        ))
      ) : (
        <div className="no-users">No users found.</div>
      )}
    </div>
  );
};

export default UserList;

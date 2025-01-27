import React, { useState, useEffect } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import UserEditModal from "./components/UserEditModal";
import "./styles/App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  const addUser = (user) => {
    const updatedUsers = [...users, user];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const updateUser = (updatedUser) => {
    const updatedUsers = users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const deleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const startEditUser = (user) => {
    setEditingUser(user);
  };

  const closeEditModal = () => {
    setEditingUser(null);
  };

  return (
    <div className="app-container">
      <h1>User Management System</h1>
      <UserForm addUser={addUser} />
      <UserList users={users} deleteUser={deleteUser} startEditUser={startEditUser} />
      {editingUser && (
        <UserEditModal user={editingUser} updateUser={updateUser} closeModal={closeEditModal} />
      )}
    </div>
  );
};

export default App;
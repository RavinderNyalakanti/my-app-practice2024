import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

const CreditCard = () => {
  const [users, setUsers] = useState([]);
  // State to manage form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  // State to track whether we're editing an existing user
  const [isEditing, setIsEditing] = useState(false);
  // State to track the user being edited
  const [currentUserId, setCurrentUserId] = useState(null);

  // Create or Update user
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!name || !email) {
      alert("Please fill in both fields");
      return;
    }

    if (isEditing) {
      // Update the existing user
      const updatedUsers = users.map((user) =>
        user.id === currentUserId ? { id: currentUserId, name, email } : user
      );
      setUsers(updatedUsers);
      setIsEditing(false);
      setCurrentUserId(null);
    } else {
      // Create a new user
      const newUser = {
        id: Date.now(),
        name,
        email,
      };
      setUsers([...users, newUser]);
    }

    // Clear the form
    setName('');
    setEmail('');
  };

  // Edit user
  const handleEdit = (user) => {
    setIsEditing(true);
    setName(user.name);
    setEmail(user.email);
    setCurrentUserId(user.id);
  };

  // Delete user
  const handleDelete = (id) => {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  };

  return (
    <div style={{ margin: '20px' }}>
      <h2>{isEditing ? 'Edit User' : 'Add User'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">{isEditing ? 'Update' : 'Add'} User</button>
      </form>

      <h2>Users List</h2>
      {users.length === 0 ? (
        <p>No users available.</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.email})
              <button onClick={() => handleEdit(user)}>Edit</button>
              <button onClick={() => handleDelete(user.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CreditCard;

// src/Login.js

import React, { useState } from 'react';

// The Login component renders the login form and receives the 'onLogin' function as a prop (sent from App.js as 'handleLogin')
const Login = ({ onLogin }) => {

  // STATE
  // 'username' and 'password' are local state variables initialized to empty strings
  // These states hold the input values of the login form
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // FUNCTIONS
  // handleSubmit is called when the form is submitted
  const handleSubmit = (e) => {
    // Prevents the default form submission behavior, which would cause a page reload
    // This is important to have a smooth, single-page application experience
    e.preventDefault();
    // Calls the 'onLogin' function passed as a prop with the entered username and password
    // This allows the parent component (App) to have control over what happens after login
    onLogin(username, password);
  };

  // RENDERING
  // The component renders a login form with fields for username and password
  return (
    <div>
      <h2>Login</h2>
      {/* The form calls handleSubmit when submitted */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username: </label>
          {/* The input field for username. The value is bound to the 'username' state */}
          {/* When the input changes, setUsername updates the 'username' state */}
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password: </label>
          {/* The input field for password. The value is bound to the 'password' state */}
          {/* When the input changes, setPassword updates the 'password' state */}
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        {/* The button submits the form, triggering handleSubmit */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

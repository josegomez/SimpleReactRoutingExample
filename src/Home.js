// Importing Navigate for conditional redirection
import React from 'react';
import { Navigate } from 'react-router-dom';

// The Home component is responsible for displaying a welcome message and a logout button
const Home = ({ user, setUser }) => {

  // The handleLogout function is called when the logout button is clicked
  const handleLogout = () => {
    // The setUser function is used to set the 'user' state to null
    // This effectively logs the user out by clearing the user information
    setUser(null);
  };

  // Conditional redirection checks if the 'user' prop is null or undefined
  // If 'user' is falsy, it means no user is logged in so we redirect to login
  if (!user) {
    // The Navigate component is used to redirect the app to the root path ("/")
    // This sends the user back to the login page
    return <Navigate to="/" />;
  }

  // If 'user' is truthy, it means a user is logged in and the component renders the UI
  return (
    <div>
      {/* Displaying a welcome message using the 'username' property of the 'user' prop */}
      <h2>Welcome, {user.username}!</h2>
      {/* The logout button calls the handleLogout function when clicked */}
      <button type="button" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;

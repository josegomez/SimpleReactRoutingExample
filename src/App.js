

import './App.css';
import React, { useState } from 'react';
// Importing BrowserRouter, Route, Navigate, and Routes from react-router-dom 
// this will allow us to use the router in our app and navigate between pages
import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';

// The App component serves as the root component and renders the UI
function App() {

  // STATE MANAGEMENT
  // The 'user' state is used to store information about the logged-in user
  // Initially, it is set to null, indicating that no user is logged in
  const [user, setUser] = useState(null);

  // FUNCTION: handleLogin
  // This function is called when the login button is clicked in the Login component
  // It sets the 'user' state with the provided username and password
  const handleLogin = (username, password) => {
    setUser({ username, password });
  };

  // RENDERING
  // The App component renders a set of routes wrapped in a Router
  return (
    <div className="App">
      <Router>
        {/* The Routes component defines different paths in the application */}
        <Routes>
          {/* Route for the root path '/' */}
          <Route path="/" element={
            // Conditional rendering based on the 'user' state
            // If 'user' is not null, the user is logged in and is navigated to '/home'
            // If 'user' is null, the Login component is rendered, prompting the user to log in
            user ? <Navigate to="/home" /> : <Login onLogin={handleLogin} />
          } />
          {/* Route for the '/home' path */}
          <Route path="/home" element={
            // The Home component is rendered when the path is '/home'
            // The 'user' and 'setUser' props are passed to allow Home to access and modify the 'user' state
            <Home user={user} setUser={setUser} />
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

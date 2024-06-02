import React, { useState } from 'react';
import LoginForm from './Components/LogIn'
import Logout from './Components/LogOut'

const App = () => {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user , setUser] = useState('')

  const handleLogin = (username, password) => {
    // Simple authentication logic (replace with real authentication)
    if (username === 'user' && password === 'password') {
      // setIsAuthenticated(true);
      setUser(username)
    } else {
      alert('Invalid credentials');
    }
  };

  const handleLogout = () => {
    // setIsAuthenticated(false);
    setUser('')
  };

  return (
    <div>
      {/* isAuthenticated */}
      <h1>{ user == 'user' ? 'Welcome!' : 'Please Login'}</h1>
      {/* isAuthenticated */}
      { user == 'user' ? (
        <Logout onLogout={handleLogout} />
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;

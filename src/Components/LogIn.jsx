import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
  // console.log(onLogin);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
















// import React, { useState } from 'react'

// function LogIn() {

//   const [ username , setUserName ]= useState('')
//   const handleSubmit =( ) =>{

//   }

//   return (
//     <div>
//       <input type="text" placeholder='Enter username' onChange={(e) => setUserName(e.target.value)} /><br /><br />
//       <input type="password" placeholder='Enter your password' onChange={(e) => setUserName(e.target.value)} /><br /><br />
//       <button onClick={handleSubmit}>Log In</button>
//     </div>
//   )
// }

// export default LogIn
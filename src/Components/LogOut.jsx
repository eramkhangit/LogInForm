import React from 'react';

const Logout = ({ onLogout }) => {
  // console.log(onLogout);
  return (
    <button onClick={onLogout}>Logout</button>
  );
};

export default Logout;

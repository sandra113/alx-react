// src/Login/Login.js

import React from 'react';
import './Login.css';

function Login() {
  return (
    <React.Fragment>
      <p>Login to access the full dashboard</p>
      <div className="login-form">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <br /><br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <br /><br />
        <button type="submit">OK</button>
      </div>
    </React.Fragment>
  );
}

export default Login;

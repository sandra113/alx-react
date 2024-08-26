import React from 'react';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';
import holbertonLogo from './holberton-logo.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={holbertonLogo} className="App-logo" alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </header>

      <hr className="separator" />

      <div className="App-body">
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
      </div>
      
      <hr className="separator" />

      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(false)}</p>
      </footer>
    </div>
  );
}

export default App;

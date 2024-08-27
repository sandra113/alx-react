
import React from 'react';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Login from './Login/Login';

function App() {
  return (
    <React.Fragment>
      <Header />
      <hr className="separator" />
      <div className="App-body">
        <Login />
      </div>
      <hr className="separator" />
      <Footer />
    </React.Fragment>
  );
}

export default App;

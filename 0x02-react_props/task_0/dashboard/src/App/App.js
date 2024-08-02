import React from 'react';
import './App.css';
import Header from './Header/Header';
import Login from './Login/Login';
import Footer from './Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <div className="App-body">
        <Login />
      </div>
      <Footer />
    </>
  );
}

export default App;

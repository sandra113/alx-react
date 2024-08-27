
import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from "../Notifications/Notifications";
import CourseList from '../CourseList/CourseList';

function App({isLoggedIn}) {
  return (
    <React.Fragment>
       <Notifications />
      <Header />
      <div className="App-body">
      {isLoggedIn ? <CourseList /> : <Login />}
      </div>
      <hr className="separator" />
      <Footer />
    </React.Fragment>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false,
};

export default App;

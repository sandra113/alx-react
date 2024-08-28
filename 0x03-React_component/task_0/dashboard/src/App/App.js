import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      listCourses: [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 },
      ],
      listNotifications: [
        { id: 1, html: { __html: 'New course available' }, type: 'default', value: 'New course available' },
        { id: 2, html: { __html: 'New resume available' }, type: 'urgent', value: 'New resume available' },
        { id: 3, html: { __html: 'New internship opportunity' }, type: 'urgent', value: 'New internship opportunity' },
      ],
    };
  }

  render() {
    const { isLoggedIn, listCourses, listNotifications } = this.state;
    return (
      <div className="App">
        <Header />
        <Notifications listNotifications={listNotifications} />
        {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false,
};

export default App;

import React from 'react';
import { shallow } from 'enzyme';
import App from './App'; // Adjust the path according to your project structure
import Notifications from './Notifications/Notifications';
import Header from './Header/Header';
import Login from './Login/Login';
import Footer from './Footer/Footer';

describe('App component', () => {

  test('App renders without crashing', () => {
    render(<App />);
    // This test will pass if the component renders without throwing an error
  });
  
});

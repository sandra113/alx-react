import React from 'react';
import { shallow } from 'enzyme';
import App from './App'; // Adjust the path according to your project structure
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

describe('App component', () => {
  it('contains the Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notifications).length).toBe(1);
  });

  it('contains the Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header).length).toBe(1);
  });

  it('contains the Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Login).length).toBe(1);
  });

  it('contains the Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer).length).toBe(1);
  });

  test('CourseList is not displayed when isLoggedIn is false', () => {
    render(<App isLoggedIn={false} />);
    expect(screen.queryByText('Available courses')).toBeNull();
  });
  
  describe('when isLoggedIn is true', () => {
    test('Login component is not included', () => {
      render(<App isLoggedIn={true} />);
      expect(screen.queryByText('Login')).toBeNull();
    });
  
    test('CourseList component is included', () => {
      render(<App isLoggedIn={true} />);
      expect(screen.getByText('Available courses')).toBeInTheDocument();
    });

});

});
















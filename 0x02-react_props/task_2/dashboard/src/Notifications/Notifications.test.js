import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications component', () => {
  it('renders NotificationItem components', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(NotificationItem).length).toBeGreaterThan(0);
  });

  it('renders correct html in the first NotificationItem', () => {
    const wrapper = shallow(<Notifications />);
    const firstNotificationItem = wrapper.find(NotificationItem).first();
    expect(firstNotificationItem.prop('html')).toBe(null); // Assuming the first item has no html
    expect(firstNotificationItem.prop('value')).toBe('Notification 1'); // Adjust as needed
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import Notifications from './Notifications';

test('Notifications renders without crashing', () => {
  render(<Notifications />);
  // This test will pass if the component renders without throwing an error
});

test('Notifications renders three list items', () => {
  render(<Notifications />);
  const listItems = screen.getAllByRole('listitem');
  expect(listItems).toHaveLength(3);
});

test('Notifications renders the text Here is the list of notifications', () => {
  render(<Notifications />);
  const text = screen.getByText(/Here is the list of notifications/i);
  expect(text).toBeInTheDocument();
});

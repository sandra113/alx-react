import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('App renders without crashing', () => {
  render(<App />);
  // This test will pass if the component renders without throwing an error
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('App renders without crashing', () => {
  render(<App />);
  // This test will pass if the component renders without throwing an error
});

test('App renders a div with the class App-header', () => {
  render(<App />);
  const headerDiv = screen.getByClassName('App-header');
  expect(headerDiv).toBeInTheDocument();
});

test('App renders a div with the class App-body', () => {
  render(<App />);
  const bodyDiv = screen.getByClassName('App-body');
  expect(bodyDiv).toBeInTheDocument();
});

test('App renders a div with the class App-footer', () => {
  render(<App />);
  const footerDiv = screen.getByClassName('App-footer');
  expect(footerDiv).toBeInTheDocument();
});


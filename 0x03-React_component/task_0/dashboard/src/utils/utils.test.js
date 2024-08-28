// utils.test.js
import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('Utility functions', () => {
  // Test getFullYear function
  test('getFullYear returns the current year', () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toBe(currentYear);
  });

  // Test getFooterCopy function
  test('getFooterCopy returns correct string based on isIndex argument', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
  });

  // Test getLatestNotification function
  test('getLatestNotification returns the correct notification string', () => {
    const expectedNotification = '<strong>Urgent requirement</strong> - complete by EOD';
    expect(getLatestNotification()).toBe(expectedNotification);
  });
});

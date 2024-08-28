import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer'; // Adjust the path according to your project structure

describe('Footer component', () => {
  it('renders without crashing', () => {
    shallow(<Footer />);
  });

  it('renders the text "Copyright"', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toContain('Copyright');
  });
});

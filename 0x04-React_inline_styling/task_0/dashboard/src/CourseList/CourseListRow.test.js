import React from "react";
import CourseListRow from "./CourseListRow";
import { shallow } from "enzyme";

describe("Course List Row component test", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<CourseListRow textFirstCell="test" />);
    expect(wrapper.exists()).toBe(true);
  });

  it("should render one cell with colspan = 2 when textSecondCell is null and apply the correct header style", () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" textSecondCell={null} />);
    
    // Check the number of children
    expect(wrapper.find("tr").children()).toHaveLength(1);

    // Check the HTML of the first child
    expect(wrapper.find("tr").childAt(0).html()).toEqual('<th colSpan="2">test</th>');

    // Check the style of the header row
    expect(wrapper.find('tr').prop('style')).toHaveProperty('backgroundColor', '#deb5b545');
  });

  it("should render two cells when textSecondCell is not null and apply the correct row style", () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="test" textSecondCell="test" />);

    // Check the number of children
    expect(wrapper.find("tr").children()).toHaveLength(2);

    // Check the HTML of the first child
    expect(wrapper.find("tr").childAt(0).html()).toEqual("<td>test</td>");
    
    // Check the HTML of the second child
    expect(wrapper.find("tr").childAt(1).html()).toEqual("<td>test</td>");

    // Check the style of the non-header row
    expect(wrapper.find('tr').prop('style')).toHaveProperty('backgroundColor', '#f5f5f5ab');
  });
});

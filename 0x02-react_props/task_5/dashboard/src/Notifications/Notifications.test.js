import React from "react";
import { shallow } from "enzyme";
import { getLatestNotification } from "../utils/utils";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";

describe("Notification tests", () => {
  it("renders Notification component without crashing", () => {
    const component = shallow(<Notifications />);

    expect(component).toBeDefined();
  });

  it("renders correct list items", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find("ul").children()).toHaveLength(3);
    expect(wrapper.find("ul").childAt(0).html()).toEqual('<li data-notification-type="default">New course available</li>');
    expect(wrapper.find("ul").childAt(1).html()).toEqual('<li data-notification-type="urgent">New resume available</li>');
    expect(wrapper.find("ul").childAt(2).html()).toEqual(`<li data-urgent=\"true\">${getLatestNotification()}</li>`);
  });

  it("renders an unordered list", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find("ul").children()).toHaveLength(3);
    wrapper.find("ul").forEach((node) => {
      expect(node.equals(<NotificationItem />));
    });
  });

  it("renders correct text", () => {
    const component = shallow(<Notifications />);

    expect(component.find("p").prop("children")).toBe("Here is the list of notifications");
  });

  test('renders notifications correctly', () => {
    const listNotifications = [
      { id: 1, html: { __html: 'New course available' }, type: 'default', value: 'New course available' },
      { id: 2, html: { __html: 'New resume available' }, type: 'urgent', value: 'New resume available' },
    ];
    render(<Notifications listNotifications={listNotifications} displayDrawer />);
    expect(screen.getByText('New course available')).toBeInTheDocument();
    expect(screen.getByText('New resume available')).toBeInTheDocument();
  });

  test('does not display the menu item when displayDrawer is false', () => {
    render(<Notifications listNotifications={[]} displayDrawer={false} />);
    expect(screen.queryByText('Your notifications')).toBeNull();
  });

  test('displays the menu item when displayDrawer is true', () => {
    render(<Notifications listNotifications={[]} displayDrawer />);
    expect(screen.getByText('Your notifications')).toBeInTheDocument();
  });

  test('displays the Notifications box when displayDrawer is true', () => {
    render(<Notifications listNotifications={[]} displayDrawer />);
    expect(screen.getByRole('list')).toBeInTheDocument();
  });
});

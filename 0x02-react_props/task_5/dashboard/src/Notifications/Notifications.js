import React from 'react';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape'; // Import the shape
import NotificationItem from './NotificationItem';
import './Notifications.css';

function Notifications({ listNotifications, displayDrawer }) {
  return (
    <div className="Notifications">
      {displayDrawer && (
        <div>
          <div className="menuItem">Your notifications</div>
          <div className="Notifications-box">
            {listNotifications.length === 0 ? (
              <p>No new notification for now</p>
            ) : (
              <ul>
                {listNotifications.map(notification => (
                  <NotificationItem
                    key={notification.id}
                    type={notification.type}
                    html={notification.html}
                    value={notification.value}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

Notifications.propTypes = {
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  listNotifications: [],
  displayDrawer: false,
};

export default Notifications;

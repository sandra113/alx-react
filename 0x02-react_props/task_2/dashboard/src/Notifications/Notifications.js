import React from 'react';
import NotificationItem from './NotificationItem';

const Notifications = () => {
  const notifications = [
    { id: 1, type: 'default', value: 'Notification 1', html: null },
    { id: 2, type: 'urgent', value: 'Notification 2', html: { __html: '<b>Urgent</b>' } }
    // Add more notifications as needed
  ];

  return (
    <ul>
      {notifications.map(notification => (
        <NotificationItem
          key={notification.id}
          type={notification.type}
          html={notification.html}
          value={notification.value}
        />
      ))}
    </ul>
  );
};

export default Notifications;

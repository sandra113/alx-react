import React from 'react';
import { getLatestNotification } from '../utils';
import closeIcon from '../assets/close-icon.png';
import './Notifications.css';
import NotificationItem from "./NotificationItem";

/**
 * Notifications component
 * @returns {JSX.Element} The Notification component.
 */

export default function Notification() {
    const handleClick = () => {
        console.log('Close button has been clicked');
      };

    return (
        <div className="Notifications" style={{ position: 'relative', padding: '10px'}}>
          <div className="Notifications-box">
            <button 
        aria-label="Close"
        onClick={handleClick}
        style={{ position: 'absolute', top: 10, right: 10, background: 'transparent', border: 'none', cursor: 'pointer' }}
      >
        <img src={closeIcon} alt="close icon" style={{ width: '15px', height: '15px' }} />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem type="urgent" html={getLatestNotification()} />
      </ul>
        </div>
        </div>
    );
    
}
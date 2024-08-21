import React from 'react';
import { getLatestNotification } from './utils';
import closeIcon from './close-icon.png';
import './Notifications.css';

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
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
      </ul>
        </div>
        </div>
    );
    
}
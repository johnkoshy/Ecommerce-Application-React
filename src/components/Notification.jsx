import React from 'react';

const Notification = () => {
  // Placeholder for notifications; replace with actual data/logic if available
  const notifications = []; // Example: empty notifications

  return (
    <div className="notification-panel">
      <h2 className="text-xl font-semibold mb-4">Notifications</h2>
      {notifications.length === 0 ? (
        <p className="text-gray-500">No notifications</p>
      ) : (
        <ul>
          {notifications.map((notif, index) => (
            <li key={index} className="mb-2">
              {notif.message}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notification;
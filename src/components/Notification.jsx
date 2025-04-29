import React from 'react';

const Notification = () => {
  const notifications = []; // Placeholder; replace with actual data

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
        Notifications
      </h2>
      {notifications.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">
          No notifications
        </p>
      ) : (
        <ul className="space-y-2">
          {notifications.map((notif, index) => (
            <li key={index} className="text-gray-800 dark:text-gray-200">
              {notif.message}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notification;
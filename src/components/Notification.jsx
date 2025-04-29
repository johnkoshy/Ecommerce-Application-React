import React, { useEffect } from 'react';
import { useStateContext } from '../contexts/ContextProvider';

const Notification = () => {
  const { setHasNewNotifications } = useStateContext();
  const notifications = []; // Placeholder; replace with actual data

  useEffect(() => {
    setHasNewNotifications(notifications.length > 0);
  }, [notifications, setHasNewNotifications]);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold text-indigo-900 dark:text-teal-200">
        Notifications
      </h2>
      {notifications.length === 0 ? (
        <p className="text-coral-600 dark:text-lavender-400">
          No notifications
        </p>
      ) : (
        <ul className="space-y-2">
          {notifications.map((notif, index) => (
            <li key={index} className="text-indigo-900 dark:text-teal-200">
              {notif.message}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notification;
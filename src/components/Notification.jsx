import React, { useEffect } from 'react';
import { useStateContext } from '../contexts/ContextProvider';

// Notification component displays a list of notifications
const Notification = () => {
  // Access setHasNewNotifications from context to update notification status
  const { setHasNewNotifications } = useStateContext();
  // Placeholder array for notifications; replace with actual data from state or API
  const notifications = [];

  // Effect to update hasNewNotifications based on notifications array length
  useEffect(() => {
    // Set hasNewNotifications to true if there are notifications, false otherwise
    setHasNewNotifications(notifications.length > 0);
  }, [notifications, setHasNewNotifications]); // Dependencies: notifications and setHasNewNotifications

  return (
    // Main container with flex column layout and spacing
    <div className="flex flex-col gap-4">
      {/* Notifications title with styled text for light and dark modes */}
      <h2 className="text-xl font-semibold text-indigo-900 dark:text-teal-200">
        Notifications
      </h2>
      {/* Conditional rendering based on notifications */}
      {notifications.length === 0 ? (
        // Message displayed when there are no notifications, with themed text colors
        <p className="text-coral-600 dark:text-lavender-400">
          No notifications
        </p>
      ) : (
        // List of notifications when notifications exist
        <ul className="space-y-2">
          {notifications.map((notif, index) => (
            // Individual notification with unique key for React rendering
            <li key={index} className="text-indigo-900 dark:text-teal-200">
              {notif.message}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Export the Notification component as default
export default Notification;
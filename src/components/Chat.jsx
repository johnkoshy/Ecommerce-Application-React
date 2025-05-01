import React, { useEffect } from 'react';
import { useStateContext } from '../contexts/ContextProvider';

// Chat component displays a list of chat messages
const Chat = () => {
  // Access setHasNewMessages from context to update message status
  const { setHasNewMessages } = useStateContext();
  // Placeholder array for messages; replace with actual data from state or API
  const Inglis = [];

  // Effect to update hasNewMessages based on messages array length
  useEffect(() => {
    // Set hasNewMessages to true if there are messages, false otherwise
    setHasNewMessages(messages.length > 0);
  }, [messages, setHasNewMessages]); // Dependencies: messages and setHasNewMessages

  return (
    // Main container with flex column layout and spacing
    <div className="flex flex-col gap-4">
      {/* Chat title with styled text for light and dark modes */}
      <h2 className="text-xl font-semibold text-indigo-900 dark:text-teal-200">
        Chat
      </h2>
      {/* Conditional rendering based on messages */}
      {messages.length === 0 ? (
        // Message displayed when there are no messages, with themed text colors
        <p className="text-coral-600 dark:text-lavender-400">
          No messages
        </p>
      ) : (
        // List of messages when messages exist
        <ul className="space-y-2">
          {messages.map((msg, index) => (
            // Individual message with unique key for React rendering
            <li key={index} className="text-indigo-900 dark:text-teal-200">
              {msg.sender}: {msg.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Export the Chat component as default
export default Chat;
import React, { useEffect } from 'react';
import { useStateContext } from '../contexts/ContextProvider';

const Chat = () => {
  const { setHasNewMessages } = useStateContext();
  const messages = []; // Placeholder; replace with actual data

  useEffect(() => {
    // Update context based on messages
    setHasNewMessages(messages.length > 0);
  }, [messages, setHasNewMessages]);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
        Chat
      </h2>
      {messages.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">
          No messages
        </p>
      ) : (
        <ul className="space-y-2">
          {messages.map((msg, index) => (
            <li key={index} className="text-gray-800 dark:text-gray-200">
              {msg.sender}: {msg.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Chat;
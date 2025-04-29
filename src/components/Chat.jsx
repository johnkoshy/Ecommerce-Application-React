import React, { useEffect } from 'react';
import { useStateContext } from '../contexts/ContextProvider';

const Chat = () => {
  const { setHasNewMessages } = useStateContext();
  const messages = []; // Placeholder; replace with actual data

  useEffect(() => {
    setHasNewMessages(messages.length > 0);
  }, [messages, setHasNewMessages]);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold text-indigo-900 dark:text-teal-200">
        Chat
      </h2>
      {messages.length === 0 ? (
        <p className="text-coral-600 dark:text-lavender-400">
          No messages
        </p>
      ) : (
        <ul className="space-y-2">
          {messages.map((msg, index) => (
            <li key={index} className="text-indigo-900 dark:text-teal-200">
              {msg.sender}: {msg.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Chat;
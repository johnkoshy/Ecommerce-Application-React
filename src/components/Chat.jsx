import React from 'react';

const Chat = () => {
  // Placeholder for chat messages; replace with actual data/logic if available
  const messages = []; // Example: empty chat

  return (
    <div className="chat-panel">
      <h2 className="text-xl font-semibold mb-4">Chat</h2>
      {messages.length === 0 ? (
        <p className="text-gray-500">No messages</p>
      ) : (
        <ul>
          {messages.map((msg, index) => (
            <li key={index} className="mb-2">
              {msg.sender}: {msg.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Chat;
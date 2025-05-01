import React, { createContext, useContext, useState } from 'react';

// Create a React context for state management
const StateContext = createContext();

// ContextProvider component to wrap the app and provide state to children
export const ContextProvider = ({ children }) => {
  // State for controlling sidebar visibility (default: visible)
  const [activeMenu, setActiveMenu] = useState(true);
  // State for tracking clicked UI elements (cart, chat, notification, userProfile)
  const [isClicked, setIsClicked] = useState({
    cart: false,
    chat: false,
    notification: false,
    userProfile: false,
  });
  // State for storing current screen size (initially undefined)
  const [screenSize, setScreenSize] = useState(undefined);
  // State for current theme color (default: teal)
  const [currentColor, setCurrentColor] = useState('#03C9D7');
  // State for tracking new messages status
  const [hasNewMessages, setHasNewMessages] = useState(false);
  // State for tracking new notifications status
  const [hasNewNotifications, setHasNewNotifications] = useState(false);

  // Function to toggle the clicked state of UI elements
  const handleClick = (clicked) => {
    setIsClicked({ ...isClicked, [clicked]: !isClicked[clicked] });
  };

  // Effect to log context state for debugging purposes
  React.useEffect(() => {
    console.log('Context State:', {
      activeMenu,
      isClicked,
      screenSize,
      currentColor,
      hasNewMessages,
      hasNewNotifications,
    });
  }, [activeMenu, isClicked, screenSize, currentColor, hasNewMessages, hasNewNotifications]);

  return (
    // Provide context values to all child components
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor,
        setCurrentColor,
        hasNewMessages,
        setHasNewMessages,
        hasNewNotifications,
        setHasNewNotifications,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

// Custom hook to access context values
export const useStateContext = () => {
  // Retrieve context
  const context = useContext(StateContext);
  // Throw error if hook is used outside ContextProvider
  if (!context) {
    throw new Error('useStateContext must be used within a ContextProvider');
  }
  return context;
};
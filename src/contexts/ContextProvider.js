// contexts/ContextProvider.js
import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true); // Default to true for sidebar
  const [isClicked, setIsClicked] = useState({
    cart: false,
    chat: false,
    notification: false,
    userProfile: false,
  });
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState('#03C9D7');
  const [hasNewMessages, setHasNewMessages] = useState(false);
  const [hasNewNotifications, setHasNewNotifications] = useState(false);

  const handleClick = (clicked) => {
    setIsClicked({ ...isClicked, [clicked]: !isClicked[clicked] });
  };

  // Debug context values
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
        setCurrentColor, // Ensure setter is included
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

export const useStateContext = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error('useStateContext must be used within a ContextProvider');
  }
  return context;
};
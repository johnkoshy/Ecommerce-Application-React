import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true); // Set to true by default
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState('#03C9D7');
  const [isClicked, setIsClicked] = useState({ cart: false, chat: false, notification: false, userProfile: false });
  const [hasNewMessages, setHasNewMessages] = useState(false);
  const [hasNewNotifications, setHasNewNotifications] = useState(false);

  const handleClick = (clicked) => {
    setIsClicked({ ...isClicked, [clicked]: !isClicked[clicked] });
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        screenSize,
        setScreenSize,
        currentColor,
        setCurrentColor,
        isClicked,
        setIsClicked,
        handleClick,
        hasNewMessages,
        hasNewNotifications,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
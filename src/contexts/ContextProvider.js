import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState({
    cart: false,
    chat: false,
    notification: false,
    userProfile: false,
  });
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState('#03C9D7');
  const [currentMode, setCurrentMode] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false);
  const [hasNewMessages, setHasNewMessages] = useState(false); // New state for chat
  const [hasNewNotifications, setHasNewNotifications] = useState(false); // New state for notifications

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode', e.target.value);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
  };

  const handleClick = (clicked) => {
    setIsClicked({
      cart: clicked === 'cart' ? !isClicked.cart : false,
      chat: clicked === 'chat' ? !isClicked.chat : false,
      notification: clicked === 'notification' ? !isClicked.notification : false,
      userProfile: clicked === 'userProfile' ? !isClicked.userProfile : false,
    });
  };

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
        setCurrentColor,
        currentMode,
        setCurrentMode,
        themeSettings,
        setThemeSettings,
        setMode,
        setColor,
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

export const useStateContext = () => useContext(StateContext);
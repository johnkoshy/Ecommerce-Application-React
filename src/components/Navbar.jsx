import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from '.';
import PanelPortal from './PanelPortal';
import { useStateContext } from '../contexts/ContextProvider';

// NavButton component for reusable navigation buttons with tooltips
const NavButton = ({ title, customFunc, icon, color, dotColor, showDot, className }) => (
  // TooltipComponent wraps button to show title on hover
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className={`relative text-xl rounded-full p-3 hover:bg-light-gray ${className || ''}`}
    >
      {/* Show notification dot if showDot is true */}
      {showDot && (
        <span
          style={{ background: dotColor }}
          className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
        />
      )}
      {icon}
    </button>
  </TooltipComponent>
);

// Navbar component manages navigation and panel toggling
const Navbar = () => {
  // Destructure context values for state management
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
    currentColor,
    hasNewMessages,
    hasNewNotifications,
  } = useStateContext();

  // Effect to handle screen size changes and initialize screenSize
  useEffect(() => {
    // Update screenSize on window resize
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call to set screenSize
    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Effect to disable activeMenu on small screens
  useEffect(() => {
    // Log screenSize and activeMenu for debugging
    console.log('Navbar screenSize:', screenSize, 'activeMenu:', activeMenu);
    // Disable menu if screen size is 900px or less and menu is active
    if (screenSize <= 900 && activeMenu) {
      setActiveMenu(false);
    }
  }, [screenSize, activeMenu, setActiveMenu]);

  return (
    <>
      {/* Navbar container with flex layout and padding */}
      <div className="flex justify-between p-2 relative navbar">
        {/* Menu toggle button */}
        <NavButton
          title="Menu"
          customFunc={() => setActiveMenu((prev) => !prev)}
          color={currentColor}
          icon={<AiOutlineMenu />}
          className="menu-toggle"
        />
        {/* Right-side navigation buttons */}
        <div className="flex gap-3">
          {/* Cart button */}
          <NavButton
            title="Cart"
            customFunc={() => handleClick('cart')}
            color={currentColor}
            icon={<FiShoppingCart />}
          />
          {/* Chat button with optional notification dot */}
          <NavButton
            title="Chat"
            customFunc={() => handleClick('chat')}
            color={currentColor}
            icon={<BsChatLeft />}
            dotColor="#03C9D7"
            showDot={hasNewMessages}
          />
          {/* Notifications button with optional notification dot */}
          <NavButton
            title="Notifications"
            customFunc={() => handleClick('notification')}
            color={currentColor}
            icon={<RiNotification3Line />}
            dotColor="#03C9D7"
            showDot={hasNewNotifications}
          />
          {/* Profile button with avatar and dropdown */}
          <TooltipComponent content="Profile" position="BottomCenter">
            <div
              className={`flex items-center gap-2 cursor-pointer p-2 hover:bg-light-gray rounded-lg profile-button ${
                isClicked.userProfile ? 'active' : ''
              }`}
              onClick={() => handleClick('userProfile')}
            >
              {/* User avatar image */}
              <img className="rounded-full w-8 h-8" src={avatar} alt="profile" />
              {/* User greeting text */}
              <p>
                <span className="text-gray-400 text-14">Hello, </span>
                <span className="text-gray-400 font-bold ml-1 text-14">John 👋</span>
              </p>
              {/* Dropdown arrow icon */}
              <MdKeyboardArrowDown className="text-gray-400 text-14" />
            </div>
          </TooltipComponent>
        </div>
      </div>

      {/* Cart panel portal */}
      <PanelPortal isOpen={isClicked.cart} className={`cart-panel ${isClicked.cart ? 'open' : ''}`}>
        {/* Close button for cart panel */}
        <button
          type="button"
          className="close-btn"
          onClick={() => handleClick('cart')}
        >
          Close
        </button>
        <Cart />
      </PanelPortal>
      {/* Chat panel portal */}
      <PanelPortal isOpen={isClicked.chat} className={`chat-panel ${isClicked.chat ? 'open' : ''}`}>
        {/* Close button for chat panel */}
        <button
          type="button"
          className="close-btn"
          onClick={() => handleClick('chat')}
        >
          Close
        </button>
        <Chat />
      </PanelPortal>
      {/* Notification panel portal */}
      <PanelPortal isOpen={isClicked.notification} className={`notification-panel ${isClicked.notification ? 'open' : ''}`}>
        {/* Close button for notification panel */}
        <button
          type="button"
          className="close-btn"
          onClick={() => handleClick('notification')}
        >
          Close
        </button>
        <Notification />
      </PanelPortal>
      {/* User profile panel portal */}
      <PanelPortal isOpen={isClicked.userProfile} className={`user-profile-panel ${isClicked.userProfile ? 'open' : ''}`}>
        {/* Close button for user profile panel */}
        <button
          type="button"
          className="close-btn"
          onClick={() => handleClick('userProfile')}
        >
          Close
        </button>
        <UserProfile />
      </PanelPortal>
    </>
  );
};

// Export the Navbar component as default
export default Navbar;
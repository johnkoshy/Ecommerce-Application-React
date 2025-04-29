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

const NavButton = ({ title, customFunc, icon, color, dotColor, showDot }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray bg-gradient-to-r from-gray-100 to-gray-200"
    >
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

const Navbar = () => {
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

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <>
      <div className="flex justify-between p-2 md:mx-6 relative navbar">
        <NavButton
          title="Menu"
          customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
          color={currentColor}
          icon={<AiOutlineMenu />}
        />
        <div className="flex">
          <NavButton
            title="Cart"
            customFunc={() => handleClick('cart')}
            color={currentColor}
            icon={<FiShoppingCart />}
          />
          <NavButton
            title="Chat"
            customFunc={() => handleClick('chat')}
            color={currentColor}
            icon={<BsChatLeft />}
            dotColor="#03C9D7"
            showDot={hasNewMessages}
          />
          <NavButton
            title="Notifications"
            customFunc={() => handleClick('notification')}
            color={currentColor}
            icon={<RiNotification3Line />}
            dotColor="#03C9D7"
            showDot={hasNewNotifications}
          />
          <TooltipComponent content="Profile" position="BottomCenter">
            <div
              className={`flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg profile-button ${
                isClicked.userProfile ? 'active' : ''
              }`}
              onClick={() => handleClick('userProfile')}
            >
              <img className="rounded-full w-8 h-8" src={avatar} />
              <p>
                <span className="text-gray-400 text-14">Hello, </span>
                <span className="text-gray-400 font-bold ml-1 text-14">John 👋</span>
              </p>
              <MdKeyboardArrowDown className="text-gray-400 text-14" />
            </div>
          </TooltipComponent>
        </div>
      </div>

      <PanelPortal isOpen={isClicked.cart} className={`cart-panel ${isClicked.cart ? 'open' : ''}`}>
        <button
          type="button"
          className="close-btn"
          onClick={() => handleClick('cart')}
        >
          Close
        </button>
        <Cart />
      </PanelPortal>
      <PanelPortal isOpen={isClicked.chat} className={`chat-panel ${isClicked.chat ? 'open' : ''}`}>
        <button
          type="button"
          className="close-btn"
          onClick={() => handleClick('chat')}
        >
          Close
        </button>
        <Chat />
      </PanelPortal>
      <PanelPortal isOpen={isClicked.notification} className={`notification-panel ${isClicked.notification ? 'open' : ''}`}>
        <button
          type="button"
          className="close-btn"
          onClick={() => handleClick('notification')}
        >
          Close
        </button>
        <Notification />
      </PanelPortal>
      <PanelPortal isOpen={isClicked.userProfile} className={`user-profile-panel ${isClicked.userProfile ? 'open' : ''}`}>
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

export default Navbar;
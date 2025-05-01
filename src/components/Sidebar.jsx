import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { links } from '../data/dummy';
import { Nut } from 'react-bootstrap-icons';
import { useStateContext } from '../contexts/ContextProvider';

// Sidebar component renders a collapsible navigation menu
const Sidebar = () => {
  // Destructure context values for state management
  const { activeMenu, setActiveMenu, screenSize, currentColor } = useStateContext();

  // Log sidebar state for debugging
  console.log('Sidebar activeMenu:', activeMenu);
  console.log('Sidebar links:', links);

  // Function to close sidebar on mobile screens
  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  // CSS classes for active and normal link states
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2 active';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md m-2';

  // Fallback test links in case links data is empty
  const testLinks = [
    {
      title: 'Test',
      links: [
        { name: 'test1', icon: <SiShopware /> },
        { name: 'test2', icon: <SiShopware /> },
      ],
    },
  ];

  return (
    // Sidebar container with dynamic class based on activeMenu state
    <div className={`sidebar ${activeMenu ? 'open' : 'closed'}`}>
      {/* Sidebar content wrapper */}
      <div className="sidebar-content">
        {/* Header with logo and close button */}
        <div className="flex justify-between items-center">
          {/* Link to home page with logo and title */}
          <Link
            to="/"
            onClick={handleCloseSideBar}
            className="items-center gap-3 mt-4 flex text-xl font-extrabold tracking-tight"
          >
            <Nut /> <span>Dashboard</span>
          </Link>
          {/* Close button for mobile screens */}
          {screenSize <= 900 && (
            <TooltipComponent content="Close Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu(false)}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          )}
        </div>
        {/* Navigation links section */}
        <div className="mt-10">
          {/* Iterate over links (or fallback testLinks) to render menu sections */}
          {(links?.length > 0 ? links : testLinks).map((item) => (
            <div key={item.title}>
              {/* Section title */}
              <p className="text-gray-400 m-3 mt-4 uppercase">{item.title}</p>
              {/* Individual links within the section */}
              {item.links.map((link) => (
                <NavLink
                  to={`/${link.name}`}
                  key={link.name}
                  onClick={handleCloseSideBar}
                  // Apply dynamic background color for active link
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? currentColor : '',
                  })}
                  // Apply active or normal link classes
                  className={({ isActive }) => (isActive ? activeLink : normalLink)}
                >
                  {link.icon}
                  <span className="capitalize">{link.name}</span>
                </NavLink>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Export the Sidebar component as default
export default Sidebar;
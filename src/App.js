import { useStateContext } from './contexts/ContextProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Navbar, Footer, Sidebar, ThemeSettings, UserProfile } from './components';
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor, Line } from './pages';
import './App.css';

// Main App component serving as the root of the application
const App = () => {
  // Destructure context values for state management
  const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode, isClicked, handleClick } = useStateContext();

  return (
    // Root div with dynamic dark mode class
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      {/* BrowserRouter for client-side routing */}
      <BrowserRouter>
        {/* Main application container */}
        <div className="app-container">
          {/* Sidebar with dynamic open/closed state and theme styling */}
          <div className={`sidebar ${activeMenu ? 'open' : 'closed'} dark:bg-secondary-dark-bg bg-white`}>
            <Sidebar />
          </div>
          {/* Main content area with dynamic sidebar collapse styling */}
          <div className={`main-content ${!activeMenu ? 'sidebar-collapsed' : ''} dark:bg-main-bg bg-main-bg min-h-screen`}>
            {/* Navbar with theme-specific background */}
            <div className="navbar bg-main-bg dark:bg-main-dark-bg">
              <Navbar />
            </div>
            {/* User profile panel, conditionally rendered */}
            {isClicked.userProfile && (
              <div className={`user-profile-panel ${isClicked.userProfile ? 'open' : ''}`}>
                {/* Close button for user profile panel */}
                <button
                  type="button"
                  className="close-btn"
                  onClick={() => handleClick('userProfile')}
                >
                  Close
                </button>
                <UserProfile />
              </div>
            )}
            {/* Main content with theme settings and routes */}
            <div>
              {/* Conditionally render ThemeSettings component */}
              {themeSettings && <ThemeSettings />}
              {/* Define application routes */}
              <Routes>
                {/* Default route to Ecommerce page */}
                <Route path="/" element={<Ecommerce />} />
                {/* Ecommerce dashboard route */}
                <Route path="/ecommerce" element={<Ecommerce />} />
                {/* Orders management route */}
                <Route path="/orders" element={<Orders />} />
                {/* Employees management route */}
                <Route path="/employees" element={<Employees />} />
                {/* Customers management route */}
                <Route path="/customers" element={<Customers />} />
                {/* Kanban board route */}
                <Route path="/kanban" element={<Kanban />} />
                {/* Editor route */}
                <Route path="/editor" element={<Editor />} />
                {/* Calendar route */}
                <Route path="/calendar" element={<Calendar />} />
                {/* Color picker route */}
                <Route path="/color-picker" element={<ColorPicker />} />
                {/* Line chart route */}
                <Route path="/line" element={<Line />} />
                {/* Area chart route */}
                <Route path="/area" element={<Area />} />
                {/* Bar chart route */}
                <Route path="/bar" element={<Bar />} />
                {/* Pie chart route */}
                <Route path="/pie" element={<Pie />} />
                {/* Financial chart route */}
                <Route path="/financial" element={<Financial />} />
                {/* Color mapping chart route */}
                <Route path="/color-mapping" element={<ColorMapping />} />
                {/* Pyramid chart route */}
                <Route path="/pyramid" element={<Pyramid />} />
                {/* Stacked chart route */}
                <Route path="/stacked" element={<Stacked />} />
              </Routes>
            </div>
          </div>
          {/* Settings button with tooltip */}
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: '50%' }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

// Export the App component as default
export default App;
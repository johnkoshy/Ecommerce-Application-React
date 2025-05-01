import { useStateContext } from './contexts/ContextProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Navbar, Footer, Sidebar, ThemeSettings, UserProfile } from './components';
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor, Line } from './pages';
import './App.css';

const App = () => {
  const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode, isClicked, handleClick } = useStateContext();

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className="app-container">
          <div className={`sidebar ${activeMenu ? 'open' : 'closed'} dark:bg-secondary-dark-bg bg-white`}>
            <Sidebar />
          </div>
          <div className={`main-content ${!activeMenu ? 'sidebar-collapsed' : ''} dark:bg-main-bg bg-main-bg min-h-screen`}>
            <div className="navbar bg-main-bg dark:bg-main-dark-bg">
              <Navbar />
            </div>
            {isClicked.userProfile && (
              <div className={`user-profile-panel ${isClicked.userProfile ? 'open' : ''}`}>
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
            <div>
              {themeSettings && <ThemeSettings />}
              <Routes>
                <Route path="/" element={<Ecommerce />} />
                <Route path="/ecommerce" element={<Ecommerce />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/color-picker" element={<ColorPicker />} />
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />
              </Routes>
            </div>
          </div>
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

export default App;
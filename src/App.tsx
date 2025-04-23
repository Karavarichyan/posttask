import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PostList from './components/PostList';
import PostPage from './components/PostPage';
import HeaderTabs from './components/HeaderTabs';
import CommentsPage from './components/CommentsPage';
// import UsersPage from './components/UsersPage';
import Sidebar from './components/Sidebar';
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { MenuIcon, XIcon } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
    }
  }, []);

  return (
    <Router>
      <div className="flex pl-2 min-h-screen overflow-x-hidden">
        <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        <div className={`flex-1 transition-all duration-300 ease-in-out ${sidebarOpen ? 'ml-64' : ''}`}>
          <div
            className={`fixed top-4 left-4 z-50 transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-64' : 'translate-x-0'}`}
          >
            <Button variant="outline" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)}>
              {sidebarOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </Button>
          </div>

          <div className="p-6 pr-2 sm:pl-0">
            <label className="flex items-center cursor-pointer mt-16 mb-6">
              <span className="mr-3 text-lg">🌞</span>
              <input
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
                className="hidden"
              />
              <span className={`w-15 h-7 bg-gray-300 dark:bg-gray-600 rounded-full relative transition-all`}>
                <span
                  className={`absolute w-6 h-6 bg-white dark:bg-gray-800 rounded-full top-1/2 transform -translate-y-1/2 left-1/2 transition-all ${
                    darkMode ? 'translate-x-2' : '-translate-x-7'
                  }`}
                ></span>
              </span>
              <span className="ml-3 text-lg">🌙</span>
            </label>

            <HeaderTabs />

            <Routes>
              <Route path="/" element={<Navigate to="/posts" replace />} />
              <Route path="/posts" element={<PostList />} />
              <Route path="/post/:id" element={<PostPage />} />
              <Route path="/comments" element={<CommentsPage />} />
              {/* <Route path="/users" element={<UsersPage />} /> */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

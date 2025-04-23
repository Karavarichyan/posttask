import React from 'react';
import { Link } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed top-0 left-0 bottom-0 w-64 bg-gray-800 text-white p-4 transition-transform duration-300 ease-in-out z-40
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
    >
      <h2 className="text-2xl font-bold mb-6">Sidebar</h2>
      <ul>
        <li>
          <Link to="/posts" className="block py-2 px-4 hover:bg-gray-600 rounded">Posts</Link>
        </li>
        <li>
          <Link to="/comments" className="block py-2 px-4 hover:bg-gray-600 rounded">Comments</Link>
        </li>
        <li>
          <Link to="/users" className="block py-2 px-4 hover:bg-gray-600 rounded">Users</Link>
        </li>
      </ul>
      <button
        onClick={toggleSidebar}
        className="absolute top-4 right-4 text-white"
      >
      </button>
    </div>
  );
};

export default Sidebar;

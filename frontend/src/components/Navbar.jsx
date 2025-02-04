import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';
const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-full w-[250px] bg-gray-900 text-white flex flex-col p-6 shadow-lg border-r border-gray-700">
      <Link to="/" className="mb-8 flex items-center gap-2">
        <img src={assets.logo} className="w-28" alt="Logo" />
      </Link>
      <ul className="flex flex-col gap-5 text-sm">
        <Link to="/" className="hover:text-blue-400">Home</Link>
        <Link to="/collection" className="hover:text-blue-400">Blogs</Link>
        <Link to="/about" className="hover:text-blue-400">About</Link>
        <Link to="/contact" className="hover:text-blue-400">Contact</Link>
      </ul>
    </div>
  );
};

export default Sidebar;

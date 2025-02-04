import React from 'react';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';

const Navbar = ({ setToken }) => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-opacity-20 backdrop-blur-lg shadow-md flex items-center justify-between px-6 py-4 z-50 border-b border-gray-700">
      {/* Left - Logo */}
      <img className="w-[100px]" src={assets.logo} alt="Logo" />

      {/* Middle - Navigation Links */}
      <div className="hidden md:flex gap-8 text-lg">
        <NavLink to="/add" className="hover:text-gray-400 transition">Add Blog</NavLink>
        <NavLink to="/list" className="hover:text-gray-400 transition">All Blogs</NavLink>
      </div>

      {/* Right - Profile & Logout */}
      <div className="flex items-center gap-4">
        <img className="w-10 h-10 box-full border border-white" src={assets.profile} alt="User" />
        <button
          onClick={() => setToken('')}
          className="bg-red-500 px-4 py-2 rounded-lg text-white hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

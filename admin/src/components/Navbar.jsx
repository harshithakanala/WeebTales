import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';

const Navbar = ({ setToken }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-opacity-20 backdrop-blur-lg shadow-md flex items-center justify-between px-6 py-4 z-50 border-b border-gray-700">
      {/* Left - Logo */}
      <img className="w-[100px]" src={assets.logo} alt="Logo" />

      {/* Mobile Menu Icon */}
      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Middle - Navigation Links */}
      <div className={`absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent flex flex-col md:flex-row items-center gap-8 p-6 md:p-0 transition-all duration-300 ${menuOpen ? 'block' : 'hidden md:flex'}`}>
        <NavLink to="/add" className="hover:text-gray-400 transition">Add Blog</NavLink>
        <NavLink to="/list" className="hover:text-gray-400 transition">All Blogs</NavLink>
        <NavLink to="/sub" className="hover:text-gray-400 transition">All Subscribers</NavLink>
      </div>

      {/* Right - Profile & Logout */}
      <div className="flex items-center gap-4">
        <img className="w-10 h-10 border border-white rounded-full" src={assets.profile} alt="User" />
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

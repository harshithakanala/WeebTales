import React from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { FaHome, FaBook, FaInfoCircle, FaEnvelope, FaPhone } from "react-icons/fa";  // Import FontAwesome icons

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-full w-[250px] bg-gray-900 text-white flex flex-col p-6 shadow-lg border-r border-gray-700">
      {/* Logo */}
      <Link to="/" className="mb-8 flex items-center gap-2">
        <img src={assets.logo} className="w-28" alt="WeebTales Logo" />
      </Link>

      {/* Navigation Links */}
      <ul className="flex flex-col gap-5 text-sm">
        <NavLink to="/" className="hover:text-blue-400">
          <FaHome className="inline mr-2" /> Home
        </NavLink>
        <NavLink to="/collection" className="hover:text-blue-400">
          <FaBook className="inline mr-2" /> Blogs
        </NavLink>
        <NavLink to="/about" className="hover:text-blue-400">
          <FaInfoCircle className="inline mr-2" /> About
        </NavLink>
        <NavLink to="/contact" className="hover:text-blue-400">
          <FaPhone className="inline mr-2" /> Contact
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;

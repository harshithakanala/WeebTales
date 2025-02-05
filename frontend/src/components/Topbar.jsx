import React, { useContext, useState } from "react";
import { BlogContext } from "../context/BlogContext";
import { useLocation } from "react-router-dom";
import { assets } from "../assets/assets";
import { FaBars } from "react-icons/fa";

const Topbar = ({ toggleSidebar }) => {
  const { search, setSearch } = useContext(BlogContext);
  const location = useLocation();

  return (
    <div className="fixed top-0 left-0 lg:left-[250px] right-0 h-16 bg-gray-900 text-white flex items-center px-6 shadow-md z-40 border-b border-gray-700">
      {/* ☰ Menu Button */}
      <button className="lg:hidden text-white mr-4" onClick={toggleSidebar}>
        <FaBars size={22} />
      </button>

      <div className="flex-1 flex justify-center relative">
        {/* Search Bar */}
        {location.pathname === "/collection" && (
          <div className="relative flex items-center bg-gray-700 px-4 py-2 rounded-full w-full max-w-[350px]">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent text-white outline-none w-full text-sm placeholder-gray-400"
              type="text"
              placeholder="Search Blog Posts..."
            />
            <img className="w-5 cursor-pointer ml-2" src={assets.search_icon} alt="Search" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Topbar;

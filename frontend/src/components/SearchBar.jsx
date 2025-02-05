import React, { useContext, useState, useEffect } from "react";
import { BlogContext } from "../context/BlogContext";
import { useLocation } from "react-router-dom";
import { assets } from "../assets/assets";
import { FaFilter } from "react-icons/fa";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(BlogContext);
  const [showFilters, setShowFilters] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setShowFilters(location.pathname === "/collection"); // Only show filters on Collection page
  }, [location]);

  return showSearch && location.pathname === "/collection" ? (
    <div className="flex items-center bg-gray-200 px-4 py-2 rounded-full w-full max-w-[300px] md:max-w-[400px]">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="flex-1 bg-transparent text-gray-800 outline-none text-sm placeholder-gray-500"
        type="text"
        placeholder="Search Blog Posts..."
      />
      <img className="w-5 cursor-pointer ml-2" src={assets.search_icon} alt="Search" />
      
      {/* Filter Button */}
      {showFilters && (
        <button
          className="ml-3 text-white"
          onClick={() => setShowFilters(!showFilters)}
        >
          <FaFilter size={20} />
        </button>
      )}

      {/* Filter Dropdown */}
      {showFilters && (
        <div className="absolute top-12 right-0 bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-700 z-50">
          <p className="text-gray-300 mb-2">Filter By:</p>
          <ul>
            {["Action", "Adventure", "Fantasy"].map((genre, index) => (
              <li
                key={index}
                className="text-white cursor-pointer hover:text-blue-400 p-1"
                onClick={() => setShowFilters(false)} // Close on click
              >
                {genre}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  ) : null;
};

export default SearchBar;

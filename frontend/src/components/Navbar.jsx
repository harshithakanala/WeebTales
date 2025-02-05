import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { FaBars, FaTimes } from "react-icons/fa";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const sidebarRef = useRef(null); // Reference to the sidebar
  const overlayRef = useRef(null); // Reference to the overlay

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current && !sidebarRef.current.contains(event.target) &&
        overlayRef.current && !overlayRef.current.contains(event.target)
      ) {
        toggleSidebar();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [toggleSidebar]);

  return (
    <>
      {/* ☰ Menu Button */}
      <button
        className="lg:hidden fixed top-4 left-4 bg-gray-900 text-white p-3 rounded-full shadow-md z-50"
        onClick={toggleSidebar}
      >
        {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
      </button>

      {/* Sidebar Navigation */}
      <div
        ref={sidebarRef} // Attach the reference to the sidebar
        className={`fixed top-0 left-0 h-full w-[250px] bg-gray-900 text-white p-6 shadow-lg border-r border-gray-700 transition-transform z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:w-[250px] lg:block`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center mb-8" onClick={toggleSidebar}>
          <img src={assets.logo} className="w-[140px] mx-auto" alt="Logo" />
        </Link>

        {/* Menu Links */}
        <ul className="flex flex-col gap-5 text-sm">
          {[
            { name: "Home", path: "/" },
            { name: "Blogs", path: "/collection" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" },
          ].map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className="hover:text-blue-400 block p-2"
                onClick={toggleSidebar} // Close sidebar on click
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay (Click to close sidebar) */}
      {isOpen && (
        <div
          ref={overlayRef} // Attach the reference to the overlay
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default Sidebar;

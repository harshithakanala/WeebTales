import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaInstagram, FaHome, FaPhone, FaBlog, FaInfo, FaBloggerB } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <div className="bg-black text-white py-12 px-10 w-full z-10 relative bottom-0">
      {/* Footer Content */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h2 className="text-xl font-semibold">About WeebTales</h2>
            <p className="text-gray-400 mt-3 leading-relaxed">
              Your go-to blog for anime reviews, recommendations, and industry news! Stay updated with the latest in anime culture.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold">Quick Links</h2>
            <ul className="mt-3 space-y-2 text-gray-400">
              <li>
                <Link to="/" className="hover:text-white transition-all" onClick={scrollToTop}><FaHome className="inline mr-2" /> Home</Link>
              </li>
              <li>
                <Link to="/collection" className="hover:text-white transition-all" onClick={scrollToTop}><FaBloggerB className="inline mr-2" /> Blogs</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-all" onClick={scrollToTop}><FaInfo className="inline mr-2" /> About</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-all" onClick={scrollToTop}><FaPhone className="inline mr-2" /> Contact</Link>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h2 className="text-xl font-semibold">Follow Us</h2>
            <div className="mt-4 flex gap-4 text-gray-400 text-lg">
              {/* Twitter Icon */}
              <a
                href="https://twitter.com/yourhandle"  // Replace with your actual Twitter handle
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition cursor-pointer"
                onClick={scrollToTop}
              >
                <FaTwitter size={24} /> {/* Twitter Logo */}
              </a>
              {/* Instagram Icon */}
              <a
                href="https://www.instagram.com/yourhandle"  // Replace with your actual Instagram handle
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition cursor-pointer"
                onClick={scrollToTop}
              >
                <FaInstagram size={24} /> {/* Instagram Logo */}
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <p className="text-center text-gray-500 text-sm mt-12">
          © 2025 WeebTales. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

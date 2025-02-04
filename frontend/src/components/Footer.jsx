import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className="bg-black text-gray-300 py-12 px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-sm max-w-6xl mx-auto">
        
        <div>
          <img src={assets.logo} className="mb-5 w-36" alt="WeebTales Logo" />
          <p className="text-gray-400">
            Your go-to anime blog for the latest reviews, recommendations, and industry news.
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold text-white mb-4">BLOG LINKS</p>
          <ul className="flex flex-col gap-2">
            <li className="hover:text-blue-400 transition cursor-pointer">🏠 Home</li>
            <li className="hover:text-blue-400 transition cursor-pointer">📜 About Us</li>
            <li className="hover:text-blue-400 transition cursor-pointer">🔒 Privacy Policy</li>
            <li className="hover:text-blue-400 transition cursor-pointer">✉️ Contact</li>
          </ul>
        </div>

        <div>
          <p className="text-lg font-semibold text-white mb-4">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2">
            <li>📞 +1-123-456-7890</li>
            <li>📧 contact@weebtales.com</li>
            <li className="hover:text-blue-400 transition cursor-pointer">🐦 Twitter</li>
            <li className="hover:text-pink-500 transition cursor-pointer">📷 Instagram</li>
          </ul>
        </div>

      </div>

      <div className="mt-8 border-t border-gray-700 pt-5 text-center text-sm text-gray-400">
        © 2025 WeebTales.com - All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;

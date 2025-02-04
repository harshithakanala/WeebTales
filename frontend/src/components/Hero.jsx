import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import { assets } from '../assets/assets';

const Hero = () => {
  return (
    <div className="relative w-full h-[50vh] sm:h-[60vh]">
      <img 
        src={assets.hero_img} 
        alt="Anime Blog Cover" 
        className="w-full h-full object-cover"
      />

      {/* "Read Blogs" Button */}
      <Link 
        to="/collection"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white py-2 px-6 rounded-full font-semibold text-lg hover:bg-blue-700 transition-all"
      >
        Read Blogs
      </Link>
    </div>
  );
};

export default Hero;

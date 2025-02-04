import React from 'react';
import { assets } from '../assets/assets';

const Hero = () => {
  return (
    <div className="relative w-full h-[80vh] bg-cover bg-center" style={{ backgroundImage: `url(${assets.hero_img})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold">Dive Into the World of Anime</h1>
        <p className="text-lg md:text-xl mt-4 max-w-2xl">
          Explore the latest anime trends, reviews, and hidden gems from the anime universe.
        </p>
        <button className="mt-6 bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg text-lg font-semibold">
          Start Exploring
        </button>
      </div>
    </div>
  );
};

export default Hero;

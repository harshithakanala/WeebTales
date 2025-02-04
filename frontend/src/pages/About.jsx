import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* 🔹 Main Content Area */}
      <div className="px-8 lg:px-20 py-16 text-white">
        {/* Section: About WeebTales */}
        <div className="text-3xl">
          <Title text1="ABOUT" text2="WEEBTALES" />
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center gap-12">
          {/* Left Side - Image */}
          <div className="relative w-full md:max-w-[500px]">
            <img className="rounded-lg shadow-lg" src={assets.about_img} alt="Anime Blogging" />
            <div className="absolute inset-0 bg-black opacity-20 rounded-lg"></div>
          </div>

          {/* Right Side - Description */}
          <div className="flex flex-col justify-center gap-6 md:w-2/4">
            <p className="text-lg text-gray-300 leading-relaxed">
              Welcome to <b className="text-white">WeebTales</b>, your go-to destination for anime blogs! We publish well-crafted articles covering anime reviews, industry news, character deep dives, and more.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Our goal is simple: to create a space where anime fans can enjoy insightful blogs without distractions. Whether you're looking for the latest seasonal anime recommendations or revisiting classics, we’ve got you covered.
            </p>
            <div className="border-l-4 border-blue-400 pl-4">
              <b className="text-gray-100 text-xl">Our Mission</b>
              <p className="text-gray-400 text-lg">
                WeebTales exists to provide high-quality, engaging, and informative content for you to read and enjoy.
              </p>
            </div>
          </div>
        </div>

        {/* Section: What We Cover */}
        <div className="text-3xl py-12">
          <Title text1="WHAT" text2="WE COVER" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          {/* Glassmorphism Cards */}
          {[ 
            { title: "Anime Reviews", desc: "We provide in-depth reviews of seasonal and classic anime, analyzing story, animation, and character development." },
            { title: "Anime News & Announcements", desc: "Stay updated with the latest anime industry news, upcoming releases, and event highlights." },
            { title: "Anime Recommendations", desc: "Not sure what to watch next? We curate watchlists and genre-based suggestions to help you discover new favorites." }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/10 border border-gray-700 backdrop-blur-lg px-8 py-10 flex flex-col gap-5 rounded-lg shadow-lg transition-all hover:scale-105 hover:border-blue-400"
            >
              <b className="text-lg text-white">{item.title}</b>
              <p className="text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const Contact = () => {
  return (
    <div className="text-white px-6 sm:px-12 lg:px-20 mt-16">

      {/* Section: Contact Header */}
      <div className="text-center text-3xl py-8">
        <Title text1="GET IN" text2="TOUCH" />
        <p className="w-full md:w-2/3 mx-auto text-sm md:text-base text-gray-400">
          We’d love to hear from you! Reach out to us for any queries, partnerships, or career opportunities.
        </p>
      </div>

      {/* Contact Info Section */}
      <div className="flex flex-col md:flex-row items-center gap-10 mt-12">
        
        {/* Left - Contact Image */}
        <div className="flex-1">
          <img className="w-full max-w-md mx-auto rounded-lg shadow-lg" src={assets.contact_img} alt="Contact Us" />
        </div>

        {/* Right - Contact Details */}
        <div className="flex-1 bg-white/10 backdrop-blur-md border border-gray-700 p-6 md:p-10 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Our Location</h2>

          <div className="text-gray-300 space-y-4">
            <p className="text-lg">
              <span className="font-semibold text-white">📍 Address:</span> 54709 Willms Station, Suite 350, Washington, USA
            </p>
            <p className="text-lg">
              <span className="font-semibold text-white">📞 Phone:</span> (415) 555-0132
            </p>
            <p className="text-lg">
              <span className="font-semibold text-white">📧 Email:</span> admin@forever.com
            </p>
          </div>

          <hr className="my-6 border-gray-700" />

          {/* Careers Section */}
          <h2 className="text-2xl font-semibold mb-4">Careers at Forever</h2>
          <p className="text-gray-400 text-sm md:text-base">
            Learn more about our teams and job openings. Join us and be a part of something amazing!
          </p>
          
          <button className="mt-6 w-full py-3 bg-gradient-to-r from-gray-800 to-black text-white rounded-lg font-semibold text-sm hover:scale-105 transition-all">
            Explore Careers
          </button>
        </div>

      </div>

      {/* Newsletter Subscription */}
      <div className="mt-20">
        <NewsletterBox />
      </div>

    </div>
  );
};

export default Contact;

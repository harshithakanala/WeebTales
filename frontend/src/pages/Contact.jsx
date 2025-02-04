import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';
import { FaLocationArrow, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';  // Import FontAwesome icons

const Contact = () => {
  return (
    <div className="text-white px-6 sm:px-12 lg:px-20 mt-16">

      {/* Section: Contact Header */}
      <div className="text-center text-3xl py-8">
        <Title text1="GET IN" text2="TOUCH" />
        <p className="w-full md:w-2/3 mx-auto text-sm md:text-base text-gray-400">
          I'm always up for a good anime discussion! Feel free to get in touch if you want to share your thoughts or just chat!
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
              <span className="font-semibold text-white"><FaLocationArrow className="inline mr-2" /> Address:</span> Bangalore, India
            </p>
            <p className="text-lg">
              <span className="font-semibold text-white"><FaPhoneAlt className="inline mr-2" /> Phone:</span> (+91) 9987677667
            </p>
            <p className="text-lg">
              <span className="font-semibold text-white"><FaEnvelope className="inline mr-2" /> Email:</span> admin@weebtales.com
            </p>
          </div>



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

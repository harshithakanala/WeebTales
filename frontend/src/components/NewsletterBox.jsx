import React, { useContext, useState } from 'react';
import { BlogContext } from '../context/BlogContext';

const NewsletterBox = () => {
  const { subscribeEmail } = useContext(BlogContext);  
  const [email, setEmail] = useState('');

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (email) {
      subscribeEmail(email);  
      setEmail('');  
    }
  };

  return (
    <div className="text-center bg-gray-900 py-10 px-6 rounded-lg shadow-lg mt-16 relative z-10">
      {/* Newsletter Title */}
      <p className="text-2xl font-semibold text-white">📢 Stay Updated on the Latest Anime News!</p>
      <p className="text-gray-400 mt-2 text-sm sm:text-base">
        Get exclusive blog posts, reviews, and anime updates straight to your inbox.
      </p>

      {/* Subscription Form */}
      <form 
        onSubmit={onSubmitHandler} 
        className="w-full sm:w-2/3 lg:w-1/2 flex items-center bg-gray-800 mt-6 mx-auto rounded-full overflow-hidden border border-gray-700 focus-within:border-blue-500 transition-all duration-300"
      >
        <input 
          className="w-full px-4 py-3 bg-transparent text-white placeholder-gray-400 outline-none"
          type="email" 
          placeholder="Enter your email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}  
          required 
        />
        <button 
          type="submit" 
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium text-sm px-6 py-3 transition-all duration-300"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;

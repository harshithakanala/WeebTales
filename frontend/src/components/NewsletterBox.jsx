import React, { useContext, useState } from 'react';
import { BlogContext } from '../context/BlogContext';

const NewsletterBox = () => {
  const { subscribeEmail } = useContext(BlogContext); // Assuming you have this function in your context
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setMessage(''); // Clear previous messages

    if (!email) {
      setMessage("Please enter a valid email address.");
      return;
    }

    try {
      const response = await subscribeEmail(email);
      if (response && response.success) {
        setMessage("Successfully subscribed!");
        setEmail(''); // Clear the input field
      } else {
        setMessage(response.message || "Subscription failed. Please try again.");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="bg-gray-900 py-12 px-6 rounded-lg shadow-lg mt-16 relative z-10 w-full md:w-2/3 lg:w-1/2 mx-auto flex flex-col items-center justify-center"> {/* Added responsive width and flexbox */}
      <p className="text-2xl font-semibold text-white text-center mb-4">📢 Stay Updated on the Latest Anime News!</p> {/* Added text-center and margin-bottom */}
      <p className="text-gray-400 mt-2 text-sm sm:text-base text-center mb-6">Get exclusive blog posts, reviews, and anime updates straight to your inbox.</p> {/* Added text-center and margin-bottom */}

      <form onSubmit={onSubmitHandler} className="w-full flex items-center bg-gray-800 rounded-full overflow-hidden border border-gray-700 focus-within:border-blue-500 transition-all duration-300"> {/* Removed specific width */}
        <input
          className="w-full px-4 py-3 bg-transparent text-white placeholder-gray-400 outline-none"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-medium text-sm px-6 py-3 transition-all duration-300 whitespace-nowrap"> {/* Added whitespace-nowrap */}
          SUBSCRIBE
        </button>
      </form>

      {message && (
        <p className={`mt-4 text-sm text-center ${message.startsWith("Successfully") ? "text-green-500" : "text-red-500"}`}> {/* Added text-center */}
          {message}
        </p>
      )}
    </div>
  );
};

export default NewsletterBox;
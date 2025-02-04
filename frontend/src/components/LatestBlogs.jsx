import React, { useContext, useEffect, useState } from 'react';
import { BlogContext } from '../context/BlogContext';
import Title from './Title';
import { Link } from 'react-router-dom';

const LatestBlogs = () => {
  const { blogs } = useContext(BlogContext);
  const [latestBlogs, setLatestBlogs] = useState([]);

  useEffect(() => {
    setLatestBlogs(blogs.slice(0, 6)); // Get the latest 10 blogs
  }, [blogs]);

  return (
    <div className="my-14 px-6">
      {/* Section Title */}
      <div className="text-left py-8">
        <Title text1="LATEST" text2="BLOG POSTS" />
        <p className="w-full md:w-3/4 lg:w-2/3 text-gray-400 text-sm sm:text-base">
          Stay updated with the latest anime news, reviews, and recommendations.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {latestBlogs.length > 0 ? (
          latestBlogs.map((item, index) => (
            <div 
              key={index} 
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-all border border-gray-700 flex flex-col h-full"
            >
              {/* Blog Image */}
              <div className="w-full aspect-w-1 aspect-h-1">
                <img src={item.coverImage} alt={item.title} className="w-full h-full object-cover" />
              </div>

              {/* Blog Content */}
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg text-white font-semibold">{item.title}</h3>
                <p className="text-gray-300 text-sm mt-2 flex-grow">{item.description.slice(0, 80)}...</p>

                {/* "Read More" Link - Pushed to Bottom */}
                <Link 
                  to={`/blog/${item._id}`} 
                  className="text-blue-400 hover:text-blue-600 mt-4 inline-block font-semibold"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full">No latest blogs available.</p>
        )}
      </div>
    </div>
  );
};

export default LatestBlogs;

import React, { useContext, useEffect, useState } from 'react';
import { BlogContext } from '../context/BlogContext';
import Title from './Title';
import { Link } from 'react-router-dom';

const FeaturedBlogs = () => {
  const { blogs } = useContext(BlogContext);
  const [featuredBlogs, setFeaturedBlogs] = useState([]);

  useEffect(() => {
    const featured = blogs.filter((item) => item.featured);
    setFeaturedBlogs(featured.slice(0, 5)); // Show top 5 featured blogs
  }, [blogs]);

  return (
    <div className="mt-10 px-8 w-full">
      {/* Section Header */}
      <div className="text-left py-8">
        <Title text1="FEATURED" text2="BLOGS" />
        <p className="w-full md:w-3/4 lg:w-2/3 text-gray-400 text-sm sm:text-base">
          Discover the best of anime with our curated featured blogs!
        </p>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {featuredBlogs.length > 0 ? (
          featuredBlogs.map((item) => (
            <div key={item._id} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-all border border-gray-700">
              {/* Blog Image */}
              <div className="w-full aspect-w-1 aspect-h-1">
                <img src={item.coverImage} alt={item.title} className="w-full h-full object-cover" />
              </div>

              {/* Blog Content */}
              <div className="p-4">
                <h3 className="text-lg text-white font-semibold">{item.title}</h3>
                <p className="text-gray-300 text-sm mt-2">{item.description.slice(0, 80)}...</p>

                {/* "Read More" Link */}
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
          <p className="text-gray-500 text-center col-span-full">No featured blogs available.</p>
        )}
      </div>
    </div>
  );
};

export default FeaturedBlogs;

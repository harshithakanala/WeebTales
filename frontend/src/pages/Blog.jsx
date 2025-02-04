import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BlogContext } from '../context/BlogContext';
import { assets } from '../assets/assets';

const BlogPost = () => {
  const { blogId } = useParams();
  const { blogs } = useContext(BlogContext);
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    const selectedBlog = blogs.find((item) => item._id === blogId);
    if (selectedBlog) {
      setBlogData(selectedBlog);
    }
  }, [blogId, blogs]);

  return blogData ? (
    <div className="max-w-5xl mx-auto mt-20 px-6 text-white animate-fadeIn">
      
      {/* Blog Title Section */}
      <div className="text-center relative pb-8">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-200 via-white to-gray-300 bg-clip-text text-transparent drop-shadow-lg">
          {blogData.title}
        </h1>
        <p className="text-gray-400 text-lg mt-2 italic">{blogData.genre}</p>
        <div className="absolute left-1/2 -translate-x-1/2 w-24 h-1 bg-blue-500 mt-4 rounded-full"></div>
      </div>

      {/* Blog Cover Image */}
      <div className="mt-8">
        <img
          src={blogData.coverImage || assets.placeholder_image}
          className="w-full rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-500"
          alt="Blog Cover"
        />
      </div>

      {/* Blog Content */}
      <div className="mt-10 bg-white/10 backdrop-blur-lg border border-gray-700 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
        <p className="text-gray-300 leading-relaxed text-lg">
          {blogData.description}
        </p>
      </div>

    </div>
  ) : (
    <div className="text-center text-gray-400 mt-20">Loading blog...</div>
  );
};

export default BlogPost;

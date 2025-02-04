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
    <div className="max-w-5xl mx-auto mt-16 px-6 text-white animate-fadeIn">
      <div className="text-center relative pb-6">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-gray-200 via-white to-gray-300 bg-clip-text text-transparent drop-shadow-md">
          {blogData.title}
        </h1>
        <p className="text-gray-400 text-lg mt-3 italic tracking-wide">
          {blogData.genre}
        </p>
        <div className="absolute left-1/2 -translate-x-1/2 w-20 h-[2px] bg-blue-500 mt-5 rounded-full"></div>
      </div>
      <div className="mt-6">
        <img
          src={blogData.coverImage || assets.placeholder_image}
          className="w-full rounded-lg shadow-lg transform hover:scale-[1.03] transition-all duration-500"
          alt="Blog Cover"
        />
      </div>
      <div className="mt-10 bg-gray-900/90 border border-gray-700 p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-500">
        <p className="text-gray-300 leading-relaxed text-lg tracking-wide">
          {blogData.description}
        </p>
      </div>
    </div>
  ) : (
    <div className="text-center text-gray-400 mt-20">Loading blog...</div>
  );
};

export default BlogPost;

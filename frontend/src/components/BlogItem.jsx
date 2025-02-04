import React from 'react';
import { Link } from 'react-router-dom';

const BlogItem = ({ id, title, description, image }) => {
  return (
    <div className="bg-gray-900 bg-opacity-80 rounded-lg shadow-lg overflow-hidden transition-all hover:shadow-2xl border border-gray-800 hover:border-gray-600">
      {/* Blog Image */}
      {image ? (
        <img 
          src={image} 
          alt={title} 
          className="w-full aspect-[16/9] object-cover shadow-lg"
        />
      ) : (
        <div className="w-full h-60 bg-gray-700 flex items-center justify-center text-gray-400">
          No Image Available
        </div>
      )}

      {/* Blog Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm text-gray-400">
          {description?.slice(0, 100)}...
        </p>

        {/* "Read More" Link */}
        <Link 
          to={`/blog/${id}`} 
          className="text-blue-400 hover:text-blue-600 mt-4 inline-block font-semibold"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;

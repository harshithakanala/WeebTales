import React from 'react';
import { Link } from 'react-router-dom';

const BlogItem = ({ id, title, description, image }) => {
  return (
    <Link 
      to={`/blog/${id}`} 
      className="group block transform transition-all duration-300 hover:scale-105"
    >
      <div className="bg-gray-900 bg-opacity-80 rounded-lg shadow-lg overflow-hidden transition-all hover:shadow-2xl border border-gray-800 hover:border-gray-600">
        {/* Blog Image */}
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-56 object-cover group-hover:opacity-90 transition-all"
          />
        ) : (
          <div className="w-full h-56 bg-gray-700 flex items-center justify-center text-gray-400">
            No Image Available
          </div>
        )}

        {/* Blog Info */}
        <div className="p-5">
          <h3 className="text-lg font-semibold text-white group-hover:text-gray-300">{title}</h3>
          <p className="text-sm text-gray-400">{description?.slice(0, 100)}...</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogItem;

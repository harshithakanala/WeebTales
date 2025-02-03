import React from 'react';
import { Link } from 'react-router-dom';

const BlogItem = ({ id, title, description, image }) => {
  return (
    <Link to={`/blog/${id}`} className="text-gray-700 hover:text-black transition-all">
      <div className="overflow-hidden bg-white rounded-lg shadow-lg transform transition-all hover:shadow-2xl hover:scale-105">
        {/* Ensure image URL is displayed */}
        {image ? (
          <img src={image} alt={title} className="w-full h-56 object-cover transition-all" />
        ) : (
          <div className="w-full h-56 bg-gray-200 flex items-center justify-center text-gray-500">
            No Image Available
          </div>
        )}
        <div className="p-5">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-600">{description?.slice(0, 100)}...</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogItem;

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const ListBlogs = ({ token }) => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/blog/list`);
      if (response.data.success) {
        setBlogs(response.data.blogs.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const removeBlog = async (id) => {
    try {
      const response = await axios.post(`${backendUrl}/api/blog/remove`, { id }, { headers: { token } });

      if (response.data.success) {
        toast.success(response.data.message);
        await fetchBlogs();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="mt-[100px] p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">All Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-4 shadow-md hover:scale-105 transition transform duration-300">
            {/* Blog Image */}
            <img className="w-full h-[200px] object-cover rounded-lg" src={blog.coverImage || 'default.jpg'} alt="Cover" />

            {/* Blog Content */}
            <div className="mt-4">
              <h2 className="text-lg font-semibold">{blog.title}</h2>
              <p className="text-gray-400 text-sm mt-1">{blog.genre}</p>
              <p className="text-gray-300 text-sm mt-2">{blog.description.slice(0, 100)}...</p>
              <p className="text-sm mt-2">{new Date(blog.releaseDate).toLocaleDateString()}</p>
            </div>

            {/* Remove Button */}
            <button 
              onClick={() => removeBlog(blog._id)} 
              className="mt-4 w-full py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListBlogs;

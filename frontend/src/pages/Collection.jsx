import React, { useContext, useEffect, useState } from 'react';
import { BlogContext } from '../context/BlogContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import BlogItem from '../components/BlogItem';

const Collection = () => {
  const { blogs, search, showSearch } = useContext(BlogContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterBlogs, setFilterBlogs] = useState([]); 
  const [genres, setGenres] = useState([]);
  const [sortType, setSortType] = useState('newest');

  useEffect(() => {
    // Show all blogs by default
    setFilterBlogs(blogs);
  }, [blogs]);

  // Toggle Genre Selection
  const toggleGenre = (e) => {
    if (genres.includes(e.target.value)) {
      setGenres((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setGenres((prev) => [...prev, e.target.value]);
    }
  };

  // Apply Filters when search or genres change
  useEffect(() => {
    let filtered = [...blogs];

    if (showSearch && search) {
      filtered = filtered.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (genres.length > 0) {
      filtered = filtered.filter((item) => genres.includes(item.genre));
    }

    setFilterBlogs(filtered);
  }, [genres, search, showSearch, blogs]);

  // Sort Blogs
  useEffect(() => {
    let sortedBlogs = [...filterBlogs];

    switch (sortType) {
      case 'newest':
        sortedBlogs.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case 'oldest':
        sortedBlogs.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      default:
        break;
    }

    setFilterBlogs(sortedBlogs);
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-6 pt-12 text-white animate-fadeIn">
      
      {/* 🔹 Filter Section */}
      <div className="min-w-64 bg-black/30 backdrop-blur-md p-6 rounded-lg shadow-lg">
        <p onClick={() => setShowFilter(!showFilter)} className="text-xl flex items-center cursor-pointer gap-2 hover:text-blue-400 transition-all">
          FILTERS
          <img className={`h-4 transition-transform ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="Dropdown Icon" />
        </p>

        {/* Genre Filter */}
        <div className={`mt-4 ${showFilter ? '' : 'hidden'}`}>
          <p className="text-gray-400 text-sm font-medium">GENRE</p>
          <div className="flex flex-col gap-3 mt-2">
            {['Action', 'Adventure', 'Fantasy', 'Romance', 'Sci-Fi', 'Horror'].map((genre) => (
              <label key={genre} className="flex items-center gap-2 cursor-pointer">
                <input className="w-4 h-4 accent-blue-500" type="checkbox" value={genre} onChange={toggleGenre} />
                <span className="text-gray-300 hover:text-white transition">{genre}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* 🔹 Blog Listing Section */}
      <div className="flex-1">
        <div className="flex justify-between items-center mb-6">
          <Title text1="ALL" text2="BLOGS" />
          
          {/* Blog Sorting */}
          <select 
            onChange={(e) => setSortType(e.target.value)} 
            className="bg-black/30 backdrop-blur-lg border border-gray-600 px-3 py-2 rounded-md text-gray-200 text-sm focus:outline-none hover:border-blue-500 transition-all"
          >
            <option value="newest">Sort by: Newest</option>
            <option value="oldest">Sort by: Oldest</option>
          </select>
        </div>

        {/* 🔹 Display Blogs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filterBlogs.length > 0 ? (
            filterBlogs.map((item, index) => (
              <BlogItem 
                key={index} 
                title={item.title} 
                id={item._id} 
                image={item.coverImage} 
                genre={item.genre} 
                date={item.date} 
              />
            ))
          ) : (
            <p className="text-gray-400 text-center col-span-full">No blogs found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;

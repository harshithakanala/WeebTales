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

  // Toggle Genre Selection
  const toggleGenre = (e) => {
    if (genres.includes(e.target.value)) {
      setGenres((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setGenres((prev) => [...prev, e.target.value]);
    }
  };

  // Apply Filters
  const applyFilter = () => {
    let blogsCopy = blogs.slice();

    // Search Filter
    if (showSearch && search) {
      blogsCopy = blogsCopy.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Genre Filter
    if (genres.length > 0) {
      blogsCopy = blogsCopy.filter((item) => genres.includes(item.genre));
    }

    setFilterBlogs(blogsCopy);
  };

  // Sort Blogs
  const sortBlogs = () => {
    let sortedBlogs = [...filterBlogs];

    switch (sortType) {
      case 'newest':
        setFilterBlogs(sortedBlogs.sort((a, b) => new Date(b.date) - new Date(a.date)));
        break;
      case 'oldest':
        setFilterBlogs(sortedBlogs.sort((a, b) => new Date(a.date) - new Date(b.date)));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [genres, search, showSearch, blogs]);

  useEffect(() => {
    sortBlogs();
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      
      {/* Filter Section */}
      <div className="min-w-60">
        <p onClick={() => setShowFilter(!showFilter)} className="my-2 text-xl flex items-center cursor-pointer gap-2">
          FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="Dropdown Icon" />
        </p>

        {/* Genre Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className="mb-3 text-sm font-medium">GENRE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            {['Action', 'Adventure', 'Fantasy', 'Romance', 'Sci-Fi', 'Horror'].map((genre) => (
              <p key={genre} className="flex gap-2">
                <input className="w-3" type="checkbox" value={genre} onChange={toggleGenre} /> {genre}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Listing Section */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1="ALL" text2="BLOGS" />
          {/* Blog Sorting */}
          <select onChange={(e) => setSortType(e.target.value)} className="border-2 border-gray-300 text-sm px-2">
            <option value="newest">Sort by: Newest</option>
            <option value="oldest">Sort by: Oldest</option>
          </select>
        </div>

        {/* Display Blogs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-6">
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
            <p className="text-gray-500 text-center col-span-full">No blogs found.</p>
          )}
        </div>
      </div>

    </div>
  );
};

export default Collection;

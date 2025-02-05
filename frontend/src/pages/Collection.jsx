import React, { useContext, useEffect, useState, useRef } from "react";
import { BlogContext } from "../context/BlogContext";
import Title from "../components/Title";
import BlogItem from "../components/BlogItem";
import { FaFilter } from "react-icons/fa";

const Collection = () => {
  const { blogs, search } = useContext(BlogContext);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [sortType, setSortType] = useState("newest");
  const [showFilters, setShowFilters] = useState(false); // Controls visibility of mobile filter dropdown
  const filtersRef = useRef(null); // Ref to filter dropdown
  const sortRef = useRef(null); // Ref to sort dropdown

  useEffect(() => {
    if (!blogs || blogs.length === 0) return;

    let filtered = [...blogs];

    // Filter by search query
    if (search.trim() !== "") {
      filtered = filtered.filter((blog) =>
        blog.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Filter by genres
    if (genres.length > 0) {
      filtered = filtered.filter((blog) => genres.includes(blog.genre));
    }

    // Sort blogs by date
    filtered.sort((a, b) =>
      sortType === "newest"
        ? new Date(b.date) - new Date(a.date)
        : new Date(a.date) - new Date(b.date)
    );

    setFilteredBlogs(filtered);
  }, [blogs, search, genres, sortType]);

  // Close the filters dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        filtersRef.current && !filtersRef.current.contains(event.target) && !sortRef.current.contains(event.target)
      ) {
        setShowFilters(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleGenre = (e) => {
    const genre = e.target.value;
    setGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
    setShowFilters(false); // Close the filters when a genre is selected
  };

  const toggleSort = (e) => {
    const selectedSortType = e.target.value;
    setSortType(selectedSortType);
    setShowFilters(false); // Close filters when sort is selected
  };

  return (
    <div className="flex flex-col items-center bg-gray-50 text-gray-900 min-h-screen">
      {/* Title and Mobile Filter Button */}
      <div className="w-full px-6 md:px-12 py-4 flex justify-between items-center">
        <Title text1="ALL" text2="BLOGS" />

        {/* Filter Icon (Mobile Only) */}
        <button
          className="p-2 bg-gray-700 text-white rounded-md md:hidden"
          onClick={() => setShowFilters(!showFilters)}
        >
          <FaFilter size={18} />
        </button>
      </div>

      {/* Filters Dropdown (Visible on mobile when showFilters is true) */}
      {showFilters && (
        <div
          ref={filtersRef} // Attach ref to the dropdown
          className="absolute top-20 bg-gray-900 p-4 text-white rounded-md shadow-lg w-full md:hidden"
        >
          <p className="font-semibold mb-2">Filters</p>
          <div className="flex flex-col gap-2">
            {["Action", "Adventure", "Fantasy", "Romance", "Sci-Fi", "Horror"].map((genre) => (
              <label key={genre} className="flex items-center gap-2 cursor-pointer">
                <input
                  className="w-4 h-4 accent-blue-500"
                  type="checkbox"
                  value={genre}
                  onChange={toggleGenre}
                  checked={genres.includes(genre)}
                />
                <span className="text-white hover:text-gray-300 transition">{genre}</span> {/* White color on mobile */}
              </label>
            ))}
          </div>

          {/* Sort By Dropdown (For mobile, displayed as checkboxes) */}
          <div ref={sortRef} className="mt-6">
            <p className="text-white text-sm font-medium">Sort By</p>
            <div className="flex flex-row gap-4 mt-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  value="newest"
                  onChange={toggleSort}
                  checked={sortType === "newest"}
                />
                <span className="text-white hover:text-gray-300 transition">Newest</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  value="oldest"
                  onChange={toggleSort}
                  checked={sortType === "oldest"}
                />
                <span className="text-white hover:text-gray-300 transition">Oldest</span>
              </label>
            </div>
          </div>
        </div>
      )}

      {/* Blog Grid */}
      <div className="flex flex-col md:flex-row w-full">
        {/* Filters for larger screens */}
        <div className="w-64 bg-white shadow-md border-r p-6 hidden md:block">
          <p className="text-lg font-semibold mb-4">Filters</p>
          <div>
            <p className="text-gray-700 text-sm font-medium">Genre</p>
            <div className="flex flex-col gap-1 mt-2"> {/* Reduced gap between genres */}
              {["Action", "Adventure", "Fantasy", "Romance", "Sci-Fi", "Horror"].map((genre) => (
                <label key={genre} className="flex items-center gap-2 cursor-pointer">
                  <input
                    className="w-4 h-4 accent-blue-500"
                    type="checkbox"
                    value={genre}
                    onChange={toggleGenre}
                    checked={genres.includes(genre)}
                  />
                  <span className="text-black hover:text-gray-700 transition">{genre}</span> {/* Black color on desktop */}
                </label>
              ))}
            </div>
          </div>

          {/* Sort By Dropdown (For desktop) */}
          <div ref={sortRef} className="mt-6">
            <p className="text-gray-700 text-sm font-medium">Sort By</p>
            <select
              onChange={(e) => setSortType(e.target.value)}
              className="bg-white border border-gray-400 px-3 py-2 rounded-md text-gray-900 text-sm w-full mt-2 focus:outline-none hover:border-blue-500 transition-all"
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>
        </div>

        {/* Display filtered blogs */}
        <div className="flex-1 p-10 ml-0 lg:ml-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((item) => (
                <BlogItem key={item._id} title={item.title} id={item._id} image={item.coverImage} />
              ))
            ) : (
              <p className="text-gray-500 text-center col-span-full">No blogs found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;

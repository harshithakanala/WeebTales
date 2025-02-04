import React, { useContext, useEffect, useState } from "react";
import { BlogContext } from "../context/BlogContext";
import Title from "../components/Title";
import BlogItem from "../components/BlogItem";

const Collection = () => {
  const { blogs, search } = useContext(BlogContext);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [sortType, setSortType] = useState("newest");

  useEffect(() => {
    if (!blogs || blogs.length === 0) return;

    let filtered = [...blogs];

    if (search.trim() !== "") {
      filtered = filtered.filter((blog) =>
        blog.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (genres.length > 0) {
      filtered = filtered.filter((blog) => genres.includes(blog.genre));
    }

    if (sortType === "newest") {
      filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else {
      filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    setFilteredBlogs(filtered);
  }, [blogs, search, genres, sortType]);

  const toggleGenre = (e) => {
    const genre = e.target.value;
    setGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
  };

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900">
      <div className="w-64 bg-white shadow-md border-r p-6">
        <p className="text-lg font-semibold mb-4">Filters</p>
        <div>
          <p className="text-gray-700 text-sm font-medium">Genre</p>
          <div className="flex flex-col gap-2 mt-2">
            {["Action", "Adventure", "Fantasy", "Romance", "Sci-Fi", "Horror"].map((genre) => (
              <label key={genre} className="flex items-center gap-2 cursor-pointer">
                <input
                  className="w-4 h-4 accent-blue-500"
                  type="checkbox"
                  value={genre}
                  onChange={toggleGenre}
                  checked={genres.includes(genre)}
                />
                <span className="text-gray-800 hover:text-black transition">{genre}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="mt-6">
          <p className="text-gray-700 text-sm font-medium">Sort By</p>
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="bg-gray-200 border border-gray-400 px-3 py-2 rounded-md text-gray-900 text-sm w-full mt-2 focus:outline-none hover:border-blue-500 transition-all"
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>

      <div className="flex-1 p-10 ml-0 lg:ml-16">
        <div className="flex justify-between items-center mb-6">
          <Title text1="ALL" text2="BLOGS" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((item) => (
              <BlogItem
                key={item._id}
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

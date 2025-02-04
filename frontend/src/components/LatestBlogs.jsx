import React, { useContext, useEffect, useState } from 'react';
import { BlogContext } from '../context/BlogContext';
import BlogItem from './BlogItem';
import Title from '../components/Title';

const LatestBlogs = () => {
  const { blogs } = useContext(BlogContext);
  const [latestBlogs, setLatestBlogs] = useState([]);

  useEffect(() => {
    setLatestBlogs(blogs.slice(0, 6)); // Get the latest 6 blogs
  }, [blogs]);

  return (
    <div className="my-14 px-6">
      <div className="text-left py-8">
        <Title text1="LATEST" text2="BLOG POSTS" />
        <p className="w-full md:w-3/4 lg:w-2/3 text-gray-400 text-sm sm:text-base">
          Stay updated with the latest anime news, reviews, and recommendations.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {latestBlogs.length > 0 ? (
          latestBlogs.map((item) => (
            <BlogItem 
              key={item._id}
              id={item._id}
              title={item.title}
              image={item.coverImage}
              description={item.description}
            />
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full">No latest blogs available.</p>
        )}
      </div>
    </div>
  );
};

export default LatestBlogs;

import React, { useContext, useEffect, useState } from 'react';
import { BlogContext } from '../context/BlogContext';
import Title from './Title';
import BlogItem from './BlogItem';  

const LatestBlogs = () => {
    const { blogs } = useContext(BlogContext);
    const [latestBlogs, setLatestBlogs] = useState([]);

    useEffect(() => {
        // Display the latest 10 blogs, default to all if fewer
        setLatestBlogs(blogs.slice(0, 10));
    }, [blogs]);

    return (
        <div className="my-14 px-6">
            {/* Section Title */}
            <div className="text-center py-8">
                <Title text1="LATEST" text2="BLOG POSTS" />
                <p className="w-full md:w-3/4 lg:w-2/3 mx-auto text-gray-400 text-sm sm:text-base">
                    Stay updated with the latest anime news, reviews, and recommendations. Discover the newest insights into your favorite anime world.
                </p>
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {latestBlogs.map((item, index) => (
                    <BlogItem 
                        key={index} 
                        id={item._id} 
                        image={item.coverImage} 
                        title={item.title} 
                        description={item.description} 
                    />
                ))}
            </div>
        </div>
    );
};

export default LatestBlogs;

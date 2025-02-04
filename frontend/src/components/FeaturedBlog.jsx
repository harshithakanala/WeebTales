import React, { useContext, useEffect, useState } from 'react';
import { BlogContext } from '../context/BlogContext';
import Title from './Title';
import BlogItem from './BlogItem';

const FeaturedBlogs = () => {
    const { blogs } = useContext(BlogContext);
    const [featuredBlogs, setFeaturedBlogs] = useState([]);

    useEffect(() => {
        // Filtering featured blogs
        const featured = blogs.filter((item) => item.featured);
        setFeaturedBlogs(featured.slice(0, 5)); // Limit to 5 featured blogs
    }, [blogs]);

    return (
        <div className="my-14 px-6">
            {/* Section Header */}
            <div className="text-center py-8">
                <Title text1="FEATURED" text2="BLOGS" />
                <p className="w-full md:w-3/4 lg:w-2/3 mx-auto text-gray-400 text-sm sm:text-base">
                    Discover the best of anime with our curated featured blogs! From in-depth reviews to the latest industry news, we've got you covered.
                </p>
            </div>

            {/* Blog Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {featuredBlogs.length > 0 ? (
                    featuredBlogs.map((item, index) => (
                        <BlogItem 
                            key={index} 
                            id={item._id} 
                            image={item.coverImage} 
                            title={item.title} 
                            description={item.description} 
                        />
                    ))
                ) : (
                    <p className="text-gray-500 text-center col-span-full">No featured blogs available.</p>
                )}
            </div>
        </div>
    );
};

export default FeaturedBlogs;

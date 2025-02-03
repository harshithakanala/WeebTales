import React, { useContext, useEffect, useState } from 'react'
import { BlogContext } from '../context/BlogContext'
import Title from './Title';
import BlogItem from './BlogItem';

const FeaturedBlogs = () => {

    const { blogs } = useContext(BlogContext);
    const [featuredBlogs, setFeaturedBlogs] = useState([]);

    useEffect(() => {
        // Filtering the blogs marked as featured
        const featured = blogs.filter((item) => item.featured);
        setFeaturedBlogs(featured.slice(0, 5)); // Limiting to 5 blogs
    }, [blogs]);

    return (
        <div className='my-10'>
            <div className='text-center text-3xl py-8'>
                <Title text1={'FEATURED'} text2={'BLOGS'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Discover the best of anime with our featured blog posts, from in-depth reviews to the latest industry news!
                </p>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    featuredBlogs.map((item, index) => (
                        <BlogItem key={index} id={item._id} title={item.title} image={item.coverImage} description={item.description} />
                    ))
                }
            </div>
        </div>
    )
}

export default FeaturedBlogs;

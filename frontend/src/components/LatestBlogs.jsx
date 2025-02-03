import React, { useContext, useEffect, useState } from 'react'
import { BlogContext } from '../context/BlogContext'
import Title from './Title';
import BlogItem from './BlogItem';  // Assuming BlogItem is a component to display individual blog details

const LatestBlogs = () => {

    const { blogs } = useContext(BlogContext);
    const [latestBlogs, setLatestBlogs] = useState([]);

    useEffect(() => {
        // Display the latest 10 blogs, you can adjust this number as needed
        setLatestBlogs(blogs.slice(0, 10));
    }, [blogs]);

    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={'LATEST'} text2={'BLOG POSTS'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Stay updated with the latest anime news, reviews, and recommendations. Dive into our latest blog posts!
                </p>
            </div>

            {/* Rendering Blogs */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    latestBlogs.map((item, index) => (
                        <BlogItem key={index} id={item._id} image={item.coverImage} title={item.title} description={item.description} />
                    ))
                }
            </div>
        </div>
    )
}

export default LatestBlogs;

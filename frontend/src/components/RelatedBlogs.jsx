import React, { useContext, useEffect, useState } from 'react'
import { BlogContext } from '../context/BlogContext'
import Title from './Title';
import BlogItem from './BlogItem'; // Assuming BlogItem displays blog details

const RelatedBlogs = ({ category, subCategory }) => {

    const { blogs } = useContext(BlogContext);
    const [related, setRelated] = useState([]);

    useEffect(() => {

        if (blogs.length > 0) {
            
            let blogsCopy = blogs.slice();

            // Filter blogs based on category and subCategory
            blogsCopy = blogsCopy.filter((item) => category === item.genre);
            blogsCopy = blogsCopy.filter((item) => subCategory === item.subCategory);

            setRelated(blogsCopy.slice(0, 5)); // Show up to 5 related blog posts
        }

    }, [blogs, category, subCategory])

    return (
        <div className='my-24'>
            <div className='text-center text-3xl py-2'>
                <Title text1={'RELATED'} text2={'BLOG POSTS'} />
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {related.map((item, index) => (
                    <BlogItem key={index} id={item._id} title={item.title} description={item.description} thumbnailImage={item.thumbnailImage} />
                ))}
            </div>
        </div>
    )
}

export default RelatedBlogs

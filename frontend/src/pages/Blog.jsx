import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BlogContext } from '../context/BlogContext';
import { assets } from '../assets/assets';
import RelatedBlogs from '../components/RelatedBlogs';

const BlogPost = () => {

  const { blogId } = useParams();
  const { blogs } = useContext(BlogContext);
  const [blogData, setBlogData] = useState(false);
  const [image, setImage] = useState('');

  const fetchBlogData = async () => {
    blogs.map((item) => {
      if (item._id === blogId) {
        setBlogData(item)
        setImage(item.coverImage)
        return null;
      }
    })
  }

  useEffect(() => {
    fetchBlogData();
  }, [blogId, blogs]);

  return blogData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/*----------- Blog Data-------------- */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/*---------- Blog Images------------- */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
              {
                blogData.coverImage && (
                  <img src={blogData.coverImage} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="Blog Cover" />
                )
              }
          </div>
          <div className='w-full sm:w-[80%]'>
              <img className='w-full h-auto' src={image} alt="Blog Content" />
          </div>
        </div>

        {/* -------- Blog Info ---------- */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{blogData.title}</h1>
          <div className=' flex items-center gap-1 mt-2'>
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_dull_icon} alt="" className="w-3 5" />
              <p className='pl-2'>({blogData.genre})</p>
          </div>
          <p className='mt-5 text-gray-500 md:w-4/5'>{blogData.description}</p>
        </div>
      </div>

      {/* ---------- Description & Comments Section ------------- */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Comments (122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>{blogData.content}</p>
        </div>
      </div>

      {/* --------- display related blogs ---------- */}
      <RelatedBlogs category={blogData.genre} />

    </div>
  ) : <div className=' opacity-0'></div>
}

export default BlogPost;

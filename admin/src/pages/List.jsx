import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const List = ({ token }) => {

  const [list, setList] = useState([])

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/blog/list')
      if (response.data.success) {
        setList(response.data.blogs.reverse()) 
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const removeBlog = async (id) => {
    try {
      const response = await axios.post(backendUrl + '/api/blog/remove', { id }, { headers: { token } })

      if (response.data.success) {
        toast.success(response.data.message)
        await fetchList()
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchList()
  }, [])

  return (
    <>
      <p className='mb-2'>All Anime Blogs</p>
      <div className='flex flex-col gap-2'>

        {/* ------- List Table Title ---------- */}
        <div className='hidden md:grid grid-cols-[1fr_3fr_2fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm'>
          <b>Thumbnail</b>
          <b>Title</b>
          <b>Genre</b>
          <b>Release Date</b>
          <b className='text-center'>Action</b>
        </div>

        {/* ------ Anime Blog List ------ */}
        {
          list.map((item, index) => (
            <div className='grid grid-cols-[1fr_3fr_2fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm' key={index}>
              {/* Blog Thumbnail */}
              <img className='w-12' src={item.coverImage || 'default-coverImage.jpg'} alt="Blog Cover" />
              
              {/* Blog Title */}
              <p>{item.title}</p>
              
              {/* Genre */}
              <p>{item.genre}</p>
              
              {/* Release Date */}
              <p>{new Date(item.releaseDate).toLocaleDateString()}</p>
              
              {/* Remove Blog Button */}
              <p onClick={() => removeBlog(item._id)} className='text-right md:text-center cursor-pointer text-lg'>X</p>
            </div>
          ))
        }

      </div>
    </>
  )
}

export default List

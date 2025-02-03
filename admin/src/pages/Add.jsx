import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const AddAnimeBlog = ({ token }) => {
  const [coverImage, setCoverImage] = useState(null)
  const [thumbnailImage, setThumbnailImage] = useState(null)

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [genre, setGenre] = useState('Action')
  const [releaseDate, setReleaseDate] = useState('')
  const [featured, setFeatured] = useState(false)

  const onSubmitHandler = async (e) => {
    e.preventDefault()

    try {
      const formData = new FormData()

      // Append all form fields
      formData.append('title', title)
      formData.append('description', description)
      formData.append('genre', genre)
      formData.append('releaseDate', releaseDate)
      formData.append('featured', featured)

      // Append images if they are selected
      if (coverImage) {
        formData.append('coverImage', coverImage)
      }
      if (thumbnailImage) {
        formData.append('thumbnailImage', thumbnailImage)
      }

      // Send form data to backend
      const response = await axios.post(backendUrl + '/api/blog/add', formData, {
        headers: { token },
      })

      if (response.data.success) {
        toast.success(response.data.message)
        setTitle('')
        setDescription('')
        setCoverImage(null)
        setThumbnailImage(null)
        setReleaseDate('')
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-3'>
      {/* Upload Cover Image */}
      <div>
        <p className='mb-2'>Upload Cover Image</p>
        <label htmlFor='coverImage'>
          <img
            className='w-20'
            src={coverImage ? URL.createObjectURL(coverImage) : assets.upload_area}
            alt='Cover Image Preview'
          />
          <input
            onChange={(e) => setCoverImage(e.target.files[0])}
            type='file'
            id='coverImage'
            hidden
          />
        </label>
      </div>

      {/* Upload Thumbnail Image */}
      <div>
        <p className='mb-2'>Upload Thumbnail Image</p>
        <label htmlFor='thumbnailImage'>
          <img
            className='w-20'
            src={thumbnailImage ? URL.createObjectURL(thumbnailImage) : assets.upload_area}
            alt='Thumbnail Image Preview'
          />
          <input
            onChange={(e) => setThumbnailImage(e.target.files[0])}
            type='file'
            id='thumbnailImage'
            hidden
          />
        </label>
      </div>

      {/* Blog Title */}
      <div className='w-full'>
        <p className='mb-2'>Blog Title</p>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className='w-full max-w-[500px] px-3 py-2'
          type='text'
          placeholder='Anime Blog Title'
          required
        />
      </div>

      {/* Blog Description */}
      <div className='w-full'>
        <p className='mb-2'>Blog Description</p>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className='w-full max-w-[500px] px-3 py-2'
          type='text'
          placeholder='Write content here'
          required
        />
      </div>

      {/* Release Date */}
      <div className='w-full'>
        <p className='mb-2'>Release Date</p>
        <input
          onChange={(e) => setReleaseDate(e.target.value)}
          value={releaseDate}
          className='w-full max-w-[500px] px-3 py-2'
          type='date'
          required
        />
      </div>

      {/* Genre */}
      <div>
        <p className='mb-2'>Genre</p>
        <select onChange={(e) => setGenre(e.target.value)} className='w-full px-3 py-2'>
          <option value='Action'>Action</option>
          <option value='Adventure'>Adventure</option>
          <option value='Fantasy'>Fantasy</option>
          <option value='Romance'>Romance</option>
          <option value='Sci-Fi'>Sci-Fi</option>
          <option value='Horror'>Horror</option>
        </select>
      </div>

      {/* Bestseller Checkbox */}
      <div className='flex gap-2 mt-2'>
        <input onChange={() => setFeatured((prev) => !prev)} checked={featured} type='checkbox' id='featured' />
        <label className='cursor-pointer' htmlFor='featured'>Add to featured</label>
      </div>

      {/* Submit Button */}
      <button type='submit' className='w-28 py-3 mt-4 bg-black text-white'>
        ADD
      </button>
    </form>
  )
}

export default AddAnimeBlog

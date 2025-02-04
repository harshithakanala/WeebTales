import React, { useState } from 'react';
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';
import { assets } from '../assets/assets'; // Import assets for default image

const AddBlog = ({ token }) => {
  const [coverImage, setCoverImage] = useState(null);
  const [thumbnailImage, setThumbnailImage] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [genre, setGenre] = useState('Action');
  const [releaseDate, setReleaseDate] = useState('');
  const [featured, setFeatured] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      formData.append('genre', genre);
      formData.append('releaseDate', releaseDate);
      formData.append('featured', featured);

      if (coverImage) formData.append('coverImage', coverImage);
      if (thumbnailImage) formData.append('thumbnailImage', thumbnailImage);

      const response = await axios.post(`${backendUrl}/api/blog/add`, formData, { headers: { token } });

      if (response.data.success) {
        toast.success(response.data.message);
        setTitle('');
        setDescription('');
        setCoverImage(null);
        setThumbnailImage(null);
        setReleaseDate('');
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="mt-[80px] max-w-3xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-4">Add New Blog</h1>
      <form onSubmit={onSubmitHandler} className="flex flex-col gap-4">
        {/* Upload Cover Image */}
        <div>
          <p className="mb-2">Upload Cover Image</p>
          <label htmlFor="coverImage">
            <img
              className="w-20 rounded-lg cursor-pointer"
              src={coverImage ? URL.createObjectURL(coverImage) : assets.upload_area}
              alt="Cover"
            />
            <input type="file" id="coverImage" hidden onChange={(e) => setCoverImage(e.target.files[0])} />
          </label>
        </div>

        {/* Upload Thumbnail Image */}
        <div>
          <p className="mb-2">Upload Thumbnail Image</p>
          <label htmlFor="thumbnailImage">
            <img
              className="w-20 rounded-lg cursor-pointer"
              src={thumbnailImage ? URL.createObjectURL(thumbnailImage) : assets.upload_area}
              alt="Thumbnail"
            />
            <input type="file" id="thumbnailImage" hidden onChange={(e) => setThumbnailImage(e.target.files[0])} />
          </label>
        </div>

        <input type="text" placeholder="Blog Title" value={title} onChange={(e) => setTitle(e.target.value)} required className="w-full p-3 rounded-md bg-gray-700" />
        <textarea placeholder="Blog Description" value={description} onChange={(e) => setDescription(e.target.value)} required className="w-full p-3 rounded-md bg-gray-700" />
        
        {/* Genre Selection */}
        <select value={genre} onChange={(e) => setGenre(e.target.value)} className="w-full p-3 rounded-md bg-gray-700">
          <option value="Action">Action</option>
          <option value="Adventure">Adventure</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Romance">Romance</option>
          <option value="Sci-Fi">Sci-Fi</option>
        </select>

        {/* Release Date */}
        <input type="date" value={releaseDate} onChange={(e) => setReleaseDate(e.target.value)} required className="w-full p-3 rounded-md bg-gray-700" />

        {/* Featured Checkbox */}
        <div className="flex items-center gap-2">
          <input type="checkbox" id="featured" checked={featured} onChange={() => setFeatured((prev) => !prev)} />
          <label htmlFor="featured">Add to Featured</label>
        </div>

        <button type="submit" className="w-full py-3 bg-blue-500 text-white rounded-md">Submit</button>
      </form>
    </div>
  );
};

export default AddBlog;

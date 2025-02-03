import mongoose from 'mongoose';

const animeBlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  genre: { type: String, required: true },
  releaseDate: { type: Date, required: true },
  coverImage: { type: String, required: true },
  thumbnailImage: { type: String, required: false },
  featured: { type: Boolean, default: false },
  date: { type: Date, default: Date.now } 
});

const animeBlogModel = mongoose.models.animeBlog || mongoose.model('animeBlog', animeBlogSchema);

export default animeBlogModel;

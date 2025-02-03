import express from 'express'
import { listAnimeBlogs, addAnimeBlog, removeAnimeBlog, singleAnimeBlog } from '../controllers/blogController.js'
import upload from '../middleware/multer.js';
import adminAuth from '../middleware/adminAuth.js';

const blogRouter = express.Router();

blogRouter.post('/add',adminAuth,upload.fields([{ name: 'coverImage', maxCount: 1 }, { name: 'thumbnailImage', maxCount: 1 }]),addAnimeBlog);
blogRouter.post('/remove',adminAuth,removeAnimeBlog);
blogRouter.post('/single',singleAnimeBlog);
blogRouter.get('/list',listAnimeBlogs)

export default blogRouter
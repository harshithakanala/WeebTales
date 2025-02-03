import { v2 as cloudinary } from "cloudinary";
import animeBlogModel from "../models/blogModel.js";

// Function to add anime blog
const addAnimeBlog = async (req, res) => {
    try {
        const { title, description, genre, releaseDate, featured } = req.body;

        const coverImage = req.files.coverImage?.[0]; 
        const thumbnailImage = req.files.thumbnailImage?.[0]; 

        const images = [coverImage, thumbnailImage].filter(Boolean); 

        let imageUrls = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' });
                return result.secure_url;
            })
        );

        const blogData = {
            title,
            description,
            genre,
            releaseDate: new Date(releaseDate),
            coverImage: imageUrls[0] || "",  // Ensure it doesn't throw an error
            thumbnailImage: imageUrls[1] || "",
            featured: JSON.parse(featured || "false"), // Safe boolean conversion
            date: new Date() // Store as Date type
        };

        const blog = new animeBlogModel(blogData);
        await blog.save();

        res.json({ success: true, message: "Blog Added", blog });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// Function to list all anime blogs
const listAnimeBlogs = async (req, res) => {
    try {
        const blogs = await animeBlogModel.find({});
        res.json({ success: true, blogs });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// Function to remove an anime blog
const removeAnimeBlog = async (req, res) => {
    try {
        const { id } = req.body;

        if (!id) {
            return res.status(400).json({ success: false, message: "Blog ID is required" });
        }

        const deletedBlog = await animeBlogModel.findByIdAndDelete(id);

        if (!deletedBlog) {
            return res.status(404).json({ success: false, message: "Blog not found" });
        }

        res.json({ success: true, message: "Blog Removed" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

const singleAnimeBlog = async (req, res) => {
    try {
        
        const { blogId } = req.body
        const blog = await animeBlogModel.findById(blogId)
        res.json({success:true,blog})

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export { listAnimeBlogs, addAnimeBlog, removeAnimeBlog, singleAnimeBlog };

import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import blogRouter from './routes/blogRoute.js';
import emailRouter from './routes/emailRoute.js';

// Initialize Express App
const app = express();
const port = process.env.PORT || 4000;

// Connect to MongoDB & Cloudinary
connectDB();
connectCloudinary();

// Middleware to Parse JSON Requests
app.use(express.json());

// CORS Configuration
app.use(cors({
    origin: ["https://weebtales-frontend.vercel.app", "https://weebtales-iota.vercel.app"], // Allow specific frontend origins
    methods: "GET,POST,PUT,DELETE,OPTIONS",
    allowedHeaders: "Content-Type,Authorization",
    credentials: true // Allow cookies & authentication headers
}));

// Custom Middleware to Log Requests (Optional for Debugging)
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} request to ${req.url}`);
    next();
});

// API Endpoints
app.use('/api/user', userRouter);
app.use('/api/blog', blogRouter);
app.use('/api/email', emailRouter);

// Root Route for Testing
app.get('/', (req, res) => {
    res.send("API Working");
});

// 404 Route Handler
app.use((req, res) => {
    res.status(404).json({ success: false, message: "API route not found" });
});

// Global Error Handler
app.use((err, req, res, next) => {
    console.error("Server Error:", err.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
});

// Start Server
app.listen(port, () => console.log(`Server started on PORT: ${port}`));

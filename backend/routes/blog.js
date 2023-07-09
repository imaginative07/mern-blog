import express from "express";
import Blog from '../models/blogModel.js';
import asyncHandler from '../middleware/asyncHandler.js';
const router = express.Router();

// @desc    Get all blog posts
// @route   GET /api/blog
// @access  Public
router.get("/", asyncHandler(async (req, res) => {
    const blogs = await Blog.find({});
    res.status(200).json(blogs);
}));

// @desc    Create a blog post
// @route   POST /api/blog
// @access  Private / Admin
router.post("/", asyncHandler( async (req, res) => {
    
    const { title, content, category, user, image, readtime, pageVisibility } = req.body;
    
    const blog = await Blog.create({
        title,
        content,
        category,
        user,
        image,
        readtime,
        pageVisibility
    });

    const createBlog = await blog.save();

    res.status(201).json(createBlog);

}));

// @desc    Get blog by id
// @route   GET /api/blog/:id
// @access  Public
router.get('/:id', asyncHandler( async (req, res) => {
    
    const blog = await Blog.findById(req.params.id).populate('user', 'name email');

    if(blog) {
        res.status(200).json(blog);
    } else {
        res.status(404);
        throw new Error('Blog not found');
    }
    
}));

export default router;
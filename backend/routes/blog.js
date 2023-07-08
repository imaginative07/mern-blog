import Express from "express";
import Blog from '../models/blog';
const router = Express.Router();

// @desc    Get all blog posts
// @route   GET /api/blog
// @access  Public
router.get("/", (req, res) => {
    const blog = Blog.find({});
    res.status(200).json(blog);
});

// @desc    Create a blog post
// @route   POST /api/blog
// @access  Private / Admin
router.post("/", protectRoute, admin, asyncHandler( async (req, res) => {
    
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
router.get('/:id', protectRoute, admin, asyncHandler( async (req, res) => {
    
    const order = await Order.findById(req.params.id).populate('user', 'name email');

    if(order) {
        res.status(200).json(order);
    } else {
        res.status(404);
        throw new Error('Order not found');
    }
    
}));

export default router;
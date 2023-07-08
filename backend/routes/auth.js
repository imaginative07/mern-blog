import express from 'express';
import asyncHandler from '../middleware/asyncHandler';
import User from '../models/User';
import jwt from 'jsonwebtoken';

const router = express.Router();

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
router.post('/login', asyncHandler( async (req, res) => {

    const { email, password } = req.body;
    const user = await User.findOne({ email });
    
    if (user && (await user.checkPassword(password))) {

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '30d' });

        //Set JWT as HTTP-Only cookie
        res.cookie('jwt', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'development',
            sameSite: 'strict',
            maxAge: 1000 * 60 * 60 * 24 * 30, // 30 Days
        });

        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            admin: user.admin,
        });

    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }
}));

// @desc    Register user
// @route   POST /api/users
// @access  Public
router.post('/', asyncHandler( async (req, res) => {
    
    const { name, email, password } = req.body;
    
    const user = await User.create({
        name,
        email,
        password
    
    });

    if(user) {

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '30d' });

        //Set JWT as HTTP-Only cookie
        res.cookie('jwt', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'development',
            sameSite: 'strict',
            maxAge: 1000 * 60 * 60 * 24 * 30, // 30 Days
        });

        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            admin: user.admin,
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }

}));
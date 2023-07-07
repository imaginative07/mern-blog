import express from 'express';
import asyncHandler from '../middleware/asyncHandler';
import User from '../models/User';

const router = express.Router();

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
router.post('/login', asyncHandler( async (req, res) => {
    res.send('Log in user');
}));
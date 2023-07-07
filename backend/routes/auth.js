import express from 'express';
import asyncHandler from '../middleware/asyncHandler';
import User from '../models/User';

const router = express.Router();
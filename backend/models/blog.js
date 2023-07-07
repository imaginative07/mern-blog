import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    title : {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    likes: [{
        type: mongoose.Schema.ObjectId,
        ref: "User"
    }],
    likeCount: {
        type: Number,
        default: 0
    },
    comments: [{
            type: mongoose.Schema.ObjectId,
            ref: "Comment"
    }],
    commentCount: {
        type: Number,
        default: 0
    }
});
import mongoose from "mongoose";
import slugify from "slugify";

const commentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
},{
    timestamps: true,
});

const blogSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    slug: String,
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    readtime: {
        type: Number,
        default: 3,
    },
    pageVisibility: {
        type: Boolean,
        required: true,
        default: true,
    },
    // likes: [{
    //     type: mongoose.Schema.ObjectId,
    //     ref: "User"
    // }],
    // likeCount: {
    //     type: Number,
    //     default: 0
    // },
    comments: [commentSchema],
    commentCount: {
        type: Number,
        default: 0,
    },
},{
    timestamps: true,
});

blogSchema.pre("save", function (next) {
    if (!this.isModified("title")) {
        next();
    }

    this.slug = this.makeSlug();

    next();
});

blogSchema.methods.makeSlug = function () {
    return slugify(this.title, {
        replacement: "-",
        remove: /[*+~.()'"!:@/?]/g,
        lower: true,
        strict: false,
        locale: "tr",
        trim: true,
    });
};

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;

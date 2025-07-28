// models/Blog.js
import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  tags: [String],
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  comments: [{
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    comment: String,
    date: { type: Date, default: Date.now }
  }],
  status: { type: String, enum: ['public', 'private', 'draft'], default: 'public' },
  image: { type: String }, // ✅ NEW FIELD
}, { timestamps: true });

const Blog = mongoose.model("Blog", blogSchema);
export default Blog;

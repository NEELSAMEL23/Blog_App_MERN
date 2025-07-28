import Blog from "../models/Blog.js";

import cloudinary from '../utils/cloudinary.js';

export const createBlog = async (req, res) => {
  try {
    const { title, content, tags, status, isFeatured } = req.body;
    const file = req.file; // from multer

    if (!title || !content) {
      return res.status(400).json({ message: "Title and content are required" });
    }

    let imageUrl = "";
    if (file) {
      try {
        const result = await cloudinary.uploader.upload(file.path, {
          folder: "blog-images",
        });
        imageUrl = result.secure_url;
      } catch (uploadErr) {
        return res.status(500).json({ message: "Image upload failed" });
      }
    }

    const blog = await Blog.create({
      title,
      content,
      tags: tags || [],
      status: status || 'public',
      isFeatured: isFeatured || false,
      image: imageUrl, // ✅ save image
      author: req.user._id,
    });

    res.status(201).json(blog);
  } catch (err) {
    console.error("Create blog error:", err);
    res.status(500).json({ message: "Server error while creating blog" });
  }
};

// Get All Public Blogs
export const getPublicBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ status: "public" }).populate("author", "name avatar");
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get Blog By ID (only public or owner/admin can access)
export const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).populate("author", "name avatar");
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    const isOwner = req.user && blog.author._id.toString() === req.user._id.toString();
    const isAdmin = req.user && req.user.role === "admin";

    if (blog.status === "private" && !isOwner && !isAdmin) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get Current User's Blogs
export const getMyBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ author: req.user._id });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update Blog (owner or admin)
export const updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    const isOwner = blog.author.toString() === req.user._id.toString();
    const isAdmin = req.user.role === "admin";

    if (!isOwner && !isAdmin) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    // Destructure with defaults
    const {
      title,
      content,
      tags,
      status,
      isFeatured
    } = req.body;

    // Only assign if values are provided and valid
    if (title) blog.title = title;
    if (content) blog.content = content;
    if (tags) blog.tags = tags;

    if (status && ['public', 'private', 'draft'].includes(status)) {
      blog.status = status;
    }

    if (typeof isFeatured === "boolean") {
      blog.isFeatured = isFeatured;
    }

    await blog.save();
    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// Delete Blog (owner or admin)
export const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    const isOwner = blog.author.toString() === req.user._id.toString();
    const isAdmin = req.user.role === "admin";

    if (!isOwner && !isAdmin) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    await blog.deleteOne();
    res.json({ message: "Blog deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Admin: Get All Blogs
export const getAllBlogsAdmin = async (req, res) => {
  try {
    const blogs = await Blog.find().populate("author", "name avatar");
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};





// Filter blogs by tag or category
export const getBlogsByTagOrCategory = async (req, res) => {
  try {
    const { tag, status } = req.query;

    const filter = {};
    if (tag) filter.tags = tag;
    if (status) filter.status = status;
    else filter.status = "public"; // default to public if no status passed

    const blogs = await Blog.find(filter).populate("author", "name avatar");
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



// like blog count

export const toggleLikeBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    const userId = req.user._id.toString();
    const alreadyLiked = blog.likes.map(id => id.toString()).includes(userId);

    if (alreadyLiked) {
      // Unlike
      blog.likes = blog.likes.filter(id => id.toString() !== userId);
    } else {
      // Like
      blog.likes.push(userId);
    }

    await blog.save();

    res.status(200).json({
      liked: !alreadyLiked,
      totalLikes: blog.likes.length,
      message: alreadyLiked ? "Unliked" : "Liked",
    });
  } catch (err) {
    console.error("Toggle like error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

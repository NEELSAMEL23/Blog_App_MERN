import express from "express";
import {
  createBlog,
  getPublicBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
  getMyBlogs,
  getAllBlogsAdmin,
  getBlogsByTagOrCategory,
  toggleLikeBlog
} from "../controllers/blog.controller.js";
import { protect, isAdmin } from "../middleware/auth.middleware.js";
import upload from "../middleware/upload.js";

const router = express.Router();

// PUBLIC ROUTES
router.get("/", getPublicBlogs); // Public blogs
router.get("/filter", getBlogsByTagOrCategory);

// PROTECTED USER ROUTES
router.get("/user/me", protect, getMyBlogs); // ✅ Move above `/:id`
router.post("/", protect, upload.single("image"), createBlog);
router.put("/:id", protect, upload.single("image"), updateBlog);
router.delete("/:id", protect, deleteBlog);
router.patch("/:id/like", protect, toggleLikeBlog);

// ADMIN ROUTES
router.get("/admin/all", protect, isAdmin, getAllBlogsAdmin);


// DYNAMIC ID ROUTE LAST
router.get("/:id", getBlogById); // ✅ keep at the bottom

export default router;

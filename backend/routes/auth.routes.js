import express from "express";
import {
  registerUser,
  loginUser,
  getUserProfile,
  getAllUsers,
  deleteUserById,
  updateUserProfile
} from "../controllers/auth.controller.js";

import { protect, isAdmin } from "../middleware/auth.middleware.js";
import upload from "../middleware/upload.js"; // 


const router = express.Router();

// Public routes
router.post("/register", upload.single("avatar"), registerUser);
router.post("/login", loginUser);

// Authenticated user
router.get("/profile", protect, getUserProfile);
router.put("/profile", protect, upload.single("avatar"), updateUserProfile); // ⬅️ user can update self

// Admin-only routes
router.get("/users", protect, isAdmin, getAllUsers);
router.put("/users/:id", protect, isAdmin, upload.single("avatar"), updateUserProfile);
router.delete("/users/:id", protect, isAdmin, deleteUserById);


export default router;

// routes/comment.routes.js
import express from "express";
import {
  addComment,
  deleteComment,
  getCommentsByPost,
} from "../controllers/comment.controller.js";
import {protect} from "../middleware/auth.middleware.js";

const router = express.Router();

// Comments are tied to postId
router.route("/:postId")
  .post(protect, addComment)
  .get(getCommentsByPost);

router.delete("/:id", protect, deleteComment);

export default router;

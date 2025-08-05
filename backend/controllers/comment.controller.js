import Comment from "../models/Comment.js";
import Blog from "../models/Blog.js";

// Add comment to a post
export const addComment = async (req, res) => {
    try {
        const { content } = req.body;
        const { postId } = req.params;

        if (!content?.trim()) {
            return res.status(400).json({ message: "Comment cannot be empty" });
        }

        // Find the blog post
        const post = await Blog.findById(postId);
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }

        // Create the comment
        const comment = await Comment.create({
            content,
            user: req.user._id,
            post: postId,
        });

        // ✅ Push comment ID to blog's comments array
        post.comments.push(comment._id);
        await post.save();

        // Populate user info in comment response
        const populated = await comment.populate("user", "name avatar");

        res.status(201).json(populated);
    } catch (err) {
        console.error("Error adding comment:", err.message);
        res.status(500).json({ message: err.message });
    }
};


// Delete a comment
export const deleteComment = async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        if (!comment) return res.status(404).json({ message: "Comment not found" });

        if (
            comment.user.toString() !== req.user._id.toString() &&
            req.user.role !== "admin"
        ) {
            return res.status(403).json({ message: "Unauthorized" });
        }

        await comment.deleteOne();
        res.status(200).json({ message: "Comment deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get all comments for a post
export const getCommentsByPost = async (req, res) => {
    try {
        const { postId } = req.params;

        const comments = await Comment.find({ post: postId })
            .populate("user", "name avatar")
            .sort({ createdAt: -1 });

        res.status(200).json(comments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
